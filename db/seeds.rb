# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

## Gem for S3 bucket file opening
require 'open-uri'

User.destroy_all
Product.destroy_all
Review.destroy_all

## All Users
User.create!(
  [
    { 
      username: "0reoCookies", 
      email: "vanillab@abbymail.com", 
      password: "besticecream" 
    },
    { 
      username: "StrawB3rries", 
      email: "iceyice@abbymail.com", 
      password: "YummyFruitsOfOurLabor" 
    },
    { 
      username: "MonstrCookie", 
      email: "smoothestsmoothie.abbymail.com", 
      password: "FullOfSweets"
    },
    { 
      username: "EtsyListings", 
      email: "etsyclone.com", 
      password: "mooguriChild1" 
    }
  ]
)

# EDIT product = Product.create!({
#   product_name:"",
#   description:"",
#   price:,
#   category:"",
#   seller_id: User.fourth.id,
#   availability: 300
# })
# EDIT pic = URI.open()
# EDIT product.photo.attach(io: EDIT pic, filename:"")

# photoVariable = URI.open('Object Url')
# # variableForProductInstance is an instance of the Product.create! or whatever your making
# variableForProductInstance.photo.attach(io: photoVariable, filename: "/key")

### First 10 Products

## cheese

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


cheese2_product = Product.create!({
  product_name:"Personalized cheese board set, Custom cheese board set, Engraved cutting board, Wedding gifts, Gifts for the couple, Christmas gifts from JMlabonneimpression",
  description:"This personalized bamboo cheese board set is an ideal gift for weddings, bridal showers, engagement, and housewarming parties. Dimension: 13 1/2 x 13 1/2in. The set consists of: wooden board, cheese fork;, 3 cheese knives, 2 natural slate labels, 2 markers. Please enter the text that you would like to have appear on your product in the “Notes to Seller” box.",
  price: 103.98,
  category:"cheese",
  seller_id: User.fourth.id,
  availability: 300
})
cheese2_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/cheese_2_il_794xN.2421706348_lgji.jpg")
cheese2_product.photo.attach(io: cheese2_pic, filename:"/cheese_2_il_794xN.2421706348_lgji.jpg")

cheese3_product = Product.create!({
  product_name:"Funny Cheese Shirt, Cheese Lover Shirt, Cheese Shirt, Food Shirt, Foodie Shirt, Cheese Maker Shirt, Cheese Lover Gift, Cheddar, Gouda from JoyApparelUSA",
  description:"Funny Cheese Shirt, Cheese Lover Shirt, Cheese Shirt, Food Shirt, Foodie Shirt, Cheese Maker Shirt, Cheese Lover Gift, Cheddar, Gouda

*** We are fully operational and getting most orders out SAME DAY if ordered by 12pm EST. Other orders including the ones requiring customization will go out next day!***

---How To Order ---

1-) Please, check and review all photos

2-) Choose your t-shirt size and color

*Different styles of shirts may have different shades of same color choice due to different manufacturer brands.
*For this reason, we recommend you to match shirts from the same styles if you want precisely matching colors (exa. Unisex,V-neck, Tank top, etc.).

3-) Click add to cart. You can go back to add more product

4-)Click 'Proceed to check out'

5-)When you check out, you can add a note to seller for any request


Unisex

* Unisex t shirt fits like a well-loved favorite, featuring a crew neck, short sleeves and designed with superior airlume combed and ring-spun cotton that acts as the best blank canvas for printing.

* Features: Side-seamed. Retail fit. Unisex sizing. Shoulder taping


Woman V-Neck

* Fabric: Lightweight Cotton Poly Jersey,
* 60% Combed Ring-Spun Cotton 40% Polyester / 30 singles, 135 grams/4.0oz,
* Binding: Set-in Collar 1x1 Baby Rib with Front Cover Stitch. Side seamed,
* Tear away label.


Woman Tank Top

Women's racerback tank top made with blended semi-sheer fabric.
• 4.0 oz., 60% combed ring-spun cotton/40% polyester
• Self fabric binding
• Tear Away label


Youth

* This youth tee fits like a well-loved favorite, featuring a crew neck, short sleeves and superior airlume combed and ring-spun cotton that acts as a blank canvas for printing.

* Features: Side-seamed. Retail fit. Unisex sizing.


Toddler

* Toddler short sleeve fits like a well-loved favorite, featuring a crew neck, short sleeves and designed with superior airlume combed and ring-spun cotton that acts as the best blank canvas for printing.

* Features: Side-seamed. Crew neck. Tear-away label.


Onesie

* Flatlock-stitched seams.

* Double needle stitched ribbed binding on lap shoulder neck, shoulders, sleeves and leg opening.

* Innovative three-snap closure and Side seam construction.


---Care Instructions---

Wash item inside out in cold water, do not bleach, do not dry clean, do not iron directly on the design.
PLEASE HANG TO DRY AND DON'T USE A DRIER


---Production and Shipping---

Processing is 1-3 days. First Class Shipping is 2-5 business days(after processing time).

If you need item the sooner, please upgrade the shipping in the chart.

Thank you...",
  price: 10.32,
  category:"cheese",
  seller_id: User.fourth.id,
  availability: 300
})
cheese3_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/cheese_3_il_794xN.3837764188_ivgj.jpg")
cheese3_product.photo.attach(io: cheese3_pic, filename:"/cheese_3_il_794xN.3837764188_ivgj.jpg")

cheese4_product = Product.create!({
  product_name:"Mac and cheese best friend keychains - Best friend keychains - Valentine's Day Gifts - Best Friend Gift from CutePawsGift",
  description:"Cute set of 2 mac and cheese keychains.
A lovely gift for best friend or couples.
It is made from polymer clay. The charms measure 1.6 cm, and the total lenght of the keychain is 6.5 cm.


* Listing price is for a set of 2 keychains as in pictures.

* If you buy more items from my shop you will pay only one shipping fee.

* I pack the items in little handmade boxes, decorated with cute washi tape.

* You can visit my shop here: https://www.etsy.com/shop/cutepawsgift


Thank you for the visit!",
  price: 11.89,
  category:"cheese",
  seller_id: User.fourth.id,
  availability: 300
})
cheese4_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/cheese4_il_794xN.1689448750_tfq1.jpg")
cheese4_product.photo.attach(io: cheese4_pic, filename:"/cheese4_il_794xN.1689448750_tfq1.jpg")


