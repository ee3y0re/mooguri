class Api::CartsController < ApplicationController
  # before_action :require_login, only: [:create, :destroy] 
  
  ## need current user's cart
  def index
    ## testing line
    @cart_items = User.find(1).cart_items

    ## final line with current user
    # @cart_items = current_user.cart_items
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
  # def destroy
  #   ## @cart_item = current_user.cart_items.find
  #   @cart_item = User.find(1).cart_items.find_by(id: params[:id])
  #   if @cart_item.destroy
  #     @cart_items = User.find(1).cart_items
  #     render :index
  #   else
  #     render json: ["Cart item was not found or could not be deleted"], status: 404
  #   end
  # end

  private

  def cart_params
    params.require(:cart).permit(:buyer_id, :cart_item_id)
  end
end
