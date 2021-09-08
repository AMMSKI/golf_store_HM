class Api::BrandsController < ApplicationController
  before_action :set_brand, only: [:show, :edit, :update, :destroy]

  def index
    render json: Brand.all
  end

  def show 
    brand = Brand.find(params[:id])
    render json: brand
  end

  def create
    brand = Brand.new(brand_params)
    if brand.save
      render json: Brand.all
    end
  end

  def update
    if @brand.update(brand_params)
      render json: Brand.all
    end
  end

  def destroy 
    @brand.destroy
    render json: @brand
  end


  private 

  def brand_params
    params.require(:brand).permit(:name, :about, :id)
  end

  def set_brand
    @brand = Brand.find(params[:id])
  end

end
