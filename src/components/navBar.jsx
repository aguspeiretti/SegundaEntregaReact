import React from 'react'
import logo from  "../images/logo.png"
import "../components/navBar.css"





function Menu() {

    const mostrarMenu = () => {
        const menu = document.getElementById("menuUl");
        menu.classList.toggle("mostrar");
    }

  return (
    <div className="menu">
        <div>
            <img className= "animate__animated animate__bounceInRight imagenLogo" src={logo} alt="logo" />
            
            <div className='barra'></div>
            
            <ul id='menuUl' >
               <li>Home</li>
               <li className='uno'>Nosotros</li>
               <li className='dos'>Colegios</li>
               <li className='tres'>Empresas</li>
               <li className='cuatro'>Jardines</li>
              </ul>
        </div>
        <button className='btnMenu' onClick={mostrarMenu}>Menu</button>
           
        
    
    </div>
  )
}

export default Menu