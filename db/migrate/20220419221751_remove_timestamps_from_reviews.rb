class RemoveTimestampsFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :created_at, :string
    remove_column :reviews, :updated_at, :string
  end
end
