class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email], 
      params[:user][:password]
    )
    # debugger #@user should not be nil
    if @user.nil?
      render json: ['Invalid email or password.'], status: 401
    else
      # debugger #did we hit else in create to head to login?
      login!(@user)
      render 'api/users/show'
    end

  end

  def destroy
    logout!
    render json: '{}'
  end
end
