import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



const ItemDetail = ({producto}) => {

  
 
  const cartContext = useContext(CartContext)
  const {cart ,addToCart ,mostrarCart ,showCart} = cartContext
  const [goToCart , setGoToCart] = useState(false)
  
  const mostrarCarrito = () =>{
    mostrarCart()}
 
  const onAdd = (cantidad) =>{
    addToCart(producto[0] ,cantidad)
    setGoToCart(true)
    mostrarCarrito()
  }

  return (   
        
    <div className='contenedor'>
      
       {
        producto.map((prod , i )=>{
          return(
            <div key={i} className='card'>
              <h3>{prod.titulo}</h3>
              <Link to={`/item/${prod.idProducto}`}><img className='imagenCard' src={prod.img} alt="imagen" /></Link>
              
              {
                goToCart
                ?<Link to={"/cart"}>Terminar compra</Link>
                :<ItemCount  inicial={prod.inicial} stock={prod.stock} onAdd={onAdd} />
              }

             </div>
            )
        })
      }
     

    </div>
  )
}
      
    
    


export default ItemDetail