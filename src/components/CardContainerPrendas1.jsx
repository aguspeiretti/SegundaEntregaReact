import React from 'react'
import ".CardContainerPrendas1.css"
import ItemCount from './ItemCount'

const CardContainerPrendas1 = ({elementos}) => {

  return (

    <div className='cardContainerPrendas1'>
        {
            elementos.map((elemento) => 
            <ItemCount
            titulo={elemento.titulo}
            stock={elemento.stock}
            inicial={elemento.inicial}
            img={elemento.img}
            id = {elemento.id}
            />
        )
        }
    </div>

  )
}

export default CardContainerPrendas1