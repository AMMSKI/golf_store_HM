class Api::BrandsController < ApplicationController

  def index
    render json: Brand.all
  end


end
