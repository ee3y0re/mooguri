class Api::UsersController < ApplicationController

  # def create
  #   @user = User.new(user_params)
  #   if @user.save
  #     #don't forget to login the user or else currentUser will become undefined
  #     #you don't have a show.html.erb
  #     render json: :show #i'm expecting show.json.jbuilder; WRONG
  #   else
  #     #need to render the login page again with sign up
  #     #temp place holder
  #     #this saves the error to the currentUser key rather than actually registering as an error
  #     render json: ['This user was already created or input info is invalid'] #@user.errors.full_messages, status: 422
  #   end
  # end

  #correct
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show' #i'm expecting show.json.jbuilder
    else
      # debugger
      #need to render the login page again with sign up
      #temp place holder
      render json: ['This user was already created or input info is invalid'], status: 422 #@user.errors.full_messages, status: 422
    end
  end
  
  private

  def user_params
      params.require(:user).permit(:username, :email, :password)
  end
end
