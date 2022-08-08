
import Item from '../item/Item'
import "./ItemList.css"

const ItemList = ({productos}) => {
    
  

   

  return (
    <div className='contenedorItemList'>
<div className='ItemList'>
    
    {
        productos.map((producto)=>{
            return(
               <Item producto={producto} key={producto.id} /> 
            )
            
        })
    }

  </div>
    </div>
  
          

  )
}

export default ItemList
