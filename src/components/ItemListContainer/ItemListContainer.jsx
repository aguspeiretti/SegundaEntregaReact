import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import productos from "../../productos.json"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import {collection, getDocs , getFirestore } from "firebase/firestore"
import Loader from '../loader/Loader'


function ItemListContainer(){

    const [items ,setItems] = useState([])
    const { idCategoria }= useParams()
    const [loading ,setLoading] = useState(false)

    useEffect(() =>{
     
        setLoading(true)

        const db = getFirestore()
        
        const refcollectionProductos = collection(db , "productos" ) //referencia al documento
        
        getDocs(refcollectionProductos).then((res) => {
        
        let limpios = res.docs
        
        limpios = limpios.map((producto)=>{
            
        return ({id: producto.id, ...producto.data() })
           
        })
        
        let completos = limpios.filter((producto)=>{
            return producto})
            

        limpios = limpios.filter((producto)=>{
            return producto.idCategoria === idCategoria
        } )

        
        if (idCategoria){
            setItems(limpios)
            setLoading(false)

        }else{
            setItems(completos)
            setLoading(false)
            
        }
        
        
        })
        


    },[idCategoria])

     
            
    
    

    if(loading){
        return <Loader />
    }else{

   

    return(
        <div className='ItemListContainer'>

           
                <ItemList productos={items}/>
                
        </div>
            
       
    )}
}

export default ItemListContainer

