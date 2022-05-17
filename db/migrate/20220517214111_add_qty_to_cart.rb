class AddQtyToCart < ActiveRecord::Migration[5.2]
  def change
    add_column :carts, :qty, :integer, default: 1, null: false
  end
end
