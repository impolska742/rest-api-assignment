import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userLogoutAction } from "../../actions/userActions";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userLogoutAction(navigate));
  };
  return (
    <Navbar style={{ marginBottom: "40px" }} bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">RESTIFY</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/add">Add Post</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
