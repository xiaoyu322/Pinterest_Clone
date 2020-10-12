class Api::PinsController < ApplicationController

  def create
    @pin = Pin.new(pin_params)

    if @pin.save
      @pins = Pin.all
      render "api/pins/index"
    else
      render json: @pin.errors.full_messages, status: 422
    end 
  end 

  def show
    @pin = Pin.find(params[:id])
    render "api/pins/show"
  end 

  def index
    @pins = Pin.all
    render "api/pins/index"
  end 
  
  def destroy
    @pin = Pin.find(params[:id])
      if @pin.destroy
        @pins = Pin.all
        render "api/pins/index"
      else
        render json: @pin.errors.full_messages, status: 422
      end
  end    

  private

  def pin_params
    params.require(:pin).permit(:title, :user_id, :photo)
  end 

end
