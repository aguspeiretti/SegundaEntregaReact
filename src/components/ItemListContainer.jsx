import React from 'react'
import "../components/ItemListContainer.css"
import ItemCount from './ItemCount'

function ItemListContainer({greeting}){

    return(
        <>
        <div className='contenedorContador'>
            {greeting}0
        </div>

        <ItemCount />

        </>
    )
}

export default ItemListContainer

