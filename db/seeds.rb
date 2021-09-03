# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"
Brand.destroy_all
Product.destroy_all



5.times do  
  Brand.create(name:Faker::Company.bs, about:Faker::ChuckNorris.fact)
end

def seed_products 
    brands = Brand.all
      brands.each do |brand|
      10.times do 
        brand.products.create(name:Faker::Science.element_subcategory, description:Faker::ChuckNorris.fact)
    end
  end
end

seed_products

