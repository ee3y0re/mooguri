class Api::ReviewsController < ApplicationController
  # TODO edit require_login to open modal instead of rendering root
  # before_action :require_login#,  []

  def index
    @reviews = Review.all
    render '/api/reviews/index'
  end
  ## test on postman by navigating url to index on localhost:3000/api/reviews
  ## should have error of template missing
  ## build template

  def show
    @review = Review.find(params[:id])
    render "/api/reviews/show"
  end

  def create
    @review = Review.new(review_params)
    ## this line needs to be commented out in order to test on post man
    @review.reviewer_id = params[:reviewer_id]
    if @review.save
      render 'api/reviews/show'
    else
      render json: ["Input is invalid. Please try again."], status: 422
    end
  end
  ## make sure @review.reviewer_id = params[:reviewer_id] is commented out before testing on postman
  ## test these in postman
  ### review[body] => Now, now, we can settle this beef with proper cow-moo-nication!
  ### review[reviewer_id] => 2
  ### review[product_id] => 1

  def update
    @review = Review.find(params[:id])
    # if @review.reviewer_id == current_user.id && @review.update(review_params)
    if @review.update(review_params) # for testing in postman without a user logged in
      render "api/reviews/show"
    else
      render json: ["Input is invalid. Please try again."], status: 422
    end
  end

  def destroy
    @review = current_user.reviews.find_by(id: params[:id])
    if @review && @review.delete

    # ## testing postman start
    # @review = Review.find(params[:id])
    # if @review.destroy
    # ## testing postman end

      render json: ["#{@review.id} has been deleted"]
    else
      render json: @review.errors.full_messages
    end
  end

  ## remember to bring back authenticity check in application.rb after testing postman

  private

  def review_params
    params.require(:review).permit(:body, :reviewer_id, :product_id)
  end

end
