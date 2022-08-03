import React from 'react'
import ItemCount from "../ItemCount/ItemCount"

const Item = ({producto}) => {

  
 
    
  return (

    <div className='card'>
        <ItemCount 
        inicial={producto.inicial } 
        stock={producto.stock}
        id={producto.id}
        titulo={producto.titulo}
        img={producto.img}
        idProducto={producto.idProducto}
        />
    </div>

  )
}

export default Item