class Collection < ApplicationRecord
  validates :product_id, :category_id, presence: true

  belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product

  belongs_to :category,
    foreign_key: :category_id,
    class_name: :Category
end
