import React, { useState } from 'react'

const BrandForm = (props) => {
  console.log(props)
  const [name, setName] = useState(props.name ? props.name : '')
  const [about, setAbout] = useState(props.about ? props.about : '')
  const [id, setId] = useState(props.id ? props.id : '')

  const handleClick = (e) => {
    e.preventDefault()
    if(props.id){
      props.updateBrand({ id, name, about })
    } else {
      props.newBrand({ name, about })
    }
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