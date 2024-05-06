import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


import { CartWidget } from "./CartWidget";


export const NavBar = () =>{
    return (
        <>
        <Navbar bg="dark" className='container-fluid' data-bs-theme="dark">
        <Container>
          <Nav.Link className='title-page' to="/" as={NavLink}>OesteShop
          </Nav.Link>
          <Nav className="me-auto">
            <Nav.Link to="/category/remeras" as={NavLink} >
              Remeras</Nav.Link>
            <Nav.Link to="/category/zapatillas" as={NavLink} >
              Zapatillas</Nav.Link>
            <Nav.Link to="/category/Outlet" as={NavLink}>
              Outlet</Nav.Link> 
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
    )
}