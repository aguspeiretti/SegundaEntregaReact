import React, { useState } from 'react'
import { Link } from 'react-router-dom'


 
const Item = ({producto}) => { 


  return (

    <div className='card'>
        <h3>{producto.titulo}</h3>
        <Link to={`/item/${producto.idProducto}`}><img className='imagenCard' src={producto.img} alt="imagen" /></Link>                 
    </div>
  )
}

export default Item