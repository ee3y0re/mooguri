class Api::SessionsController < ApplicationController
  def create
    # debugger
    @user = User.find_by_credentials(
      params[:user][:email], 
      params[:user][:password]
    )
    if @user.nil?
      render json: ['Invalid email or password.'], status: 401
    else
      login!(@user)
      # debugger
      render 'api/users/show'
    end

  end

  def destroy
    # debugger
    logout!
    render json: '{}'
  end
end
