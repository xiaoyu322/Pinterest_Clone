class Api::FollowsController < ApplicationController
    def create
        @follow = Follow.new(follow_params)
        if @follow.save 
            render :show 
        else 
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def show
        @follow = Follow.find(params[:id])
        render "api/follows/show"
    end 

    def index
        @follows = Follow.all
        render "api/follows/index"
    end 

    def destroy 
        @follow = Follow.find(params[:id])
        if @follow.destroy
            @follows = Follow.all
            render "api/follows/index"
        else 
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def follow_params
        params.require(:follow).permit(:user_id, :follower_id)
    end
end