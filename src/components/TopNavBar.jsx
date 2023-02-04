import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';

/**
 * @return {jsx} top nav bar
 */
export function TopNavBar() {
  return (
    <Navbar key={false} bg='light' expand={false} className='mb-3'>
      <Container fluid>
        <Navbar.Brand href='#'>Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
        <Navbar.Offcanvas id={`offcanvasNavbar-expand-false`} aria-labelledby={`offcanvasNavbarLabel-expand-false`} placement='end' scroll={true} backdrop={false}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/profile'>View Profile</Nav.Link>
              <NavDropdown title='[Not Implemented] Settings' id={`offcanvasNavbarDropdown-expand-false`}>
                <NavDropdown.Item href='#action3'>[Not Implemented] Settings1</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>[Not Implemented] Settings2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>[Not Implemented] Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
