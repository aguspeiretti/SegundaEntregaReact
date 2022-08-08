import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import productos from "../../productos.json"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'


function ItemListContainer(){

    const [items ,setItems] = useState([])
    const { idCategoria }= useParams()

    useEffect(()=>{
        
    const promesaProductos = new Promise((resolve ,reject)=>{

        setTimeout(()=>{

            if(idCategoria){
                resolve(productos.filter(producto=>producto.idCategoria === idCategoria))
            }
            else{
                resolve(productos)
            }
            
            
        },2000)
    })
    promesaProductos
    .then((resultado)=>{
        setItems(resultado)
       
    })

    },[idCategoria])

   

    return(
        <div className='ItemListContainer'>
                <ItemList productos={items}/>
                
        </div>
            
       
    )
}

export default ItemListContainer

