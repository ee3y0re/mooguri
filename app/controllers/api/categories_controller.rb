class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render "/api/categories/index"
  end

  def show
    @category = Category.find_by(id: params[:id])
    @prod_in_cat = Product.where(category: @category[:category_name])
    render "/api/categories/show" if @category && @prod_in_cat 
  end

  private

  def category_params
    params.require(:category).permit(:category_name, :product_id)
  end
end
