class RenameColumnsInCarts < ActiveRecord::Migration[5.2]
  def change
    rename_column :carts, :user_id, :buyer_id
    rename_column :carts, :product_id, :cart_item_id
  end
end
