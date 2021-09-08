import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import ProductsForm from './ProductsFrom'


const Products = (props) => {
  const history = useHistory()
  
  const [products, setProducts] = useState([])
  
  useEffect(()=> {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
    let res = await axios.get(`/api/brands/${props.match.params.brand_id}/products`)
    setProducts(res.data)
    }catch (err){
      console.log(err)
    }
  }

  const deleteProduct = async (brand_id, id) => {
    try {
      await axios.delete(`/api/brands/${brand_id}/products/${id}`)
      let filteredProducts = products.filter((p) => p.id != id)
      setProducts(filteredProducts)
    } catch (err) {
      console.log(err)
    }
  }

  const renderProducts = () => {
    return products.map((p) => {
      return (
      <div key={p.id}>
       <h2>{p.name}</h2>
       <p>{p.description}</p>
       <button onClick={() => history.push(`/brands/${p.brand_id}/products/${p.id}`)}>Edit</button>
       <button onClick={() => deleteProduct(p.brand_id, p.id)}>Delete</button>
     </div>
      )
    })
  }

  console.log(products)
 return (
   <div>
     <h1>Here are your products:</h1>
     <ProductsForm />
     {renderProducts()}
   </div>
  )
}

export default Products