cheese5_product = Product.create!({
  product_name:"Cheese Baby Outfit, Funny Baby Shower Gift, Charcuterie Newborn Baby Clothes, Sweet Dreams Are Made Of Cheese Toddler Shirt from BittyHandprints",
  description:"SWEET DREAMS ARE MADE OF CHEESE BODYSUIT OR SHIRT

Funny baby bodysuit or t-shirt for girl or boy with adorable cheese and 'SWEET DREAMS ARE MADE OF CHEESE' illustration printed on the front. A sweet and cute graphic print that is sure to bring laughs. Perfect every day wear for your little one. This also makes a great baby shower gift or birthday gift. Design is printed directly into the fabric with commercial quality kid safe inks for a super soft and long lasting print.

We use Rabbit Skins™ 100% Cotton Bodysuits or T-Shirts and all of our products are packaged in a clear protective bag.

This listing is for the bodysuit or t-shirt item shown ONLY. All other items shown in our photos are for styling / photo staging purposes only and are NOT INCLUDED in the sale.

The size of the imprint will vary depending on the size of the bodysuit or shirt, it may appear slightly larger or smaller than the pictures.

***SIZING & MORE***

BODYSUIT (SHORT SLEEVE & LONG SLEEVE) - 100% COTTON
Available in size NB (Newborn), 6M, 12M, 18M, 24M.
NB - 0-3 MONTHS, 18-21inches HEIGHT, 5-9 LBS
6M - 3-6 MONTHS, 22-24inches HEIGHT, 10-16 LBS
12M - 6-12 MONTHS, 25-28inches HEIGHT, 17-20 LBS
18M - 12-18 MONTHS, 29-31inches HEIGHT, 21-24 LBS
24M - 18-24 MONTHS, 32-34inches HEIGHT, 25-27 LBS

**We always advise SIZING UP to the next size if you are unsure or between sizes as items often run snug, may shrink, and babies will grow into larger sizes.

Rabbit Skins™ Infant Bodysuit
5.0 oz., 100% combed ringspun cotton in a 1x1 baby rib
White is sewn with 100% cotton thread
Flatlock seams
Double-needle rib binding on neck, shoulders, sleeves and leg openings
Reinforced three-snap closure on binding
CPSIA Compliant

T-SHIRTS (SHORT SLEEVE & LONG SLEEVE) - 100% COTTON
Available in size 2T, 3T, 4T, 5/6T
2T - 1-2 YRS OLD, 33-35inches HEIGHT, 28-30 LBS
3T - 2-3 YRS OLD, 36-38inches HEIGHT, 30-33 LBS
4T - 3-4 YRS OLD, 39-41inches HEIGHT, 34-39 LBS
5/6T - 5-6 YRS OLD, 42-45inches HEIGHT, 39-49 LBS

**We always advise SIZING UP to the next size if you are unsure or between sizes as items often run snug, may shrink, and babies will grow into larger sizes.

Rabbit Skins™ Toddler Shirt
5.5 oz., 100% cotton
Rib crew neck and cuffs
Shoulder-to-shoulder taping
Double-needle stitched sleeves and bottom hem
White is sewn with 100% cotton thread
CPSIA Compliant

CARE INSTRUCTIONS:
Machine wash cold. Tumble dry low inside-out. Do not use bleach. Some fading may occur. If you iron the shirt or bodysuit, take care to not iron the design directly; use a teflon sheet or parchment paper to shield the design from high heat.",
  price: 14.99,
  category:"cheese",
  seller_id: User.fourth.id,
  availability: 300
})
cheese5_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/cheese5_il_794xN.3040919445_5vuz.jpg")
cheese5_product.photo.attach(io: cheese5_pic, filename:"/cheese5_il_794xN.3040919445_5vuz.jpg")


cheese6_product = Product.create!({
  product_name:"Applewood smoked cooper cheese",
  description:"This is a 6 hour applewood smoked cooper cheddar cheese.

Cooper is popular in the northeast, its the creamiest, most mellow sharp cheese ive eaten.

Applewood gives a rich light smoke flavor, with sweet tones.

This is a very rich cheese unlike the grocery store 'smoked' cheeses that have liquid smoke in the curds or only sprayed with smoke afterwards.

The cheese actually melts a little while smoking allowing the fat to slightly render, picking up a much better color profile. There may be a little fat on the outside of the cheese- not to worry it is totally natural.

Depending on the cut your package of cheese will be between 3.6-3.9 ounces (hand cut)

Packaged in a resealable bag",
  price: 6.50,
  category:"cheese",
  seller_id: User.fourth.id,
  availability: 300
})
cheese6_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/cheese6_il_794xN.2666295026_ilsz.jpg")
cheese6_product.photo.attach(io: cheese6_pic, filename:"/cheese6_il_794xN.2666295026_ilsz.jpg")



## lactose-free

lactosefree1_product = Product.create!({
  product_name:'I WILL NOT TOLERATE: Hate, Bigotry, Racism, Homophobia, or Lactose. - Matte Vinyl 10" Bumper Sticker - Car Decal, from Curlworks',
  description: "Stand up for what's right!! Beautifully and vibrantly printed on durable weatherproof vinyl with a matte finish. 10 inches by 3 inches. Printed lovingly by https://www.wildeprints.com/. A 10-inch weatherproof matte vinyl sticker, perfect for your water bottle, laptop, and car!",
  price: 7,
  category:"lactose-free",
  seller_id: User.fourth.id,
  availability: 300
})
lactosefree1_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/lactose_free_il_794xN.3446522359_91sl.jpg")
lactosefree1_product.photo.attach(io: lactosefree1_pic, filename:"/lactose_free_il_794xN.3446522359_91sl.jpg")


