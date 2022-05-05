import React from 'react'
import '../styles/SearchBar.css'
function SearchBar() {
  return (
    <div className='search-bar_container'>
        <input type="text" value="Search..."/>
        <input id="show-product" type="checkbox" />
        <label htmlFor="show-product">Only show products in stock</label>
    </div>
  )
}

export {SearchBar}