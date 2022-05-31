import React from 'react'
import '../styles/ProductRow1.css'


function ProductRow1(props) {
    const name= props.name
    const status = props.status
    const avatar= props.image

  return (
    <div className='product-row'>
      <img src={avatar} alt={`es el avatar de ${name}`}></img>
        <span>{name} </span>
        <span>{` ${status}`} </span>
    </div>
  )
}

export { ProductRow1 }