lactosefree2_product = Product.create!({
  product_name:"Lactose intolerant, coffee mug, lactose free from mayoie",
  description:"- High quality mug makes the perfect gift for everyone. Printed on only the highest quality mugs. The print will never fade no matter how many times it is washed. Packaged, and shipped from the USA. Dishwasher and Microwave safe. Shipped in a custom made styrofoam package to ensure it arrives perfect. GUARANTEED.",
  price: 14.95,
  category: "lactose-free",
  seller_id: User.fourth.id,
  availability: 300
})
lactosefree2_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/lactose_free_2_il_794xN.3775381345_bkkr.jpg")
lactosefree2_product.photo.attach(io: lactosefree2_pic, filename:"/lactose_free_2_il_794xN.3775381345_bkkr.jpg")

lactosefree3_product = Product.create!({
  product_name:"Roasted Marshmallows Covered in Schmilk (8-Pack) from SchmilkChocolate",
  description:"Have you ever had torch-toasted vegan marshmallows, dressed in our classic Schmilk chocolate? Who said vegan milk chocolate couldn't be this much fun? A crispy-toasted beginning with a creamy-soft-smooth finish. Truly an edible candy pillow covered in the best vegan milk chocolate.

Note: these marshmallows contain soy, but our chocolate remains soy-free and produced separately from marshmallow production

Servings Per Pack: 2

Weight: 5.6 oz

Ingredients:

Original Schmilk Chocolate: Cocoa butter**, sugar**, cashews*, cocoa liquor**, vanilla*, sunflower lecithin*, salt (*organic, **organic and fair-trade)

Vegan Marshmallows (non-organic): Tapioca syrup*, cane sugar*, filtered water*, tapioca starch*, carrageenan*, soy protein*, natural vanilla flavor* (*non-GMO)

Allergen Warning: Contains soy, cashews, tree nuts & traces of peanuts

Nutrition Facts: Serving size: 2 pieces (39.68g) Amount per serving: Cal 213 (10.6% DV), Sug 24.5g, Fat 8.4g (12.9% DV), Sat Fat 5.0g (25.2% DV), Carbs 33.5g (12.6% DV), Protein 1.4g (2.9% DV), Fiber .6g (2.3%DV) Percent Daily Value (DV) are based on a 2,000 calorie diet",
  price: 14.99,
  category:"lactose-free",
  seller_id: User.fourth.id,
  availability: 300
})
lactosefree3_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/lactose_free_3_il_794xN.3178536526_g934.jpg")
lactosefree3_product.photo.attach(io: lactosefree3_pic, filename:"lactose_free_3_il_794xN.3178536526_g934.jpg")


lactosefree4_product = Product.create!({
  product_name:"My Tummy Hurts Aesthetic Tee Shirt | Groovy Graphic Tee | Trendy Y2K | Tumblr Graphic Tee | Celiac, Gluten-free, IBS, Lactose-free, Green Pink",
  description:"My Tummy Hurts Aesthetic Tee Shirt | Groovy Graphic Tee | Trendy Y2K | Tumblr Graphic Tee | Celiac, Gluten-free, IBS, Lactose, Green Pink

If you love super soft and extremely comfy shirts then you will absolutely love this Bella + Canvas unisex shirt!

• This is a Unisex style tee, although it is looser and longer than an average women's tee it mostly true to size. For that oversized look please order a few sizes up! If you prefer a fitted look typically we suggest ordering your normal size or one size down if you like it snug.

• Solid Colors: 4.2 oz., 100% airlume combed and ringspun cotton

• Heather Colors: 4.2 oz., 52/48 Airlume combed and ringspun cotton/polyester

• Heather Prism Colors: 99/1 airlume combed and ringspun cotton/ polyester (Unique coloring, grey flecks of heather pulled through the base color)

• Machine wash cold, inside-out, tumble or hang dry

• Printed in the US of A baby!

Good luck with your tummy!",
  price:19.99,
  category:"lactose-free",
  seller_id: User.fourth.id,
  availability: 300
})
lactosefree4_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/lactosefree4_il_794xN.3874866022_axyg.jpg")
lactosefree4_product.photo.attach(io: lactosefree4_pic, filename:"/lactosefree4_il_794xN.3874866022_axyg.jpg")


lactosefree5_product = Product.create!({
  product_name:"Lactose Intolerant Decal from BearBonesVinylCo",
  description:"Let everyone know you can't eat ice cream. This decal can go just about anywhere you can think of and has a use life up to 3-6 years for indoor and outdoor use. This decal comes in either matte or gloss, black or white vinyl and is around 4x6 inches in size, perfect for your car, MacBook, or waterbottle bottle.",
  price: 3.99,
  category:"lactose-free",
  seller_id: User.fourth.id,
  availability: 300
})
lactosefree5_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/lactosefree5_il_1588xN.3922007995_8zeh.jpg")
lactosefree5_product.photo.attach(io: lactosefree5_pic, filename:"/lactosefree5_il_1588xN.3922007995_8zeh.jpg")


lactosefree6_product = Product.create!({
  product_name:"Lactose Intolerant Valentines Day Card | Funny Cheese Card | For Boyfriend | For Girlfriend | Cheesy Love Gift | Dairy Free Card fom TeePeeCreationsGifts",
  description:"This funny Valentines Day card features a sad block of cheese with the phrase “I Would Have Got You A Cheesy Valentines Day Card But You’re Lactose Intolerant” Ideal for your partner with lactose intolerance this Valentines Day, this card will surely make your recipient laugh and smile!

Product Details
300gsm premium matte card
C6 coloured embossed envelope
A6 size only (10.5 x 14.8cm OR 4.1 x 5.8 in)

Made of Premium Quality
My cards are made of a premium quality that makes it feels nice to touch. It’s thick and comes with a matte finish that provides a smooth and natural-looking surface, making you want to keep it forever!

✏️ Additional Extras ✏️
Messages can be added to the inside of the card too, just let me know what you would like in the personalisation box.

Confetti is another extra which can be added as a fun touch to your card. The design of this matches the illustration.

A Funny Gift Idea For Everyone
Choosing the perfect gift might need a lot of time, but it won’t happen if you come to my store! I provide many adorable things that make a funny gift idea for everyone. One of them is surely this Christmas card. Give this Christmas card to loved ones and see their happy faces!

Multi-buy Offer
15% off when you buy 3 or more, 20% off when you buy 5 or more, 25% off when you buy 8 or more, 30% off when you buy 12 or more of any of my items. (Excludes items already on sale).

Check Out My Other Products
TeePeeCreationsGifts - https://www.etsy.com/uk/shop/TeePeeCreationsGifts

Returns
If you are not satisfied in any way, feel free to contact me to have a full return according to the return policy. Please take a look at my return policy for more details.

Disclaimer
Please note that colours shown on screen may vary slightly to the printed product as all monitors vary.",
  price: 4.87,
  category:"lactose-free",
  seller_id: User.fourth.id,
  availability: 300
})
lactosefree6_pic = URI.open('https://mooguri-dev.s3.us-west-1.amazonaws.com/lactosefree6_il_1588xN.3521146214_qox9.jpg')
lactosefree6_product.photo.attach(io: lactosefree6_pic, filename:"lactosefree6_il_1588xN.3521146214_qox9.jpg")



