class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render "/api/categories/index"
  end

  def show
    @category_prods = Category.find_by(id: params[:id]).listings
    render "/api/categories/show"
  end

  private

  def category_params
    params.require(:category).permit(:name, :product_id)
  end
end
