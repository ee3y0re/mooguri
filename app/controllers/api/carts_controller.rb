class Api::CartsController < ApplicationController
  ## need current user's cart
  def index
    ## testing line
    @cart_items = User.find(2).cart_items

    ## final line with current user
    # @cart_items = curent_user.cart_items
    render "/api/carts/index"
  end

  ## create current user's cart after they start to add an item

  ## would need update on cart if we have quantity attribute
  def update
    
  end

  ## delete a cart after user removes last item
  def destroy
    
  end

  private

  def cart_params
    params.require(:cart).permit(:buyer_id, :cart_item_id)
  end
end
