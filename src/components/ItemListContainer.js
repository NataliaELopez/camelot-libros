
  function ItemListContainer() {
    let brand="Camelot Libros";
    return (
        <>
        
        <div className="container-md" style={{backgroundColor:'black', color:'white'}}>
  
          <h1 className="p-5 text-center">
            Bienvenido/a a {brand}!
          </h1>
        
          <h3 className="p-5 text-center">
            Aquí encontrará sus libros preferidos
          </h3>
          
        </div>
        
      </>
    );
  }
  
  export default ItemListContainer;