import React from 'react'
import Item from '../item/Item'
import "./ItemList.css"


const ItemList = ({productos}) => {
    
   console.log(productos)

  return (
    <div className='contenedorItemList'>
<div className='ItemList'>
    
    {
        productos.map((producto)=>{
            return(
               <Item
               key={producto.id}
               inicial={producto.inicial } 
            stock={producto.stock}
            id={producto.id}
            titulo={producto.titulo}
            img={producto.img}
            idProducto={producto.idProducto} 
                /> 
            )
            
        })
    }

  </div>
    </div>
  
          

  )
}

export default ItemList
