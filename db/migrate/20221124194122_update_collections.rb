class UpdateCollections < ActiveRecord::Migration[6.0]
  def change
    change_column_null :collections, :product_id, false
    add_index :collections, :product_id
    change_column_null :collections, :category_id, false
    add_index :collections, :category_id
  end
end
