import React from 'react'
import ItemCount from './ItemCount'
import "../components/CardContainer.css"

const CardContainer = () => {
  return (

    <div className='CardContainer'>
        <ItemCount
           titulo={"remera"}
           stock={10}
           inicial={1} 
        />
    </div>

  )
}

export default CardContainer