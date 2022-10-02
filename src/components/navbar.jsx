import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Emoji from './emoji';
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <Navbar bg="danger" variant="dark">
      <Container>
        <Emoji symbol="🏦"/>
        <Link to="/" className="text-white text-decoration-none">Home</Link>
        <span className="ms-3"><Emoji symbol="📒"/></span>
        <Link to="/contacto" className="text-white text-decoration-none">Contacto</Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-white ms-3 text-decoration-none">
            Happy Cake
            <Emoji symbol="🍰"/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;