json.partial! 'api/products/product', product: @product
json.photoUrl url_for(@product.photo)

#putting a reviews key in products as filteredReviews
# json.reviews @product.reviews.map { |single_review| single_review.id }

#not so simple state but hopefully easy to pull out of for now
json.reviews @product.reviews.map do |single_review|
  json.partial! "api/reviews/review", review: single_review
end