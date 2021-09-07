
import React from 'react'
import { Link } from 'react-router-dom'
import BrandForm from './BrandForm'




const Brand = ({ id, name, about, deleteBrand, updateBrand }) => {

  return (
    <div key={id}>
      <h1>{name}</h1>
      <h3>{about}</h3>
      <BrandForm updateBrand={updateBrand} brand={id, name, about}/>
      <Link to='/products'>
        See products
      </Link>
      <p onClick={() => deleteBrand(id)}>Delete</p>
    </div>
    
  )
}

export default Brand