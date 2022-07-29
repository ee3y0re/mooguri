class Api::CartsController < ApplicationController
  # before_action :require_login, only: [:create, :destroy] 
  
  ## need current user's cart
  def index
    ## testing line
    # @carts = Cart.where(buyer_id: User.first.id);

    ## final line with current user
    @carts = Cart.where(buyer_id: current_user.id);
    render "/api/carts/index"
  end

  def show
    @cart = Cart.find_by(id: params[:id])
    render "/api/carts/show"
  end

  ## create current user's cart after they start to add an item
  def create
    if !Cart.find_by(cart_item_id: cart_params[:cart_item_id])
      @cart = Cart.new(cart_params)
      if @cart.save
        redirect_to action: "index"
      else
        render json: @cart.errors.full_messages, status: 422
      end
    else
      @cart = Cart.find_by(cart_item_id: cart_params[:cart_item_id])
      cart_params_copy = cart_params
      cart_params_copy["qty"] = @cart.qty + cart_params[:qty].to_i
      @cart.update(cart_params_copy)
      redirect_to action: "index"
    end
  end

  def update
    @cart = Cart.find_by(id: params[:id])
    if @cart.update(cart_params)
      @carts = Cart.where(buyer_id: current_user.id);
      render "/api/carts/index"
    else
      render json: @cart.errors.full_messages, status: 404
    end
  end

  ## delete a cart after user removes last item
  def destroy
    ## testing block
    # @cart = Cart.find_by(id: params[:id]) # expecting cart instance
    # @cart_owner = User.first #expecting user
    # if @cart && @cart_owner.id === 1 && @cart.destroy
    #   @cart_items = current_user.cart_items
    #   render :index
    # else
    #   render json: ["Something went wrong"], status: 404
    # end

    @cart = Cart.find_by(id: params[:id]) # expecting cart instance
    @cart_owner = User.find_by(id: @cart.buyer_id) #expecting user
    if @cart && @cart_owner.id === current_user.id && @cart.destroy
      @carts = Cart.where(buyer_id: current_user.id);
      render :index
    else
      render json: ["Something went wrong"], status: 404
    end
  end

  # def reset_order
  #   @carts = Cart.where(buyer_id: current_user.id)
  #   @carts.destroy_all
  # end

  private

  def cart_params
    params.require(:cart).permit(:buyer_id, :cart_item_id, :qty)
  end
end
