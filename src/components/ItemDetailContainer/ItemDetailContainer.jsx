import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import tarjeta from '../../tarjeta.json'
import ".//ItemDetailContainer.css"



const PromiseProductos = () => {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(tarjeta)
  }, 2000);
})
}

const ItemDetailContainer = () => {

  const [items, setItems] = useState([])


  useEffect(() => {

    PromiseProductos()
    .then((response)=>{
      setItems(response)
    })
    .catch((error)=>{
      console.log(error)
    })


  })
    return (
      <ItemDetail items={items} />
    )
}


export default ItemDetailContainer