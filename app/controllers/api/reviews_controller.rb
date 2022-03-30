class Api::ReviewsController < ApplicationController
  # TODO edit require_login to open modal instead of rendering root
  # before_action :require_login, only: [:create, :update, :destroy]

  def index
    @reviews = Review.all
    render '/api/reviews/index'
  end
  ## test on postman by navigating url to index on localhost:3000/api/reviews
  ## should have error of template missing
  ## build template

  def show
    # debugger
    @review = Review.find(params[:id])
    render "/api/reviews/show"
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render '/api/reviews/show'
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
    #debugger showed what params looks like and how to key into it
    @user = User.find(@review.reviewer_id)
    if @user.id == current_user.id && @review.update(review_params)
      render "api/reviews/show"
    else
      render json: ["Input is invalid. Please try again."], status: 422
    end

    ## for testing
    # @review = Review.find(params[:id])
    # @user = User.find(@review.reviewer_id)
    ## put in the id of the user with a review to test update, sub for current user
    # if @user.id == 3 && @review.update(review_params)
    #   render "api/reviews/show"
    # else
    #   render json: ["still not working"], status: 422
    # end
  end

  def destroy
    @review = current_user.reviews.find_by(id: params[:id])
    if @review && @review.destroy
      render json: ["#{@review.id} has been deleted"]
    else
      render json: ["Review was not found or could not be deleted."], status: 500
    end

    # ## for testing
    # ## put in id of a user with review to test destroy, sub for current user
    # @user = User.find_by(id: 3)
    # @review = @user.reviews.find_by(id: params[:id])

    # if @review && @review.destroy
    #   render json: ["#{@review.id} has been deleted"]
    # else
    #   render json: ["Review was not found or could not be deleted."], status: 500
    # end
  end

  ## remember to bring back authenticity check in application.rb after testing postman

  private

  def review_params
    params.require(:review).permit(:body, :reviewer_id, :product_id)
  end

end
