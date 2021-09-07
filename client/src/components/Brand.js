
import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";




const Brand = ({ id, name, about, deleteBrand }) => {
  const history = useHistory()
  return (
    <div key={id}>
      <h1>{name}</h1>
      <h3>{about}</h3>
      <div onClick={() => history.push(`/brands/${id}`)}>Edit</div>
      <Link to='/products'>
        See products
      </Link>
      <p onClick={() => deleteBrand(id)}>Delete</p>
    </div>
    
  )
}

export default Brand