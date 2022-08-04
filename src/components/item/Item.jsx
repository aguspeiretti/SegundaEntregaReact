import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"

const Item = ({ titulo, stock, inicial,img,id ,idProducto}) => {

  const [count, setCount] = useState(inicial)

  const [carrito , setCarrito] = useState(false)

  
  const handleClickMas = () => {
    setCount(count + 1)
    if(count === stock){
        setCount(stock)
    }                 
}

const handleClickMenos = () => {
    setCount(count - 1)        
}


  const onAdd = ()=> {
    setCarrito(true)
}
   
  return (

    <div className='card'>

        <h3>{titulo}</h3>
        <Link to={`/item/${idProducto}`}><img className='imagenCard' src={img} alt="imagen" /></Link>
        {
          carrito
          ?<Link to="/carrito"> Finalizar compra </Link>
          :<ItemCount inicial={inicial} stock={stock}  />
        }
        

        <button onClick={onAdd} className='agregar'>Agregar al carrito</button>
   
    
        
    </div>

  )
}

export default Item