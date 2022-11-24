# @prod_in_cat.map do |single_product|
#   json.set! single_product.id do
#   json.key_format! camelize: :lower
#   json.extract! single_product,
#     :id
#   end
# end

# json.array! @prod_in_cat do |single_product|
#   single_product.id
# end


## desired result
categories: {
  {
    id:,
    category_name:
    
  }
}