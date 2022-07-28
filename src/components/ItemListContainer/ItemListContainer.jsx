import React, { useEffect, useState } from 'react'

import productos from "../../productos.json"
import ItemList from '../ItemList/ItemList'


function ItemListContainer(){

    const [items ,setItems] = useState([])

    useEffect(()=>{
        
    const promesaProductos = new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })
    promesaProductos
    .then((resultado)=>{
        setItems(resultado)
    })

    },[])

   

    return(
        <div>
                <ItemList productos={items}/>
        </div>
            
       
    )
}

export default ItemListContainer

