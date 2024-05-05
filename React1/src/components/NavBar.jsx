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
          <Navbar.Brand to="#home">OesteShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/remeras" as={NavLink} >
              Remeras</Nav.Link>
            <Nav.Link to="/category/zapatillas" as={NavLink} >
              Zapatillas</Nav.Link>
            <Nav.Link to="/category/premium" as={NavLink} >
              Niños</Nav.Link>
            <Nav.Link to="/category/Outlet" as={NavLink}>
              Outlet</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
    )
}