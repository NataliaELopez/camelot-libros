import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './pages/Home';
import Libros from './pages/Libros';
import Autores from './pages/Autores';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar>
          <CartWidget/>
        </NavBar>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='libros' element={<Libros/>}/>
            <Route path='autores' element={<Autores/>}/>
          </Routes>     
      </BrowserRouter>
      <ItemListContainer />
      <ItemDetailContainer/> 
    </>
  );
}

export default App;
