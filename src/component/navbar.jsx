import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../styles/navbar.css";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Ambil path halaman yang sedang dikunjungi

  return (
    <Navbar expand="md" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          RefiSession.
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={menuOpen ? "show" : ""}
        >
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio"
              className={location.pathname === "/portfolio" ? "active" : ""}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/certification"
              className={location.pathname === "/certification" ? "active" : ""}
            >
              Certifications
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
