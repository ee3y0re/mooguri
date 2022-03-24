# json.array! @products do |product|
#   json.extract! product, :id, :product_name
#   json.photoUrl url_for(product.photo)

#   # product id: {
#   #   all product keys
#   # }

#   # json.set! product.id do
#   #   json.partial! "api/products/product", product: product
#   # end
# end

json.photoUrls @post.photos.map { |file| url_for(file) }