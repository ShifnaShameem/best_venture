import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>

          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
            <Navbar.Brand href="#home"><i className="fa-solid fa-jet-fighter fa-beat "></i> Best Ventures</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart"> <button style={{ borderRadius: '10px' }}>Cart <i className="fa-solid fa-cart-shopping fa-1x" style={{ color: "#00040a" }}></i></button></Nav.Link>
              <Nav.Link href="/whishlist"><button style={{ borderRadius: '10px' }}>Whishlist <i className="fa-solid fa-heart fa-1x" style={{ color: "#ce1c1c" }}></i></button></Nav.Link>
              <Nav.Link href=""><button style={{ borderRadius: '10px' }}>Logout </button></Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header


