import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget.js';



  function NavBar(props) {
    return (
      <>
        <Navbar bg="primary" variant="dark" >
          <Container direction="horizontal">
            <Navbar.Brand href="#home">Camelot Libros</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#libros">Libros</Nav.Link>
            <Nav.Link href="#autores">Autores</Nav.Link>
            </Nav>
            {props.children}
          </Container> 
        </Navbar>
        
       </>
    );
  }
  
  export default NavBar;
  