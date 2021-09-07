class Api::ProductsController < ApplicationController
  before_action :set_brand
  before_action :set_products, only: [:show, :edit, :update, :destroy]

  def index
    products = @brand.products.all
    render json: products
  end

  def destroy
    @product.destroy
    render json: @product
  end





  private 

  def set_products
    @product = Product.find(params[:id])
  end

  def set_brand
    @brand = Brand.find(params[:brand_id])
  end
  
end
