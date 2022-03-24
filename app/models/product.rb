class Product < ApplicationRecord
  validates :product_name, :description, :price, :category, :seller_id, :availability, presence: true

  belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User
end
