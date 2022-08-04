import React from 'react'
import "./ItemCount.css"
import { useState } from 'react'




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

    

  return (
    <div className='card'>
        
        <div className="contador">
            <button disabled={count === 0 } onClick={handleClickMenos} className='aumentar'>-</button>
            {count}
            <button onClick={handleClickMas } className='disminuir'>+</button>
        </div>
        
    </div>
  )
}


export default ItemCount