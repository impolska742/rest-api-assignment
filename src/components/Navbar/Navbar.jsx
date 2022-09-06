import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { deleteUserDataFromMemory } from "../../utils/session-storage";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const logout = () => {
    deleteUserDataFromMemory();
    navigate("/login");
  };
  return (
    <Navbar style={{ marginBottom: "40px" }} bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">RESTIFY</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
