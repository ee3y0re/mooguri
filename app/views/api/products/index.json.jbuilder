#creating json array of all products and using single product parameter
@products.map do |single_product|
  #this do end block will create the following object for products' slice of state:
  # 1: {
  #   all product keys
  # }
  json.set! single_product.id do
    #this navigates to api folder, products folder, then the product at the end of url stands for _product.json.jbuilder
    #replaces this line: json.extract! product, :id, :product_name, etc.
    json.partial! "/api/products/product", product: single_product
    #because photoUrl is not originally in our schema, we create it
    json.photoUrl url_for(single_product.photo)
  end

#don't forget to close do blocks
end
