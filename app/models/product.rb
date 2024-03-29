class Product < ApplicationRecord
  validates :product_name, :description, :price, :seller_id, :availability, presence: true

  # for future reference, we want to work on this while working on product feature
  belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User

  has_one :listing,
    foreign_key: :product_id,
    class_name: :Collection

  has_many :reviews,
    foreign_key: :product_id,
    class_name: :Review

  has_many :carts,
    foreign_key: :cart_item_id,
    class_name: :Cart

  has_one :listing_category,
    through: :listing,
    source: :category

  #Product.all[0].photo and Product.all[0].photo.attached? references the has_one_attached :photo association
  #attached returns false for now because no photo attached
  has_one_attached :photo
end
