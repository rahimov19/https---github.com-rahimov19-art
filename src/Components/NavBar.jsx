import React, { useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [language, setLanguage] = useState("en");
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
      <Container className="navbar-container">
        <Navbar.Brand href="#home">ART</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/aboutUs">
              About Us
            </Link>
            <Link className="nav-link" to="/documentations">
              Documentation
            </Link>
          </Nav>
          <div className="contactUsButton">
            {" "}
            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                +992888885551
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="languageDropdown">
            {" "}
            {language === "en" ? (
              <NavDropdown title="EN" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => setLanguage("ru")}
                >
                  RU{" "}
                  <img
                    className="flag"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png"
                    alt=""
                  />
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => setLanguage("tj")}
                >
                  TJ{" "}
                  <img
                    className="flag"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Tajikistan.PNG"
                    alt=""
                  />
                </NavDropdown.Item>
              </NavDropdown>
            ) : language === "ru" ? (
              <NavDropdown title="RU" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => setLanguage("en")}
                >
                  EN{" "}
                  <img
                    className="flag"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg/2560px-Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg.png"
                    alt=""
                  />
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => setLanguage("tj")}
                >
                  TJ{" "}
                  <img
                    className="flag"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Tajikistan.PNG"
                    alt=""
                  />
                </NavDropdown.Item>
              </NavDropdown>
            ) : language === "tj" ? (
              <NavDropdown title="TJ" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => setLanguage("en")}
                >
                  EN{" "}
                  <img
                    className="flag"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg/2560px-Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg.png"
                    alt=""
                  />
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => setLanguage("ru")}
                >
                  RU
                  <img
                    className="flag"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png"
                    alt=""
                  />
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <></>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
