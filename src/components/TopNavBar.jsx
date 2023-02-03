import Nav from 'react-bootstrap/Nav';
import React from 'react';

/**
 * @return {jsx} top nav bar
 */
export default function TopNavBar() {
  return (
    <Nav justify variant='tabs' defaultActiveKey='/blogs'>
      <Nav.Item>
        <Nav.Link href='/'>Blogs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/profile'>Profile</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
