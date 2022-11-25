import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget.js';



  function NavBar() {
    return (
      <>
        <Navbar bg="primary" variant="dark" >
        <Container direction="horizontal">
          <Navbar.Brand href="#home">Camelot Libros</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Novedades</Nav.Link>
            <Nav.Link href="#pricing">Más vendidos</Nav.Link>
          </Nav>
          <div>
            <CartWidget /> 
          </div>
        </Container>
      </Navbar>
       </>
    );
  }
  
  export default NavBar;
  