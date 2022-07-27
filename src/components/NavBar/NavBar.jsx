import React from 'react'
import logo from '../../images/logo.png'
import "./navBar.css"
import CartWidget from '../CartWidget/CartWidget'






function NavBar() {

    const mostrarMenu = () => {
        const menu = document.getElementById("menuUl");
        menu.classList.toggle("mostrar");
    }

  return (
    <div className="NavBar">

        <div>
            <img className= "animate__animated animate__bounceInRight imagenLogo" src={logo} alt="logo" />
            
            <div className='barra'>

            <button className='btnMenu' onClick={mostrarMenu}>Menu</button>

               <CartWidget />
               
              

            </div>
            
            <ul id='menuUl' >
               <li><a href="#">Home</a></li>
               <li className='uno'><a href="#">Nosotros</a></li>
               <li className='dos'><a href="#">Colegios</a></li>
               <li className='tres'><a href="#">Empresas</a></li>
               <li className='cuatro'><a href="#">Jardines</a></li>
              </ul>
        </div>
        
           
        
    
    </div>
  )
}

export default NavBar