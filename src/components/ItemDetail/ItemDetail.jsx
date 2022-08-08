import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



const ItemDetail = ({producto}) => {

  console.log
 
  const cartContext = useContext(CartContext)
  const {cart ,addToCart} = cartContext

  const onAdd = (cantidad) =>{
    addToCart(producto[0] ,cantidad)
  }

  return (   
        
    <div className='contenedor'>
      
       {
        producto.map((prod , i )=>{
          return(
            <div key={i} className='card'>
              <h3>{prod.titulo}</h3>
              <Link to={`/item/${prod.idProducto}`}><img className='imagenCard' src={prod.img} alt="imagen" /></Link>
              
              <ItemCount  inicial={prod.inicial} stock={prod.stock} onAdd={onAdd} />

             </div>
            )
        })
      }
     

    </div>
  )
}
      
    
    


export default ItemDetail