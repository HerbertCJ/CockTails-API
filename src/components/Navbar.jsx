import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarBt() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'><span className='logo-text'>CockTail-API</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/' eventKey='1'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about' eventKey='2'>About</Nav.Link>            
          </Nav>         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBt;