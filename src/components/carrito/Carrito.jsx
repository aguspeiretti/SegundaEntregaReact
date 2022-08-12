import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Loader from '../loader/Loader'
import "./carrito.css"

const Carrito = () => {

    const cartContext = useContext(CartContext)
     const{cart,deleteCartById} = cartContext
     const {deleteCart}  = cartContext
   
    const vaciarCarrito = () =>{
       deleteCart()
    }
   
   
     return (
   
       <div className='carritoPrincipal'>
           <div className='carrito'>
   
             <div className='tituloCarrito'>
                   <h2>Tu Carrito</h2>
               </div>
               <div className='prendasCarrito'>
                   <h4>Tus prendas</h4>
               </div>
               <div>
                 
               </div>
               <div className='productosCarrito'>
   
                   {cart.map((producto)=>{
                       const eliminarUno = () =>{
                           deleteCartById(producto.id)
                       }
                       return(
                           <div key={producto.id} className='cartCarrito'>
                             <div className='unitario'>
                               <img src={producto.img} alt={producto.titulo} />
                               <div className='unitarioInfo'>
                               <h3>{producto.titulo}</h3>
                               <p>{producto.descripcion}</p>
                               <p>Unidades : { producto.cantidad}</p>
                               </div>
                               <button onClick={eliminarUno}  className='buttonUnitario'>X</button>
   
                             </div>
                           
                           </div>
                       )
                   })
                   }   
                   <div className='botonesFinales'>
                   <button  onClick={vaciarCarrito} className='vaciarCarrito'>Vaciar Carrito</button> 
                   <Link to="/Pago"> <button className='vaciarCarrito'>finalizar Compra</button></Link>
                   </div>
                         
               </div>
               
   
   
           </div>
          
       </div>
   
     )
   }
   
   export default Carrito