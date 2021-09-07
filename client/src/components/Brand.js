import React from 'react'
import { useHistory } from "react-router-dom";




const Brand = ({ id, name, about, deleteBrand }) => {
  const history = useHistory()
  return (
    <div key={id}>
      <h1>{name}</h1>
      <h3>{about}</h3>
      <button onClick={() => history.push(`/brands/${id}`)}>Edit</button>
      <button onClick={() => deleteBrand(id)}>Delete</button>
      <div onClick={() => history.push(`/brands/${id}/products`)}>See Products</div>
    </div>
    
  )
}

export default Brand