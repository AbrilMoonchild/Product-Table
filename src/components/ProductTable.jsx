import React, {useEffect, useState} from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import '../styles/ProductTable.css'


function ProductTable() {
  const [dataCharacters,setdataCharacters]=useState([])
  const fetchCharacters =async()=>{
    const response = await fetch('https://rickandmortyapi.com/api/character')
    response.json().then(response=>setdataCharacters(response.results))
  }

  useEffect(() => {
    fetchCharacters()
  
    
  }, [])

  const [dataLocations, setdataLocations]=useState([])
  const fetchLocations = async()=>{
    const response2 = await fetch('https://rickandmortyapi.com/api/location')
    response2.json().then(response2=>setdataLocations(response2.results))
  }
  useEffect(() => {
    fetchLocations()
    
  }, [])
  
   //console.log(dataCharacters)
  return (
    <div className='product-table'>
        <div className='product-table_header'>
            <span>Rick & Morty</span>
            
        </div>
        <div className='product-table_categories'>
            <CategoryProductRow title = 'Characters' list={dataCharacters}/>
            <CategoryProductRow title='Locations' list={dataLocations}/>
        </div>
    </div>
  )
}

export {ProductTable} 