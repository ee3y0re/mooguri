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

User.create!([
  { username: "0reoCookies", email: "vanillab@abbymail.com", password: "besticecream" },
  { username: "StrawB3rries", email: "iceyice@abbymail.com", password: "YummyFruitsOfOurLabor" },
  { username: "MonstrCookie", email: "smoothestsmoothie.abbymail.com", password: "FullOfSweets"},
  { username: "EtsyListings", email: "etsyclone.com", password: "mooguriChild1" }
])

# product = Product.create!({
#   product_name:"",
#   description:"",
#   price:,
#   category:"",
#   seller_id:,
#   availability:
# })

# pic = URI.open()
# product.photo.attach(io:, filename:"")

# photoVariable = URI.open('Object Url')
# # variableForProductInstance is an instance of the Product.create! or whatever your making
# variableForProductInstance.photo.attach(io: photoVariable, filename: "/key")

milk1_product = Product.create!({
  product_name: "Milk Jug Charm Miniature Food Jewelry Resin Charms Handmade Jewelry from AllSoCharming", 
  description: "Milk Jug Charm Miniature Food Jewelry Resin Charms Handmade Jewelry. A super realistic milk jug charm complete with it's own tiny nutrition label! Each charm comes attached to a silver lobster clasp and measures roughly 3/4 inches tall. If you are gifting this charm and would like to leave a short personal message with your order you can do so by adding the message to the 'notes to seller' section during checkout. All of my jewelry comes gift wrapped inside a padded jewelry box and is shipped via USPS First Class Mail inside a bubbled mailer.", 
  price: 12, 
  category: "milk", 
  seller_id: User.fourth.id, 
  availability: 300,
})
milk1_pic = URI.open('https://mooguri-dev.s3.us-west-1.amazonaws.com/milk_il_1588xn.3239319059_cwz1.jpeg')
milk1_product.photo.attach(io: milk1_pic, filename: "/milk_il_1588xn.3239319059_cwz1.jpeg")

cheese1_product = Product.create!({
  product_name: "Cheese Flight from KeystoneFarmsCheese", 
  description: "Any four 8 oz. blocks of cheese from our Best Sellers (NOTE: if you do not specify which 8 oz. blocks of cheese you would like to be included, we will choose four (2) blocks. Additional charges may occur on variety of cheese(s) selected). Pack of crackers. Do you have a large order of 10 or more gift packs? Learn more about our large quantity gift package options at our Business Gifts pages. Due to the perishable nature of our products, we do not ship over the weekend. Most orders placed Thursday-Sunday will ship the following Monday, unless Saturday delivery is available in your area. We will notify you with a tracking number once your package ships. *All orders will include an insulated box. Sorry, we do not ship to Hawaii or Alaska.", 
  price: 54.50, 
  category: "cheese", 
  seller_id: User.fourth.id, 
  availability: 300,
})
cheese1_pic = URI.open('https://mooguri-dev.s3.us-west-1.amazonaws.com/cheese_1_il_794xN.3383346041_1a5j.jpeg')
cheese1_product.photo.attach(io: cheese1_pic, filename: "/cheese_1_il_794xN.3383346041_1a5j.jpeg")

yogurt1_product = Product.create!({
  product_name:"Heirloom Yogurt Starter Cultures OR Sourdough Starters from PositivelyProbiotic",
  description:"Check out our HUGE selection of probiotic cultures @ 
  PositivelyProbiotic.com. PLEASE READ: Message me your SIX culture choices or 
  note them in checkout. Thank you. Activation instructions available on our 
  website. PositivelyProbiotic.com. You will receive a total of 6 TEASPOONS of 
  cultures. One teaspoon of each culture selected. Activation instructions are 
  available on our website. PositivelyProbiotic.com. Disclaimer: Please consult 
  your doctor before adding anything new to your diet!",
  price: 36.95,
  category:"yogurt",
  seller_id: User.fourth.id,
  availability: 300
})
yogurt1_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/yogurt_il_794xN.1966709327_46j2.jpg")
yogurt1_product.photo.attach(io: yogurt1_pic, filename:"/yogurt_il_794xN.1966709327_46j2.jpg")

lactosefree1_product = Product.create!({
  product_name:'I WILL NOT TOLERATE: Hate, Bigotry, Racism, Homophobia, or Lactose. - Matte Vinyl 10" Bumper Sticker - Car Decal, from Curlworks',
  description: "Stand up for what's right!! Beautifully and vibrantly printed on durable weatherproof vinyl with a matte finish. 10 inches by 3 inches. Printed lovingly by https://www.wildeprints.com/. A 10-inch weatherproof matte vinyl sticker, perfect for your water bottle, laptop, and car!",
  price: 7,
  category:"Lactose-Free",
  seller_id: User.fourth.id,
  availability: 300
})

lactosefree1_pic = URI.open()
lactosefree1_product.photo.attach(io:, filename:"")

Review.create!([
  { body: "I've got some BEEF with whoever made this site!", reviewer_id: User.third.id, username: User.third.username, product_id: Product.first.id },
  { body: "Now, now, let's settle this with proper cow-moo-nication!", reviewer_id: User.second.id, username: User.second.username, product_id: Product.first.id },
  { body: "Okay, NOW you're making my blood boil! >:C", reviewer_id: User.third.id, username: User.third.username, product_id: Product.first.id },
  { body: "Well, you're making my milk curdle *sigh*", reviewer_id: User.second.id, username: User.second.username, product_id: Product.first.id },
  { body: "You're not supposed to see this with good ole milk jug C;", reviewer_id: User.third.id, username: User.third.username, product_id: Product.second.id }
])
