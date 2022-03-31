# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Product.destroy_all
Review.destroy_all

User.create!({ username: "0reoCookies", email: "vanillab@abbymail.com", password: "besticecream" })
User.create!({ username: "StrawB3rries", email: "iceyice@abbymail.com", password: "YummyFruitsOfOurLabor" })
User.create!({ username: "MonstrCookie", email: "smoothestsmoothie.abbymail.com", password: "FullOfSweets"})
User.create!({ username: "EtsyListings", email: "etsyclone.com", password: "mooguriChild1" })

milk1_product = Product.create!({
  product_name: "Milk Jug Charm Miniature Food Jewelry Resin Charms Handmade Jewelry from AllSoCharming", 
  description: "Milk Jug Charm Miniature Food Jewelry Resin Charms Handmade Jewelry. A super realistic milk jug charm complete with it's own tiny nutrition label! Each charm comes attached to a silver lobster clasp and measures roughly 3/4 inches tall. If you are gifting this charm and would like to leave a short personal message with your order you can do so by adding the message to the 'notes to seller' section during checkout. All of my jewelry comes gift wrapped inside a padded jewelry box and is shipped via USPS First Class Mail inside a bubbled mailer.", 
  price: 12, 
  category: "milk", 
  seller_id: 4, 
  availability: 3,
})

milk1_pic = URI.open('https://mooguri-dev.s3.us-west-1.amazonaws.com/milk_il_1588xn.3239319059_cwz1.jpeg')
milk1_product.photo.attach(io: milk1_pic, filename: "/milk_il_1588xn.3239319059_cwz1.jpeg")

# photoVariable = URI.open('Object Url')
# # variableForProductInstance is an instance of the Product.create! or whatever your making
# variableForProductInstance.photo.attach(io: photoVariable, filename: "/key")

milk2_product = Product.create!({
  product_name: "Cheese Flight from KeystoneFarmsCheese", 
  description: "Any four 8 oz. blocks of cheese from our Best Sellers (NOTE: if you do not specify which 8 oz. blocks of cheese you would like to be included, we will choose four (2) blocks. Additional charges may occur on variety of cheese(s) selected). Pack of crackers. Do you have a large order of 10 or more gift packs? Learn more about our large quantity gift package options at our Business Gifts pages. Due to the perishable nature of our products, we do not ship over the weekend. Most orders placed Thursday-Sunday will ship the following Monday, unless Saturday delivery is available in your area. We will notify you with a tracking number once your package ships. *All orders will include an insulated box. Sorry, we do not ship to Hawaii or Alaska.", 
  price: 54.50, 
  category: "cheese", 
  seller_id: 4, 
  availability: 300,
})


Review.create!({ body: "I've got some BEEF with whoever made this site!", reviewer_id: 3, product_id: 1})
Review.create!({ body: "Now, now, let's settle this with proper cow-moo-nication!", reviewer_id: 2, product_id: 1})
Review.create!({ body: "Okay, NOW you're making my blood boil! >:C", reviewer_id: 3, product_id: 1 })
Review.create!({ body: "Well, you're making my milk curdle *sigh*", reviewer_id: 2, product_id: 1 })
