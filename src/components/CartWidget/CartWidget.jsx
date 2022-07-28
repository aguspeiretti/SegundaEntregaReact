import React from 'react'
import "./CartWidget.css"



function CartWidget() {

  return (
    <>

    <button className='iconoCarritoContenedor'><i className="fa-solid fa-cart-shopping iconoCarrito"></i></button>
    <div className='contenedorContador'>
            0
        </div>
    
    </>
  )
}

export default CartWidget