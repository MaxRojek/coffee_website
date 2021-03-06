import React, { useState } from "react";
import "./Navbar.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavbarText } from "reactstrap";

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar fixed="top" light expand="md">
        <NavbarBrand href="/" style={{ fontSize: "30px" }}>
          {/* <img src={require("../img/bonkava_black.png")} width="10%" height="20px" alt="" />{" "} */}
          Bonkava
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>

          <NavLink href="#about" className="navbar-item">
            O nas
          </NavLink>

          <NavLink href="#contact" className="navbar-item">
            Kontakt
          </NavLink>

          <NavLink href="#localizations" className="navbar-item">
            Lokalizacje
          </NavLink>
          <NavLink href="#localizations" className="navbar-item">
            Gdzie kupić ?
          </NavLink>

          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Example;
