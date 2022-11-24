class Category < ApplicationRecord
  validates :category_name, presence: true, uniqueness: true

  has_many :products,
    foreign_key: :product_id,
    class_name: :Product
end
