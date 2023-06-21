class Api::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.order('RANDOM()').first
    render json: @greeting.message
  end
end