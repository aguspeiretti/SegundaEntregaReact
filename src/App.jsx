
import './App.css'
import CartWidget from './components/CartWidget'
import Menu from './components/navBar'
import ItemListContainer from './components/ItemListContainer'



function App() {
 

  return (
    <div className="App">

       <Menu />
       <CartWidget/>
       <ItemListContainer />
       



    </div>
  )
}

export default App
