class Api::BoardsController < ApplicationController
    def create
      @board = Board.new(board_params)

      @board.user_id = current_user.id
      
      if @board.save
        render '/api/boards/show'
      else
        render json: @board.errors.full_messages, status: 401
      end
    end
  
    def index
      @boards = Board.all
      render '/api/boards/index'
    end
  
    def show
        @board = Board.includes(pins: { photo_attachment: :blob }).find(params[:id])
        if @board 
            render '/api/boards/show'
        else
            render json: ['Could not locate board'], status: 400
        end
    end
  
  
    def destroy
      @board = Board.find(params[:id])
        if @board.destroy
            @boards = Board.all
            render '/api/boards/index'
        else
            render json: @board.errors.full_messages, status: 422
        end
    end
  
    private
  
    def board_params
      params.require(:board).permit(:user_id, :title)
    end
end
