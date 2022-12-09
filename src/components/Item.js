
import React, {useState, useEffect} from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import { useParams } from 'react-router-dom';


const Item = () => {

  const [producto, setProducto] = useState([]);    
  const {id} = useParams()
  useEffect (()=>{
      fetch('../json/productos.json')
      .then( response => response.json())
      .then( productos =>{
        const producto1 = productos.find (producto => producto.id == id)
        setProducto(producto1)
      })
  },[])

    return (
        <>
        <div>
     
            <ItemDetailContainer producto={producto}/>

        </div>
      
        </>
    );
}

export default Item;