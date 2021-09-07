
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Brand from './Brand'
import BrandFrom from './BrandForm'


const Brands = () => {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    getBrands()
  }, [])

  const getBrands = async () => {
    try { 
      let res = await axios.get('/api/brands')
      setBrands(res.data)
    } catch (err){
      console.log(err)
    }
  }

  const newBrand = async (brand) => {
    try {
      let res = await axios.post('api/brands', brand)
      setBrands(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const updateBrand = async (brand) => {
    try {
       let res = await axios.put(`/api/brands/${brand.id}`, brand)
      setBrands(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const deleteBrand = async (id) => {
    await axios.delete(`/api/brands/${id}`)
    let newBrands = brands.filter((b) => b.id !== id ? b : '')
    
    setBrands(newBrands)
  }


  const renderBrands = () => {
  return brands.map((b) => <Brand  key={b.id} {...b} deleteBrand={deleteBrand} updateBrand={updateBrand} />) // going to t move the map functoin into my Brand component to get a better functionality

  }

  return (
    <>
    <h1>Brands</h1>
    <BrandFrom newBrand={newBrand}/> 
    {renderBrands()}
    </>
  )

}

export default Brands