class Api::UsersController < ApplicationController

    before_action :require_logged_in, only: [:show]

    def new 
        @user = User.new 
        render :new 
    end
    
    def create 
        @user = User.new(user_params)
        render :new 
    end
    
    def show
        @user = User.find_by(id: params[:id])
        render :show 
    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end






