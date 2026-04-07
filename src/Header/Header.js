import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.css";
export default function Header({ search, setSearch }) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" exact activeClassName="active">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" activeClassName="active">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products" activeClassName="active">
                Products
              </Nav.Link>
            </Nav>
            <div className="ms-auto">
              <input
                className="form-control"
                type="text"
                placeholder="Search products...🔍"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
