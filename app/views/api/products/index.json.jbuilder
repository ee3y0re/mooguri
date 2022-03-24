@products.each do |product|

  # product id: {
  #   all product keys
  # }

  json.set! item.id do
    json.partial! "api/products/product", product: product
  end
end