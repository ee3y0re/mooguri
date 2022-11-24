class Category < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :product_mentions,
    foreign_key: :category_id,
    class_name: :Collection

  has_many :listings,
    through: :product_mentions,
    source: :product
end
