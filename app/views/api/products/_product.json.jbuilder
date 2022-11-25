#convert snake_case to camelCase
json.key_format! camelize: :lower

json.extract! product,
  :id,
  :product_name, 
  :description, 
  :price, 
  :seller_id, 
  :availability
