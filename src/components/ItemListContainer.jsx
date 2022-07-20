import React from 'react'
import "../components/ItemListContainer.css"

function ItemListContainer({greeting}){

    return(
        <div className='contenedorContador'>
            {greeting}0
        </div>
    )
}

export default ItemListContainer

