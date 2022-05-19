@carts.map do |cart|
  json.set! cart.id do
    json.partial! "/api/products/product", product: cart.cart_item
    json.photoUrl url_for(cart.cart_item.photo)
    json.buyerId cart.buyer_id
    json.cartItemId cart.cart_item_id
    json.qty cart.qty
  end
end

# carts : {
#   cartId : {product}
# }