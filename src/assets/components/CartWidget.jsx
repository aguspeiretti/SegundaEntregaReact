import React from 'react'
import "../styles/CartWidget.css"
import "../styles/ItemListContainer.css"
import ItemListContainer from './ItemListContainer'

function CartWidget() {

  return (
    <>

    <button className='iconoCarritoContenedor'><i class="fa-solid fa-cart-shopping iconoCarrito"></i></button>

    <ItemListContainer/>

    </>
  )
}

export default CartWidget