@carts.map do |cart|
  json.set! cart.id do
    json.partial! "/api/products/product", product: cart.cart_item
    json.photoUrl url_for(cart.cart_item.photo)
  end
end

# carts : {
#   cartId : {product}
# }