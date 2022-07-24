import React, { useEffect } from 'react'
import { useState } from 'react'
import "../components/CardContainer.css"
import CardContainerPrendas1 from './CardContainerPrendas1'

const CardContainer = () => {

const [items, setItems] = useState([])

useEffect(() => {
    setItems([
      {
        id: 1,
        titulo: 'Producto 1',
        stock: 10,
        inicial: 1
      },
      {
        id: 2,
        titulo: 'Producto 2',
        stock: 10,
        inicial: 1
      },
      {
        id: 3,
        titulo: 'Producto 3',
        stock: 10,
        inicial: 1
      },
      {
        id: 3,
        titulo: 'Producto 3',
        stock: 10,
        inicial: 1
      },
      {
        id: 3,
        titulo: 'Producto 3',
        stock: 10,
        inicial: 1
      },
      {
        id: 4,
        titulo: 'Producto 4',
        stock: 10,
        inicial: 1
      },
      {
        id:5,
        titulo: 'Producto 5',
        stock: 10,
        inicial: 1
      },
      {
        id: 6,
        titulo: 'Producto 6',
        stock: 10,
        inicial: 1
      },
      {
        id: 7,
        titulo: 'Producto 7',
        stock: 10,
        inicial: 1
      }

    ])
},[])



  return (

    <div className='CardContainer'>
        
        
      <CardContainerPrendas1 elementos={items} />
          

    </div>

  )
}

export default CardContainer