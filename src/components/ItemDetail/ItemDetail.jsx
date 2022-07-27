import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({items}) => {
  console.log(items)

  return (
        
    <div className='contenedor'>
     
      {
        items.map((item) =>
          <div key={item.id}>
            <img src={item.img} alt={item.titulo} />
            <p>{item.descripcion}</p>
            <p className='precio'>{item.precio}</p>
            
          </div>
        )
      }
    </div>
  )
}
      
    
    


export default ItemDetail