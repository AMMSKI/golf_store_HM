import axios from 'axios'
import React, { useState } from 'react'

const ProductsForm = (props) => {
  const [name, setName]= useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    newProduct({ name, description })
    setName('')
    setDescription('')
  }

  const newProduct = async (product) => {
    try {
      let res = await axios.post(`/api/brands/${props.match.params.brand_id}/products`, product)
      //This is what i was working on when i took a break
    }catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Enter Name here</h3>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <h3>Enter Description here</h3>
        <input value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )





}

export default ProductsForm