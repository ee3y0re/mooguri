class Review < ApplicationRecord
  validates :body, :reviewer_id, :product_id, presence: true

  belongs_to :reviewer,
    foreign_key: :reviewer_id,
    class_name: :User

  belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product
end
