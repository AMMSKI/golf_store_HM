import axios from 'axios'
import React, { useEffect, useState } from 'react' 

const EditProductForm = (props) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    try {
      let res = await axios.get(`/api/brands/${props.match.params.brand_id}/products/${props.match.params.id}`)
      console.log(res)
      setName(res.data.name)
      setDescription(res.data.description)
    }catch(err){
      console.log(err)
    }
  }

  const handleClick = async(e) => {
    e.preventDefault()
    console.log(name, description)
    try {
      let res = await axios.put(`/api/brands/${props.match.params.brand_id}/products/${props.match.params.id}`, { name, description })
      props.history.goBack()
    }catch(err) {
      console.log(err)
    }
  }

  return(
    <div>
      <form onSubmit={handleClick}>
        <p>Edit Product Name</p>
        <input value={name} onChange={(e) => {setName(e.target.value)}}/>
        <p>Edit Description</p>
        <input value={description} onChange={(e) => {setDescription(e.target.value)}} />
        <button type='submit'>Edit product</button>
      </form>
      <p onClick={() => props.history.goBack()}>Back!</p>
    </div>
  )



}

export default EditProductForm

// const updateProduct = async (product) => {
//   try {
//     let res = await axios.put(`/api/brands/${props.match.params.brand_id}/products/${product.id}`, product)
//     let newProducts = products.map((p) => p.id === product.id ? product : p)
//   }catch(err) {
//     console.log(err)
//   }
// }