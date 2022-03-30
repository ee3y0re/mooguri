json.partial! 'api/reviews/review', review: @review

#similar to index, navigate to the url of the show action and pass in id of review you want to see
#should result in a hash of similar format
# {
#     "1": {
#         "id": 1,
#         "body": "I think I have some BEEF without whOOever created this site!",
#         "reviewerId": 1,
#         "productId": 1
#     }
# }