import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import AnnoucmentComp from "./AnnoucmentComp";
import { Link } from "react-router-dom";
const NavbarComp = () => {
  return (
    <>
      <AnnoucmentComp />
      <Navbar bg="white" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="fw-bolder">Leraf015.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " className="border-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/technology">
                <span className="linknav">Technology</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/software">
                <span className="linknav">Software</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/games">
                <span className="linknav">Games</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/movies">
                <span className="linknav">Movies</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