## milk

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


milk2_product = Product.create!({
  product_name:"Glass Milk Carton Creamer, Glass Milk Bottle, Glass Milk Jug, Glass Milk Jar, Glass Cup, Kitchen Accessories from HVSHome",
  description:"Bring a touch of fun to your day with this cute glass milk carton. Made of non-toxic molded borosilicate glass. This novelty milk carton glass is perfect for smoothies, milkshakes, or even cocktails. This modern and quirky glass holds up to 10oz of liquid and is a brilliant addition to the breakfast table, to drink your morning coffee or a glass of juice. Hand wash. Imported. Glass Milk Carton Creamer. 4-inch W x 3-inch D x 4.25-inch H ● MADE OF MOLDED BOROSILICATE GLASS ● SUITABLE FOR HOT AND COLD DRINKS ● HOLDS 10OZ / 300 ML OF LIQUID ● HAND WASHING RECOMMENDED ● NON-TOXIC MATERIALS",
  price:13.99,
  category:"milk",
  seller_id: User.fourth.id,
  availability: 300
})
milk2_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/milk2_il_794xN.3164754577_j3qo.jpg")
milk2_product.photo.attach(io: milk2_pic, filename:"/milk2_il_794xN.3164754577_j3qo.jpg")

milk3_product = Product.create!({
  product_name:"Goat Milk Gift Set from Damgoodsoapandlotion",
  description:"This gift set includes 2 bars of goat milk soap, goat milk and argan oil lotion, goat milk fizzy bath powder, and a lip balm. This is a great gift idea for someone special or yourself! Please choose from the scents below and note them in the comment section. Free shipping and gift packaging included in the low price!

Lotion:
Aloe Vera (unscented)
Caribbean Coconut
Lavender EO
Japanese Cherry Blossom
Jasmine
Polynesian Hibiscus
Sandalwood
Sun Ripe Strawberry
Sweet Orange
Peppermint
Unscented
White Tea and Ginger

Fizzy Powder:
Unscented
Fresh Cut Roses
Lavender
Caribbean Coconut
Eucalyptus

Lip Balm:
Lemon
Lavender
Sweet Orange
Wintergreen
Peppermint
Eucalyptus

Bar Soap:Almond & Honey - Classic mixture of almond and warm honey notes.

Alpine Cheer - Notes of fir needle, cinnamon stick, cranberries, crisp apple and cedarwood.

Aqua Spa - Indulge in notes of modern rose and lily brightened with hints of orange, lime and ozone.

Berry Warm- Ripe raspberry intermingled with orange zest and warm musk.

Caribbean Coconut - A tropical twist of coconut milk and cool vanilla that will make you dream of lounging on a sunny beach.

Citronella Essential Oil - Lemon-like aroma with grassy green undertones.

Coffee Bean - The aroma of fresh roasted coffee beans with a hint of vanilla and sugar crystals.


Cranberry - The aroma of tart delicious cranberries with a tangy sweetness.

Desert Dreams - Succulent notes of mango nectar, cactus leaves and agave sugar that wrap around a heart of Siberian fir.

Frankincense & Myrrh Essential Oil - Traditional riches of blended frankincense with myrrh.

Gingerbread - A heart of cinnamon, nutmeg, and clove enhance the ginger, while a dash of almond adds a little something extra. Molasses and sugar base notes envelop the array of spices with a deliciously delightful sweetness.

Ginger/Lime Essential Oil - Spicy warm aroma with an earthy undertone and the crisp citrus zing of a freshly sliced lime.


Hot Apple Pie - Almost as good as your mother's with green apple, freshly shaved cinnamon, nutmeg and warm brown sugar.

Lavender Essential Oil - A floral and herbal lavender bouquet.

Lemon Eucalyptus Essential Oil - Grassy green notes with lemon-like aroma.

Lilac - This sweet floral smells like true lilacs in full bloom.

Nutcracker - A blend of Vanilla, Hazelnut, Maple Syrup, Banana, Coconut, Lime, Orange, Grapefruit, Bergamot, and Clove.

Nutty Nog - Creamy steamed coconut milk is touched with grated nutmeg and a touch of brown sugar and cinnamon.

Oatmeal & Honey - Crunchy granola blended with fresh oats, golden honey and vanilla bean.

Orange Lemongrass Essential Oil - The uplifting aroma of sweet and sunny freshly peeled oranges and lemongrass.


Polynesian Hibiscus - Wild and exotic, this fragrance is a combination of red hibiscus, island plumeria, Aloe Vera leaf, and dewy cassis petals.

Sandalwood - Fragrant grains of sandalwood are polished with the sweetness of balsamic richness. Enchanting notes of deep mahogany lie in the heart of these precious woods.

Sweet Pea - Sweet pea petals and watery pear entwine with sheer freesia, fresh berry, and soft, delicate musk.

Tea Tree Essential Oil - True herbal, earthy and medicinal aroma of tea tree.

Unscented",
  price: 35.00,
  category:"milk",
  seller_id: User.fourth.id,
  availability: 300
})
milk3_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/milk_3_iap_640x640.3725646514_s8mlyp7s.jpeg")
milk3_product.photo.attach(io: milk3_pic, filename:"/milk_3_iap_640x640.3725646514_s8mlyp7s.jpeg")


