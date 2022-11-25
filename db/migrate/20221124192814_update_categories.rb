class UpdateCategories < ActiveRecord::Migration[6.0]
  def change
    remove_column :categories, :product_id, :integer
    rename_column :categories, :category_name, :name
  end
end
