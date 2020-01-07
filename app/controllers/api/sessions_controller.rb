class Api::SessionsController < ApplicationController
    def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username], 
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      render '/api/users/show'
    else
      # flash.now[:errors] = ['Invalid username or password']
      # render :new
      render json: ['Invalid username/password combination'], status: 401
    end
  end

  def destroy
    if current_user
      log_out!
      render json: {}
    else
      render json: ['No user is currently logged in'], status: 404
    end
  end
end