milk4_product = Product.create!({
  product_name:"Milk cable protector, anti break cable bite, kawaii milk accessories, milk funny gifts, strawberry milk stickers, milk plush, pink theme from CaseDramaRamaShop",
  description:"Super kawaii Strawberry milk cable protector with a piggy on it.

Protect your phone charging cable in a cute way.

Included in package: x1 milk cable protector.

Made of silicone and easy to install.

Helps identify your cable in shared charging spaces and makes a cute personal statement.

Perfect for strawberry milk love",
  price: 4.99,
  category:"milk",
  seller_id: User.fourth.id,
  availability: 300
})
milk4_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/milk4_il_1588xN.3766224132_ncox.jpg")
milk4_product.photo.attach(io: milk4_pic, filename:"milk4_il_1588xN.3766224132_ncox.jpg")


milk5_product = Product.create!({
  product_name:"Zodiac Milk Box Sticker, milk box sticker, zodiac sticker, kawaii laptop sticker, lofi style, kawaii style from MysticalMamaMagic",
  description:"Zodiac Milk Box Sticker

This sticker is perfect for decorating your laptop, water bottle, planner, and even your car!

You will receive 1 Zodiac Milk Box Sticker of your choice! (Psst and a freebie!)

Each sticker is 3” x 2.25” and is made with weather proof sticker paper, sealed with a uv resistant finish, and covered with clear vinyl. This allows them to be scratch resistant, UV resistant, and water resistant, making them great for outdoor use and even better for indoor use!

For the best results in adhesion, please apply your sticker to clean, smooth, and dry surfaces.

All orders are packaged with cardstock and a clear bag inside a kraft envelope. Shipped with Etsy’s tracking system and delivered through USPS.

Processing Time: 1-2 Days
* Processing time is not the same as shipping time.
Shipping times may vary due to Covid-19.

No returns/exchanges unless item arrives damaged. Photo proof is required and claims must be made within 7 days of receiving your order.

Please ensure you have entered the correct shipping address. Cancellations are only approved within 1 hour of placing your order.

Feel free to contact me if you have any questions, comments, or concerns!

Note: Please be aware that the colors and paper you see on your screen may differ slightly from the actual colors of the print.

Thank you for your support!",
  price: 3.75,
  category:"milk",
  seller_id: User.fourth.id,
  availability: 300
})
milk5_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/milk5_il_1588xN.3213598017_72va.jpg")
milk5_product.photo.attach(io: milk5_pic, filename:"/milk5_il_1588xN.3213598017_72va.jpg")


milk6_product = Product.create!({
  product_name:"Classic Milk Tea Boba Candle from AsianBobaGirl",
  description:"For more candles & exclusive boba cosmetics, visit our new website: shopbobagirl.com!

The Classic Milk Tea Candle

A classic blend of smooth black tea with delicate notes of caramel based cream. Transform your room into a fresh cup of silky black tea perfectly balanced with velvety hints of roasted caramel. This is the staple classic of boba milk tea.

Candle profile:
Main profile: caramelized black tea
Scent hints: custard, coconut, burnt caramel, rum
Base: vanilla, maple

All AsianBobaGirl candles are made with 100% soy melts, burning cleaner at 90% less soot than paraffin. Bring your favorite boba shop straight to you room and set the mood with soft-natural lighting for your bedroom, bathtub and workspace for the extra me-time you deserve. Various candle sizes come in different jar types - please refer to the listing images for reference. Each order comes with a single candle - the boba milk tea drink in the product shots are not included with your order.

Candle Features
- 3 inches x 3 inches x 2 inches pudding glass jars
- 4 oz. glass mini jars with plastic lids (do not place lids on when candle is burning)
- Made with 100% premium soy melts, a biodegradable and natural resource that cleans up with just plain old soap and water
- Pure fragrance oil made from natural essential oils and synthetic aromas - never diluted for a strong concentrated aroma
- Custom mixed and created for that perfect milk tea scent
- AsianBobaGirl signature boba hand-painted or printed on glass
- Mixed, hand-poured, and packaged in Los Angeles, CA

Candle Best Practices:
- During the first burn, please make sure to allow the candle to melt to the edges of the candle.
Doing so will help release the milk tea fragrance.
- The lid is plastic, please do not cap it on the candle while it's burning or when the glass is hot
- A 4 oz. candle is ideal for small to medium sized rooms like bedrooms and bathrooms
- Only burn your candle for 1-2 hours at a time.
- Be cautious when picking up the candle. Glass can be hot to touch and the wax may still be melted.
- Do not leave candle unattended while burning. Keep candle away from anything flammable
- Discontinue use when only 1/4 inch of wax remains

To purchase $1 sticker add-ons, please visit https://www.etsy.com/AsianBobaGirl/listing/1076618569/asian-food-stickers-add-on-only.",
  price:16.50,
  category:"milk",
  seller_id: User.fourth.id,
  availability: 300
})
milk6_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/milk6_il_1588xN.3494226927_nq3r.jpg")
milk6_product.photo.attach(io: milk6_pic, filename:"/milk6_il_1588xN.3494226927_nq3r.jpg")



## pun

pun1_product = Product.create!({
  product_name:"Legen-Dairy Pun | Sticker or Magnet | Cute Pun, Cow Pun, Funny | Water Bottles, Laptops from artportraitsbyrachel",
  description:"'Legen-Dairy' Pun Design. Approximate size: 2.3x2.5. Sticker: This hand-drawn die-cut sticker is made of durable vinyl. The vinyl protects it from water, scratches, and sunlight. This makes it a perfect addition to any water bottle, journal, laptop, or more!. Note: These stickers are waterproof, but I do not recommend dishwasher use. For best results, gently hand wash with cool/warm water and mild soap. Magnet: This design is printed on thin flexible magnet and covered with a durable vinyl. The vinyl protects it from water, scratches, and other damage. This makes it the perfect addition to any refrigerator, whiteboard, locker, or more! The average magnet size is 2.5x2.5, with a thickness of 18 mil (457 microns). This means they are a thin magnet, but they are still strong! Each magnet can hold about 4 pieces of paper at once, but should not be used for heavy material or outdoor use (i.e. vehicles). Orders under $20 will be mailed in a sturdy envelope. This includes 'estimated tracking' by Pitney Bowes. Please track your order through Etsy updates or https://tracking.pb.com/. Orders above $20 will be sent in a bubble poly mailer, which includes USPS tracking. © 2021 Art by Rachel",
  price: 3.20,
  category:"puns",
  seller_id: User.fourth.id,
  availability: 300
})
pun1_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/pun_il_1140xN.3414645890_angm.jpg")
pun1_product.photo.attach(io: pun1_pic, filename:"/pun_il_1140xN.3414645890_angm.jpg")


