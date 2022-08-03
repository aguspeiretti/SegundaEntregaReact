import React from 'react'
import "./ItemCount.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'



function ItemCount({ titulo, stock, inicial,img,id ,idProducto}) {

    const [count, setCount] = useState(inicial)

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
        if (count === 0){
            alert(`debes agregar un producto al carrito`)
        }else{
            alert(`Agregaste ${count} unidad del producto ${id} al carrito`)
        }
    }

  return (
    <div className='card'>
        <h3>{titulo}</h3>
        <Link to={`/item/${idProducto}`}><img className='imagenCard' src={img} alt="imagen" /></Link>
        <div className="contador">
            <button disabled={count === 0 } onClick={handleClickMenos} className='aumentar'>-</button>
            {count}
            <button onClick={handleClickMas } className='disminuir'>+</button>
        </div>
        <button onClick={onAdd} className='agregar'>Agregar al carrito</button>
    </div>
  )
}


export default ItemCount