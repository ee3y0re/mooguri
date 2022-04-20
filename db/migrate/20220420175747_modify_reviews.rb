class ModifyReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :reviewer_username, :string, null: false
  end
end