pun2_product = Product.create!({
  product_name:"Friendship Wish Bracelet, Cheese Lover Card, Cheesy Gift, Cheddar Cheese Jewellery, Funny Wishlet from TheDreamingBuddha",
  description:"Friendship Wish Bracelet, Cheese Lover Card, Cheesy Gift, Cheddar Cheese Jewellery, Funny Wishlet. This handmade card reads - This may be cheesy, but I think you’re grate. Although perfect as a little gift on its own, this little wish bracelet can also be popped into a card or sent along with a present. The idea behind a wish bracelet is that you make a wish as you place it on your wrist. In time, the cord wears out and your wish comes true! This bracelet is meant to be tied on and has no closure. Each bracelet includes a charm and is made from quality coloured 1mm waxed cord in a variety of colours. The bracelet is mounted on recycled card, teamed with an envelope and carefully wrapped in a clear cellophane sleeve. The whole package measures 11.5 cm by 9.5 cm.",
  price: 3.93,
  category:"puns",
  seller_id: User.fourth.id,
  availability: 300
})
pun2_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/pun_2_il_794xN.1886781148_t57p.jpg")
pun2_product.photo.attach(io: pun2_pic, filename:"/pun_2_il_794xN.1886781148_t57p.jpg")


pun3_product = Product.create!({
  product_name:"I Know It's Cheesy But...* Love Card * Anniversary * Valentines * Husband * Wife * Boyfriend * Girlfriend * Cheese * Significant Other * Partner * Jelly Armchair from Catherinedoart",
  description:"I know its cheesy but…

A brie-liant greetings card for a legend-dairy loved one. If you are so much better to-cheddar and camembert to be apart, then don’t wine about it, take a slice form this selection and you’ll be top of the board.

This card is from my Multi pun collection. Each card is 150mm square and comes with one of three fully illustrated envelope designs. Please be aware the illustrated envelope may change.

The inside has been left blank for your message.

If you’d like us to handwrite your card for you, this will be sent directly to the addressee with your message in the card, in the card envelope, just like you’d sent it yourself! Please leave your message in the ‘gift message’ section of the basket, and remember to use the recipient's address as the shipping address!

If you get your order in before 12 pmwe’ll aim to get it sent out the same day. If you miss this cut off it will be sent the next working day.  Please get in touch if you need it shipped sooner, or if you’d like your order to be posted Special Delivery.  Bear in mind that Special Delivery requires a signature, this means that frustratingly sometimes your item can end up in the depot, sometimes 1st class can be better lso just as quick!

Occasionally items do go missing in the post. We have no control over this, unfortunately.  If your card hasn’t arrived 5 working days after you place your order (UK), please do get in touch and we will try to rectify this to the best of our ability.

This card ships from the UK so for any international orders please allow 7-14 business days.  

We use First Class post in the UK and Royal Mail International Tracked and Signed post for orders outside the UK.



Feel free to message if you have any questions/requests and either me, my sister Liz, or our friend Anne, will be happy to help!

Catherine Faulkner © all rights reserved
Image copyright is not transferred with the sale

@catherinedoart
@jellyarmchair",
  price: 5.15,
  category:"pun",
  seller_id: User.fourth.id,
  availability: 300
})
pun3_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/pun_3_il_794xN.3121609316_7f70.jpg")
pun3_product.photo.attach(io: pun3_pic, filename:"/pun_3_il_794xN.3121609316_7f70.jpg")


pun4_product = Product.create!({
  product_name:"Grilled Cheese Mug, You Make Me Melt Cheese Valentine, Funny Valentines Day Coffee Mugs, Cute Valentine Gift, Pun Gifts for Couples, Tumbler from BeanMugs",
  description:"Please see below for product descriptions. As always feel free to reach out with any questions!— Coffee Mugs —
* Design printed on both sides.
* Dishwasher and microwave safe
* The highest quality printing possible is used. It will never fade no matter how many times you wash it.

— Tumbler Details —
* Stainless steel
* Design Printed on One Side
* 10oz and 16oz
* Rounded corners
* See-thru plastic lid


— Travel Mug Details —
* Stainless steel
* 15oz (0.44 l)
* Rounded corners
* Black plastic lid

— Travel Mug W/ Handle Details —
* This holds 14 oz worth of liquid and comes with an easy-grip handle and thumb rest. The tapered bottom fits in a standard cup holder. Lid has slide opening and slanted drinking surface.
* Made out of stainless steel for durability.
* Lid is dishwasher safe and shatter resistant.
* NOTE: These are not 'officially' endorsed as dishwasher safe by our vendor, although we have run them through hundreds of times with no problems. Hand wash is official recommendation for cleaning.

— Can Holder —
* Stainless steel
* Fits a 12oz can or bottle
* Removable plastic lid with rubber overlayPlease see below for descriptions on each product:",
  price: 16.95,
  category:"pun",
  seller_id: User.fourth.id,
  availability: 300
})
pun4_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/pun4_il_794xN.2822017769_ef6l.jpg")
pun4_product.photo.attach(io: pun4_pic, filename:"/pun4_il_794xN.2822017769_ef6l.jpg")


