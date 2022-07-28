import React from 'react'
import "./Item.css"
const Item = ({producto}) => {

    
  return (

    <div className='card'>
        <h3>{producto.titulo}</h3>
        <p>{producto.stock}</p>
    </div>

  )
}

export default Item