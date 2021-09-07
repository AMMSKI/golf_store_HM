import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = ({ brand_id }) => {

  const [products, setProducts] = useState([])
  
  useEffect(()=> {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
    let res = await axios.get(`/api/brands/${brand_id}/products`)
    setProducts(res.data)
    }catch (err){
      console.log(err)
    }
  }
  

  const renderProducts = () => {
    return products.map((p) => <Product key={p.id} {...p} /> )
  }

 return (
   <>
     <h1>Products here</h1>
     {renderProducts()}
   </>
 )
}

export default Products