pun5_product = Product.create!({
  product_name:"I Love Moo Cow Pun Greeting Card / Handmade Gift / Love Anniversary Friendship / Farm Animal Puns Punny Play on Words / Beef Angus Cow Milk from SkpInk",
  description:"LISTING INCLUDES:

- Hand drawn image printed to card stock.
- Card measures approximately 5.5x4.25 inches.
- Item comes with an A2 envelope and wrapping in a cellophane sleeve.
- The inside of the card is blank.
- Add a note at checkout and I will put a message on the inside for you!

SHIPPING:

- Individual cards are sent USPS with a stamp.
- Tracking is available if shipping is upgraded to Express during checkout!

=============================

Looking for a deal? Use one of the bulk purchasing options featured at the top of the shop page here → www.skpink.etsy.com

- 4 Cards for $12
- 10 Cards for $28
- 20 Cards for $50
- 50 Cards for $100",
  price: 3.75,
  category:"pun",
  seller_id: User.fourth.id,
  availability: 300
})
pun5_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/pun5_il_1588xN.2828827873_89d5.jpg")
pun5_product.photo.attach(io: pun5_pic, filename:"/pun5_il_1588xN.2828827873_89d5.jpg")


pun6_product = Product.create!({
  product_name:"Butter Half Card, Valentines Day Cards, Valentines Day Card, Pun Cards, Butter Half Card Greeting Card, Anniversary Card, Food Puns from BespokeBridalStudio",
  description:"LISTING INCLUDES:

- Original artwork printed to card stock

- Square card measures 5.5x5.5 inches

- Item comes with envelope(s)

- The inside of the card is blank, leaving room for a custom greeting.

- Made to order and printed in the USA

SHIPPING:

- Individual cards are sent USPS with a stamp in a flat mailer.

- Tracking is available if shipping is upgraded during checkout!

EGGCELLENT FOR ANY OCCASION!


QUESTIONS?

If you have any questions about this template, use the “Message Seller” button and I’ll get back to you ASAP.



Butter Half Card, Valentines Day Cards, Valentines Day Card, Pun Cards, Butter Half Card Greeting Card, Anniversary Card, Food Puns

Breakfast Club Comics©",
  price: 5.85,
  category:"pun",
  seller_id: User.fourth.id,
  availability: 300
})
pun6_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/pun6_il_1588xN.3578189566_q2s8.jpg")
pun6_product.photo.attach(io: pun6_pic, filename:"pun6_il_1588xN.3578189566_q2s8.jpg")




## yogurt

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

yogurt2_product = Product.create!({
  product_name:"The Yogurt Tube by TheYogurtTube",
  description:"Meet The Yogurt Tube. A patentetd insertable yogurt straining device that takes all the fuss out of straining your yogurt.
  Size Recommendations: Both sizes are universal, however, make your selection based on the size of your pot and the quantity of yogurt you make for best results. If you make yogurt in a 6-8qt slow cooker, instant pot or pressure cooker, the XL is the recommended size and will get you results quicker. If you make yogurt in a smaller pot (3-4qts) the Original will strain a sufficient amount of whey.
  Basic Instructions: (To see The Yogurt Tube in use, follow us on Instagram and Facebook @TheYogurtTube)
  Make yogurt in a crock pot, slow cooker, instant pot or stock pot using your favorite yogurt recipe. After it sets overnight, insert The Yogurt Tube in the center of your pot and store in the fridge. After a few hours, remove your yogurt pot from the fridge, and while leaving the filter in place, use the accompanying ladle to remove the strained whey from the center of the strainer. Leave the filter in place, and put your yogurt back in the fridge to continue straining. Repeat as necessary. Remove the filter once your yogurt is strained as desired, wash (dishwasher safe) and store for future use.
  IMPORTANT NOTES BEFORE YOU ORDER AND DURING USE: 1. Measure the total interior height of your chosen yogurt making pot WITH the lid on. Most stock pots and crock pots will accommodate this strainer, but measure first to be safe! The lid is required to hold the strainer in place when it is first inserted. 2. When you insert the strainer, it will initially displace a small volume of yogurt. This is temporary, once the first strain is achieved, the yogurt levels back down. 3. Once straining begins, the yogurt that is closest to the strainer will be the thickest, so it's always nice to scoop from closest to the filter for each serving. Once you've removed your serving, keep the filter in place so it can continue to strain, and put it back in the fridge. Note: The Yogurt Tube Original will strain approximately 14oz of yogurt at a time, the XL will strain 28oz at a time when inserted into a full pot of yogurt (the yogurt reaches near the top of the strainer). 4. Enjoy your yogurt, and your free time!",
  price: 24.95,
  category:"yogurt",
  seller_id: User.fourth.id,
  availability: 300
})
yogurt2_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/yogurt_2_il_794xN.3795506386_si5y.jpg")
yogurt2_product.photo.attach(io: yogurt2_pic, filename:"/yogurt_2_il_794xN.3795506386_si5y.jpg")


yogurt3_product = Product.create!({
  product_name:"STRAWBERRY BODY YOGURT, not as thick as body butter but not as watery as commercial lotion from genkiskincare",
  description:"DESCRIPTION:

*PRODUCT IS NOT EDIBLE*

This body yogurt smells like real strawberry yogurt! It is a half way between a lotion and body butter. There is no greasy after feel, and its light, and perfect for a quick all over freshen up!

INGREDIENTS:

Purified Water, Shea Butter, Vegetable Glycerin, Apricot Kernel Oil, Golden Jojoba Oil, Emulsifying Wax, Aloe Vera Gel, Cetyl Stearyl Alcohol, Phenonip, Strawberry Fragrance Oil, Pink Mica

STORAGE AND USAGE:

Apply Strawberry Body Yogurt to clean, dry skin in gentle circular motion until fully absorbed. Storage In cool and dry place after each use and avoid direct sunlight.

SOAP BAR SIZE:

Net Weight: Approximately 4 oz.

PACKAGING AND SHIPPING:

In effort to keep our carbon footprint as low as possible, we use minimal recycled materials for packaging and well protected during transit. We also encourage you to reuse any materials you can to extend their lifespan!

QUESTION?

Please feel free to message us with any questions or concerns you may have, we love to hear from you!

Follow us on social media platforms @genkiskincare for behind the scenes, product updates and seasonal promotions!",
  price: 9.00,
  category:"yogurt",
  seller_id: User.fourth.id,
  availability: 300
})
yogurt3_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/yogurt_3_il_794xN.3618339063_n4v6.jpg")
yogurt3_product.photo.attach(io: yogurt3_pic, filename:"/yogurt_3_il_794xN.3618339063_n4v6.jpg")


