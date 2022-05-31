import React from 'react'
import '../styles/ProductRow2.css'
function ProductRow2(props) {
    const name = props.name
    const type = props.type
    const dimension = props.dimension
  return (
    <div className='product-row'>
        <span>{name} </span>
        <span>{type} </span>
        <span>{dimension} </span>
    </div>
  )
}

export  {ProductRow2}