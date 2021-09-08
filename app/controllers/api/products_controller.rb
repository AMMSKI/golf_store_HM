class Api::ProductsController < ApplicationController
  before_action :set_brand
  before_action :set_products, only: [:show, :edit, :update, :destroy]

  def index
    products = @brand.products.all
    render json: products
  end

  def show
    render json: @product
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    end
  end

  def update
    if (@product.update(product_params))
      render json: @product
    else
      render json: {error: product.error}, status: :unprocesible_entity
    end
  end

  def destroy
    @product.destroy
    render json: @product
  end


  private 

  def product_params
    params.require(:product).permit(:name, :description, :brand_id)
  end

  def set_products
    @product = Product.find(params[:id])
  end

  def set_brand
    @brand = Brand.find(params[:brand_id])
  end
  
end