yogurt4_product = Product.create!({
  product_name:"450ml Yogurt Water Bottle For Girls Fruit Drinking Bottle Kawaii Milk Yakult Cup Mug Kawaii Yogurt Fashion Simple Fruit Cartoon Water Bottle from KawaiiMoments",
  description:"Material: food grade AS material

Capacity: 450ml

Temperature resistance: -20 degrees to 95 degrees


Note:

1. Due to the different shooting angle and color rendering, there are some differences between the product
and the photo itself, which will not affect the use of the product.

2. Because the product is manually measured, there are some errors, which will not affect the use of the product


Unique design: The creative design of the milk carton shape comes from the inspiration of daily life, the shape is cute and interesting, fresh and fashionable. The thickened cup bottom body is durable.

Transparent glass: The warm and lovely milk cup is decorated with pure and transparent simplicity. Whether it is milk or cola, or water, the glass milk box can double its characteristics.

Non-toxic material: Made of food-grade AS material. Completely free from harmful chemicals and does not contaminate your food.

Easy to clean: Hand-wash, also can put in dishwasher to clean. Suspends liquids above base for condensation-free use at the counter or table.

Suitable for: This mini cup can be heated or store in a refrigerator

Highlights

100%Brand new high quality.



Feature:

1. Food grade PC material, safe and non-toxic, High temperature resistance, BPA free.

2. Water leakage prevention design, 360° seal leakproof.

3. Cartoon fashionable, easy to carry.

4. Heat resistance: 0 ° C ~ 100 ° C


Color: Strawberry, Peach, Banana, Avocado


Note:
- Due to the pandemic, there may be shipping delays for international deliveries. If your package takes longer to arrive than expected, please don't worry!

- We recommend adding your phone number in the “Persoalization” during checkout, in case the post office needs to contact you

- We do not allow cancellations or modifications of your order once placed. Please check carefully prior to ordering",
  price: 9.90,
  category:"yogurt",
  seller_id: User.fourth.id,
  availability: 300
})
yogurt4_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/yogurt4_il_1588xN.3910113357_mres.jpg")
yogurt4_product.photo.attach(io: yogurt4_pic, filename:"/yogurt4_il_1588xN.3910113357_mres.jpg")


yogurt5_product = Product.create!({
  product_name:"Copper Yogurt Bakrac, Turkish Yogurt Making, Copper Pot Pure from CopperMALL",
  description:"Copper Yogurt Bakrac, Turkish Yogurt Making, Copper Pot Pure

Our copper products are made of pure copper with traditional methods by hammering and heat processes. They are totally healthy and handcrafted.
There might be pattern differences on products because they are handmade. It is a unique gift for your loved ones or yourself.

This item is perfect for yogurt fermentation. In Turkish culture, it has been used for making yogurt for years. Also it is used for storage of any kind of food like water, juice etc. You can also use it as an amazing decor. It is a nice Mother's day gift.

- Completely handcrafted
- Made with 1 mm thick pure copper
- Thinned inside for food safety
- Brass handle
- Free shipping to US, Canada and Europe

Size:

Capacity 2 LT
Weight 785 gr -
Height 5.9 inches (15 cm)
Width 7 inches (18 cm)

Capacity 3 LT
Weight 945 gr -
Height 6.3 inches (16 cm)
Width 7.9 inches (20 cm)

Care:
Only hand wash and use soft materials like sponge or cloth.


Made in Turkey.
---------------------------------------------------------------
Please let me know if you have any questions.
I will answer you as soon as possible.",
  price: 86.25,
  category:"yogurt",
  seller_id: User.fourth.id,
  availability: 300
})
yogurt5_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/yogurt5_il_1588xN.3856979312_hbtf.jpg")
yogurt5_product.photo.attach(io: yogurt5_pic, filename:"/yogurt5_il_1588xN.3856979312_hbtf.jpg")


yogurt6_product = Product.create!({
  product_name:"Modern: Mixed Berry (Pam's Favorite Yogurt) from DiamondStainedGlass",
  description:"Modern Stained glass panel in berry and grey colors. Hangs horizontally or vertically (please let us know your preference).
All pieces are shipped safely packed and insured by UPS


Welcome to Diamond Stained Glass!
Custom Work
If you would like to discuss making a custom piece, we have an information form for Custom Pieces. Please email us at cannastainedglass [!at] gmail.com

All our Best,
Cheral and Lauren Canna

Cheral and Lauren are a mother-daughter team of glass artists located outside Philadelphia, PA. Cheral's pieces tend to be very creative with a gorgeous use of color - she finds interesting details in pieces of glass and likes to build a design that highlights those unique details. Lauren's eye tends to be more traditional, with colors that complement one another and are more subdued. Lauren also enjoys creating works that celebrate fandom - Marvel, Star Wars, Dr Who, Harry Potter, nerd stuff. :)
Cheral is a retired geneticist who worked on the Human Genome Project. Lauren is a conductor and owns a music school.",
  price: 250,
  category:"yogurt",
  seller_id: User.fourth.id,
  availability: 300
})
yogurt6_pic = URI.open("https://mooguri-dev.s3.us-west-1.amazonaws.com/yogurt6_il_794xN.3837567024_8igo.jpg")
yogurt6_product.photo.attach(io: yogurt6_pic, filename:"/yogurt6_il_794xN.3837567024_8igo.jpg")



Review.create!([
  { body: "I've got some BEEF with whoever made this site!", reviewer_id: User.third.id, username: User.third.username, product_id: Product.first.id },
  { body: "Now, now, let's settle this with proper cow-moo-nication!", reviewer_id: User.second.id, username: User.second.username, product_id: Product.first.id },
  { body: "Okay, NOW you're making my blood boil! >:C", reviewer_id: User.third.id, username: User.third.username, product_id: Product.first.id },
  { body: "Well, you're making my milk curdle *sigh*", reviewer_id: User.second.id, username: User.second.username, product_id: Product.first.id },
  { body: "You're not supposed to see this with good ole milk jug C;", reviewer_id: User.third.id, username: User.third.username, product_id: Product.second.id }
])
