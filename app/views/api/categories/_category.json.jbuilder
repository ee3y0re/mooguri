json.key_format! camelize: :lower #keeps state in camel case because of json
json.extract! category,
  :id,
  :category_name,
  :product_id