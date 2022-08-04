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
            <Item 
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
  )
}
      
    
    


export default ItemDetail