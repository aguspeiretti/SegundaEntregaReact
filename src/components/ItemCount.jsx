import React from 'react'
import "../components/ItemCount.css"
import { useState } from 'react'



function ItemCount({ titulo, stock, inicial }) {

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
            alert(`Agregaste ${count} productos al carrito`)
        }
    }

  return (
    <div className='card'>
        <h3>{titulo}</h3>
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