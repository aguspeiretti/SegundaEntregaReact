import React, { useContext } from 'react'
import "./ItemCount.css"
import { useState } from 'react'
import { CartContext } from '../../context/CartContext'



function ItemCount( {stock, inicial ,onAdd }) {



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


  return (
    <div className='card'>        
        <div className="contador">
            <button disabled={count === 0 } onClick={handleClickMenos} className='aumentar'>-</button>
            {count}
            <button onClick={handleClickMas }  className='disminuir'>+</button>
            
        </div>        
        <button onClick={()=>onAdd(count)}  className='agregar'>Agregar al carrito</button>  
    </div>
  )
}


export default ItemCount