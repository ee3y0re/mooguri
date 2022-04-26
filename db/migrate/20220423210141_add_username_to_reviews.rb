class AddUsernameToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :username, :string, null: false
  end
end
