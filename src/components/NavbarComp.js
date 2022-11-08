import React, { useState } from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="warnanav" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="fw-bolder text-white">Leraf015.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" variant="white" onClick={handleShow} />
          <Navbar.Offcanvas show={show} onHide={handleClose} id="offcannav">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <span className="fw-bolder fs-1 text-white">Menu</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
