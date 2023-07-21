import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary footerDiv">
      <Container className="d-flex justify-content-between px-5">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
            alt=""
            className="footerLogo"
          />
        </div>
        <div className="d-flex">
          {" "}
          <Link className="nav-link mx-3" to="/">
            Home
          </Link>
          <Link className="nav-link mx-3" to="/aboutUs">
            About Us
          </Link>
          <Link className="nav-link mx-3" to="/documentations">
            Documentation
          </Link>
        </div>
        <div>ART 2023(c)</div>
      </Container>
    </Navbar>
  );
}
