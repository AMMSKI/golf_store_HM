import React from 'react'


const Product = ({id, name, description, brand_id}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>brand id:{brand_id}</h3>
    </div>
  )

}

export default Product