import React from 'react'
import logo from '../../images/logo.png'
import "./navBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"
import Carrito from '../carrito/Carrito'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext' 
import Loader from '../loader/Loader'





function NavBar() {

  const cartContext = useContext(CartContext)
  const {mostrarCart ,showCart } = cartContext

  const mostrarCarrito = () =>{
    mostrarCart()}

   



  return (
    <div className="NavBar">

        <div>
            
            
            <div className='barra'>

            <img className= "animate__animated animate__bounceInRight imagenLogo" src={logo} alt="logo" />

            <ul id='menuUl' >
               <li><Link className='link' to="/">Home</Link></li>
               <li className='dos'><Link className='link' to="/category/Colegios">Colegios</Link></li>
               <li className='tres'><Link className='link' to="/category/Empresas">Empresas</Link></li>
              
              </ul>

              
             

            </div>
            
            {
                showCart ? <Carrito /> : null
            }
           
            <div onClick={mostrarCarrito}  className='pop'>
            <CartWidget />
            </div>
           
        </div>
        
           
        
    
    </div>
  )
}

export default NavBar