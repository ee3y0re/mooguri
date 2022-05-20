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

### Remaining Products
## milk
## cheese
## yogurt
## lactose free
## pun

Review.create!([
  { body: "I've got some BEEF with whoever made this site!", reviewer_id: User.third.id, username: User.third.username, product_id: Product.first.id },
  { body: "Now, now, let's settle this with proper cow-moo-nication!", reviewer_id: User.second.id, username: User.second.username, product_id: Product.first.id },
  { body: "Okay, NOW you're making my blood boil! >:C", reviewer_id: User.third.id, username: User.third.username, product_id: Product.first.id },
  { body: "Well, you're making my milk curdle *sigh*", reviewer_id: User.second.id, username: User.second.username, product_id: Product.first.id },
  { body: "You're not supposed to see this with good ole milk jug C;", reviewer_id: User.third.id, username: User.third.username, product_id: Product.second.id }
])
