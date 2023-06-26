import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import logo from "../assets/img/alba-logo.svg";
import whatsapp from "../assets/img/whatsapp.svg";
import { Link } from "react-router-dom";

export default function Navb() {
  const navigation = ["Service ", "About ", "Portfolio ", "Blog ", "Career "];

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="shadow-sm fw-bold"
        bg="light"
        data-bs-theme="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="w-75 mt-0" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              {navigation.map((item, index) => (
                <Nav.Link className="pe-5 nav-shadow" key={index} href="/">
                  {item}
                </Nav.Link>
              ))}
            </Nav>
            <Nav>
              <Button variant="warning" className="rounded-pill px-4 py-2 me-2">
                Contact Us
              </Button>
              <Link
                to={"/login"}
                className="rounded-pill px-4 py-2 me-2 btn btn-primary"
              >
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar fixed="bottom" className="w-25 ms-auto bg-transparent pb-4">
        <Container>
          <Navbar.Brand className="mx-auto" href="#home">
            <img
              src={whatsapp}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
