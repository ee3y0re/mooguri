class Cart < ApplicationRecord
  validates :buyer_id, :cart_item_id, :qty, presence: true

  belongs_to :buyer, optional: true,
    foreign_key: :buyer_id,
    class_name: :User

  belongs_to :cart_item,
    foreign_key: :cart_item_id,
    class_name: :Product
end