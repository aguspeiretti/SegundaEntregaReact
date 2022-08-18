import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {collection, addDoc , getFirestore } from "firebase/firestore"
import "./checkout.css"



const Checkout = () => {
    const cartContext = useContext(CartContext)
    const{cart} = cartContext
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [apellido , setApellido] = useState('')
    const [direccion , setDireccion] = useState('')
    const [ tel  , setTel] = useState('')
    const [idCompra , setIdCompra] = useState('')
   

    const terminarCompra = () =>{
        
        const order = {buyer:{name,apellido,direccion,email},items:{cart}}
        
        const db = getFirestore()
        const refcollectionOrders = collection(db , "orders" ) //referencia al documento
        addDoc(refcollectionOrders , order).then((res) => {
            setIdCompra(res.id)})
        }
    

  return (
    <div className='formContainer'>
        <h2>Formulario de compra</h2>
        <form className='form'>
            <div className='form-group'>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' className='form-control' id='nombre' placeholder='Nombre' value={name}onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='apellido'>Apellido</label>
                <input type='text' className='form-control' id='apellido' placeholder='Apellido'  value={apellido}onChange={(e)=>setApellido(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='direccion'>Direccion</label>
                <input type='text' className='form-control' id='direccion' placeholder='Direccion' value={direccion} onChange={(e)=>setDireccion(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='Telefono'>Telefono</label>
                <input type='text' className='form-control' id='ciudad' placeholder='Ciudad' value={tel}onChange={(e)=>setTel(e.target.value)} /> 
            </div>
            <div className='form-group'>
                <label htmlFor='email'>E-mail</label>
                <input type='email' className='form-control' id='email' placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
               
        
    </form>
    <button onClick={terminarCompra}>Terminar Compra</button>
    <p>id de tu compra: {idCompra} </p>
    </div>
  )
}

export default Checkout