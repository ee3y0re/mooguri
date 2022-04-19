class Review < ApplicationRecord
  validates :body, :reviewer_id, :product_id, presence: true
  #limits the type of rating you can give
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :reviewer,
    foreign_key: :reviewer_id,
    class_name: :User

  belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product
end
