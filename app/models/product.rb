class Product < ApplicationRecord
  validates :product_name, :description, :price, :category, :seller_id, :availability, presence: true

  belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User

  #Product.all[0].photo and Product.all[0].photo.attached? references the has_one_attached :photo association
  #attached returns false for now because no photo attached
  has_one_attached :photo
end
