import { createContext, useState } from "react";
import Item from "../components/item/Item";

export  const CartContext = createContext(null)

const CartProvider = ({children})=>{

  const [cart , setCart] = useState([])


  const addToCart = (producto , cantidad)=>{
  

    if (cart.some(el => el.id === producto.id)){

      let index =cart.findIndex(el => el.id === producto.id)
      let prod=cart[index]
      prod.cantidad = prod.cantidad + cantidad
      
      const newCart = [...cart]
      newCart.splice(index, 1 , prod)

      setCart([...newCart])

      
    }else{
      let prod = {...producto , cantidad }
      setCart([...cart , prod])
    }

    
  }

  
  const deleteCartById = (id)=>{  
    let newCart = cart.filter(el => el.id !== id)
    setCart([...newCart])
}

  const deleteCart = () =>{
    setCart([])
  }

  const [showCart, setShowCart] = useState(false)

    const mostrarCart= () => {
        setShowCart( !showCart )
    }


  console.log(cart)
  console.log(CartContext)
  return(
    <CartContext.Provider value={{showCart, cart, setCart , addToCart ,deleteCart, deleteCartById, mostrarCart }}>


      {children}

    </CartContext.Provider>
  )
}
export default CartProvider