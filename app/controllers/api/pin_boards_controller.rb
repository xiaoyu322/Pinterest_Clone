class Api::PinBoardsController < ApplicationController

    def index
        @pin_boards = PinBoard.all
        render "/api/pin_boards/index"
    end

    def create
        @pin_board = PinBoard.create(pin_board_params)
        if @pin_board.save!
            render json: @pin_board.pin_id
        else
            render json: @pin_board.errors.full_messages, status: 422
        end
    end

    def destroy

    end

    def pin_board_params
        params.require(:pin_board).permit(:board_id, :pin_id)
    end
end
