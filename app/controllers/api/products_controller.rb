class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render "api/products/index"
  end

  def show
    #when fetch product include review
    #in jbuilder, include reviews in jbuilder
    @product = Product.find_by(id: params[:id])
    render "api/products/show"
  end
end
