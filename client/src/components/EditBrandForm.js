import axios from 'axios'
import React, { useState } from 'react'

const EditBrandForm = (props) => {
  console.log(props)
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  

  const getBrand = async () => {
    try {
    let res = await axios.get(`api/brands/${props.match.params.id}`)
    setName(res.data.name)
    setAbout(res.data.about)
    }catch(err) {
      console.lo(err)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.put(`/api/brands/${props.match.params.id}`, { name, about })
      props.history.push('/brands')
    } catch (err) {
      console.log(err)
    }
  }

//   try {
//     let res = await axios.put(`/api/brands/${brand.id}`, brand)
//    setBrands(res.data)
//  }catch(err){
//    console.log(err)
//  }
// }


  return (
    <div>
      <form onSubmit={handleClick}>
      <input type="hidden" name="_method" value="patch" />
        <p>Add Brand Name</p>
        <input value={name} onChange={(e) => {setName(e.target.value)}}/>
        <p>Add About</p>
        <input value={about} onChange={(e) => {setAbout(e.target.value)}} />
        <button type='submit'>Add Brand</button>
      </form>
    </div>
  )
}

export default EditBrandForm