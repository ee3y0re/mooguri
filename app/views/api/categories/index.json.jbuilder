@categories.map do |single_category|
  json.set! single_category.id do
    json.partial! "/api/categories/category", category: single_category
  end
end