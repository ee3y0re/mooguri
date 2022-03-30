@reviews.map do |single_review|
  json.set! single_review.id do
    json.partial! "api/reviews/review", review: single_review
  end
end

#test on postman by navigating to index url of localhost:3000/api/reviews
#make sure you already have a review saved in database
#you should have a json file containing the following
# {
#     "1": {
#         "id": 1,
#         "body": "I think I have some BEEF without whOOever created this site!",
#         "reviewerId": 1,
#         "productId": 1
#     }
# }