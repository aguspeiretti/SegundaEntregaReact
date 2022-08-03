import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import Item from '../item/Item'


const ItemDetail = ({producto}) => {
  
 console.log(producto)

  return (   
        
    <div className='contenedor'>
      
    {
        producto.map((producto)=>{
          return(
            <Item key={producto.id}  producto={producto} />
          )
        })
    }
     

    </div>
  )
}
      
    
    


export default ItemDetail