class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :category_name, null: false
      t.integer :product_id
      t.timestamps
    end

    add_index :categories, :product_id
  end
end
