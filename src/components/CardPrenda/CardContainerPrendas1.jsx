import React from 'react'
import "./CardContainerPrendas1.css"
import ItemCount from '../ItemCount/ItemCount'

const CardContainerPrendas1 = ({elementos}) => {

  return (

    <div className='cardContainerPrendas1'>
        {
            elementos.map((elemento) => 
            <ItemCount
            key={elemento.id}
            titulo={elemento.titulo}
            stock={elemento.stock}
            inicial={elemento.inicial}
            img={elemento.img}
            
            
            />
            
        )
        
        }
    </div>

  )
}

export default CardContainerPrendas1