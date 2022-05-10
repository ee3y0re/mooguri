json.key_format! camelize: :lower
json.extract! cart,
  :id,
  :buyer_id, 
  :cart_item_id