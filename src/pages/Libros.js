import React, {useState, useEffect} from 'react';
import {traerProd} from '../components/Datos';
import {Link} from 'react-router-dom';

const Libros = () => {
    const [productos, setProductos] = useState([]);
    useEffect( () => {
    
     traerProd().then(productos => {
        
        const libro = productos.map(producto => 
            <div className="card" key={producto.id}>
                <img src={producto.imagen}/>
                <div>
                    <h5 className="card-title">{producto.titulo}</h5>
                    <p className="card-text">{producto.autor}</p>
                    <p className="card-text">$ {producto.precio}</p>
                    <button><Link to={`/producto/ ${producto.id}`}>Ver más</Link></button>
                </div>
            </div>)
        
        
        
        setProductos(libro)
        })
   
}, []);
    return (
        <div>
            {productos}
        </div>
    );
}

export default Libros;