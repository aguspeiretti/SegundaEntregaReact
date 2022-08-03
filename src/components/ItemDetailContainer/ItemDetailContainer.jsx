import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import productos from '../../productos.json'
import ".//ItemDetailContainer.css"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const [items, setItems] = useState([])
  const { idProducto } = useParams()

 
  useEffect(() => {

  const PromesaProducto = new Promise((resolve, reject) => {
    setTimeout(() => {
      
      if(idProducto){
        resolve(productos.filter(producto=>producto.idProducto === idProducto))
    }
    else{
        resolve(productos)
    }
  
      
    }, 2000);
  })
   
  PromesaProducto.then((resultado) => {
    setItems(resultado)

    

    
  })
    
}, [idProducto])



return (
  <div className='idc'>
  <ItemDetail producto={items} />
  </div>

  

)
}

export default ItemDetailContainer

