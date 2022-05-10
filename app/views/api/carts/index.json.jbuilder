@carts.map do |cart|
  json.set! cart.id do
    json.product cart.cart_item
  end
end

# carts : {
#   cartId : {product}
# }