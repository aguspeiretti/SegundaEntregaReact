
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './context/CartContext.jsx';
import Loader from './components/loader/Loader';
import Checkout from './components/checkout/Checkout';



function App() {


  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>    
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idProducto' element={<ItemDetailContainer />} />
            <Route path='/Checkout' element={<Checkout/>} />
            <Route path='*' element={<p>404</p>} />    
          </Routes>      
        </BrowserRouter>
      </CartProvider>    
    </div>
  )
}

export default App
