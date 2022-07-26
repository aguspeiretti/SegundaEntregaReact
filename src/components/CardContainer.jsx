import React, { useEffect } from 'react'
import { useState } from 'react'
import "../components/CardContainer.css"
import CardContainerPrendas1 from './CardContainerPrendas1'
import productos from  "../productos.json"

const CardContainer = () => {

const [items, setItems] = useState([])

useEffect(() => {

  setTimeout(() => {
    
    setItems(productos)
  }, 3000);
    
},[])




  return (

    <div className='CardContainer'>
        
        
      <CardContainerPrendas1 elementos={items} />
          

    </div>

  )
}

export default CardContainer