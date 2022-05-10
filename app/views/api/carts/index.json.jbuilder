@carts.map do |cart|
  json.set! cart.id do
    json.partial! "/api/products/product", product: cart.cart_item
  end
end

# carts : {
#   cartId : {product}
# }