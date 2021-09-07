import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EditBrandForm = (props) => {
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')

  useEffect(() => {
    getBrand()
  }, [])

  const getBrand = async () => {
    try {
    let res = await axios.get(`/api/brands/${props.match.params.id}`)
    setName(res.data.name)
    setAbout(res.data.about)
    }catch(err) {
      console.log(err)
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

  return (
    <div>
      <form onSubmit={handleClick}>
        <p>Edit Brand Name</p>
        <input value={name} onChange={(e) => {setName(e.target.value)}}/>
        <p>Edit About</p>
        <input value={about} onChange={(e) => {setAbout(e.target.value)}} />
        <button type='submit'>Edit Brand</button>
      </form>
      <p onClick={() => props.history.goBack()}>Back!</p>
    </div>
  )
}

export default EditBrandForm