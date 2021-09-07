import React, { useState } from 'react'

const BrandForm = (props) => {
  console.log(props)
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  

  const handleClick = (e) => {
    e.preventDefault()
    props.newBrand({ name, about })
    setName('')
    setAbout('')
  }

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

export default BrandForm