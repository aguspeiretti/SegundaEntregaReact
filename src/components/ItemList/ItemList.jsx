import React from 'react'
import Item from '../item/Item'
import "./ItemList.css"


const ItemList = ({productos}) => {
    
   
  return (
  <div className='ItemList'>
    
    {
        productos.map((producto)=>{
            return(
               <Item producto={producto} /> 
            )
            
        })
    }

  </div>
          

  )
}

export default ItemList
