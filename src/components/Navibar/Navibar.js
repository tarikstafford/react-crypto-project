import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import './Navibar.scss';

const Navibar = () => {
    return (
        <>
  <Navbar className="dusty-orange">
    <Container>
    <Navbar.Brand href="#home" className="navbar-light navbar-brand">MAPLE</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#merchants" className="navbar-light navbar-nav nav-link">Merchants</Nav.Link>
      <Nav.Link href="#about" className="navbar-light navbar-nav nav-link">About</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#connect" className="navbar-light navbar-nav nav-link connect">Connect</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    );
};
export default Navibar;