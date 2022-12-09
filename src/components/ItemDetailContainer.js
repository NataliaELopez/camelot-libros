  import React from 'react';

  const ItemDetailContainer = ({producto}) => {
      return (
          <>
            <div>
              <div className="col">
                <img src={`../img/${producto.imagen}`} alt="..." />
              </div>
                <div className="col">
              <div className="card-body">
                <h5 className="card-title">{producto.titulo}</h5>
                <p className="card-text">{producto.autor}</p>
                <p className="card-text">{producto.editorial}</p>
                <p className="card-text">{producto.precio}</p>
                <p className="card-text">{producto.isbn}</p>
              </div>
                </div>
            </div>
          </>
      );
  }
  
  export default ItemDetailContainer;