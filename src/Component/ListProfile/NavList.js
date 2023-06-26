import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/img/alba-logo.svg";
import { Link } from "react-router-dom";

export default function NavList() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="shadow-sm fw-bold"
        bg="light"
        data-bs-theme="light"
      >
        <Container>
          <Navbar.Brand href="/list">
            <img src={logo} className="w-75 mt-0" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#deets">
                <div className="d-grid  gap-2">
                  <Link
                    to={"/"}
                    className="rounded-pill btn btn-warning px-4 py-2"
                  >
                    Log Out
                  </Link>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
