
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import CardContainer from './components/CardContainer/CardContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'






function App() {



  return (
    <div className="App">

       <NavBar />
       <ItemListContainer />
        <CardContainer />
       <ItemDetailContainer />
       



    </div>
  )
}

export default App
