class Api::CartsController < ApplicationController
  # before_action :require_login, only: [:create, :destroy] 
  
  ## need current user's cart
  def index
    ## testing line
    # @cart_items = User.first.cart_items

    ## final line with current user
    @cart_items = current_user.cart_items
    render "/api/carts/index"
  end

  ## create current user's cart after they start to add an item
  def create
    @cart = Cart.new(cart_params)
    if @cart.save
      redirect_to action: "index"
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end

  ## would need update on cart if we have quantity attribute
  # def update
  # end

  ## delete a cart after user removes last item
  def destroy
    ## testing line
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
      @cart_items = current_user.cart_items
      render :index
    else
      render json: ["Something went wrong"], status: 404
    end
  end

  private

  def cart_params
    params.require(:cart).permit(:buyer_id, :cart_item_id)
  end
end
