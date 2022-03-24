# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all
User.create!({ username: "0reoCookies", email: "vanillab@abbymail.com", password: "besticecream" })
User.create!({ username: "StrawB3rries", email: "iceyice@abbymail.com", password: "YummyFruitsOfOurLabor" })
User.create!({ username: "MonstrCookie", email: "smoothestsmoothie.abbymail.com", password: "FullOfSweets"})

Product.create!({
  product_name: "Shadowscapes Tarot", 
  description: "By author, Barbara Moore, and artist, Stephanie Pui-Mun Law.", 
  price: 30.66, 
  category: "metaphysical", 
  seller_id: 3, 
  availability: 3,
})

Product.create!({
  productName: "Moldavite Pendant",
  description: "This crystal opens up the heart chakra. Side effects may include cold sweats, crying episodes, and rapid transformation.",
  price: 20.00,
  category: "metaphysical",
  seller_id: 3,
  availability: 16,
})