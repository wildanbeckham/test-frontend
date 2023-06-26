import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/img/alba-logo.svg";

export default function NavAuth() {
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
          <Navbar.Brand className="mx-auto" href="/">
            <img src={logo} className="pb-2 w-75" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
