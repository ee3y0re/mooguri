class Api::ReviewsController < ApplicationController
  # edit require_login to open modal instead of rendering root
  before_action :require_login#,  []

  def index
    @reviews = Review.all
    render '/api/reviews/index'
  end

  def show
    @review = Review.find(params[:id])
    render "/api/reviews/show"
  end

  # def new
  # end

  def create
    @review = Review.new(review_params)
    @review.user_id = params[:user_id]
    if @review.save
      render 'api/reviews/show'
    else
      render json: ["Input is invalid. Please try again."], status: 422
    end
  end

  # def edit
  #   @review = Review.find_by(id: params[:id])
  #   #what is it for edit? i think i need to check the json form
  # end

  def update
    @review = Review.find(params[:id])
    if @review.user_id == current_user.id && @review.update(review_params)
      # i really don't know what to render 
    else
      render json: ["Input is invalid. Please try again."], status: 422
    end
  end

  def destroy
    @review = current_user.reviews.find_by(id: params[:id])
    if @review && @review.delete
      render "/api/reviews/index"
    else
      render json: @review.errors.full_messages
    end
  end

  private

  def review_params
    params.require(:review).permit(:body)
  end

end
