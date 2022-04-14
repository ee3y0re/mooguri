class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.string :category, null: false
      t.integer :seller_id, null: false
      t.integer :availability, null: false
      t.timestamps
    end

    add_index :products, :product_name
  end
end
