## array of individual product objects
# json.array! @category_prods.each do |single_product|
#   json.id single_product
# end

## array of individual product ids
json.partial! 'api/categories/category', category: @category
json.productIds @category_prods.map { |product| product.id }

# json.products @category_prods.map { |product| product }