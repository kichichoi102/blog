import Nav from 'react-bootstrap/Nav';
import React from 'react';

/**
 * @return {jsx} top nav bar
 */
export default function TopNavBar() {
  return (
    <Nav
      justify
      variant="tabs"
      defaultActiveKey="/home"
    >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/blogs">Blogs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contacts">Contacts</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
