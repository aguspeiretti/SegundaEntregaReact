
import './App.css'
import CartWidget from './components/CartWidget'
import Menu from './components/navBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount  from './components/ItemCount'



function App() {
 

  return (
    <div className="App">

       <Menu />
       <CartWidget/>
       <ItemListContainer />
       <ItemCount 
       inicial={1}
        stock={10}
       />
       



    </div>
  )
}

export default App
