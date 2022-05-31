import React from 'react'
import { ProductRow1 } from './ProductRow1';
import { ProductRow2 } from './ProductRow2';
import '../styles/CategoryProductRow.css'
function CategoryProductRow(props) {
    const title = props.title
    const list = props.list
  return (
    <div className='category-container'>
        <div className='category-title'>
            {title}
        </div>
        <div className='category-body'>
             
              {title === 'Characters' 
              ? list.map((character)=>
                <ProductRow1 
                name={character.name}
                status={character.status} 
                key={character.name}
                image={character.image}> 
                </ProductRow1>) 
              :list.map((location)=>
                <ProductRow2 
                name={location.name}
                type={location.type}
                key={location.name}
                dimension={location.dimension}>
                </ProductRow2>)}
              
            
              
            
            
            
              
            
            
           
            

        </div>
    </div>
  )
}

export {CategoryProductRow}