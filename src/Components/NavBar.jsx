import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import JoinArtModal from "./JoinArtModal";
import { useSelector } from "react-redux";
import LoginModal from "./LoginModal";
import UserOffcanvas from "./UserOffcanvas";

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Back to Top
    </Tooltip>
  );
  const [language, setLanguage] = useState("en");
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [navbarClass, setNavbarClass] = useState("navbar-top");
  useEffect(() => {
    window.onscroll = () => {
      window.scrollY === 0
        ? setNavbarClass("navbar-top")
        : setNavbarClass("navbar");
    };
    return () => (window.onscroll = null);
  }, []);
  return (
    <Navbar expand="lg" sticky="top" className={navbarClass}>
      <Container className="navbar-container">
        <Navbar.Brand href="#home">
          <img src="/artlogo.png" alt="logo" className="navBarLogo" />
        </Navbar.Brand>
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
            <JoinArtModal />
          </Nav>
          <div className="contactUsButton">
            {" "}
            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="tel:+992888885551">
                +992888885551
              </NavDropdown.Item>
              <NavDropdown.Item href="mailto: email@art.tj">
                email@art.tj
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="languageDropdown">
            {" "}
            {language === "en" ? (
              <NavDropdown title="EN" id="basic-nav-dropdown">
                <NavDropdown.Item href="#" onClick={() => setLanguage("ru")}>
                  <img
                    className="flag"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png"
                    alt=""
                  />
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => setLanguage("tj")}>
                  <img
                    className="flag"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Tajikistan.PNG"
                    alt=""
                  />
                </NavDropdown.Item>
              </NavDropdown>
            ) : language === "ru" ? (
              <NavDropdown title="RU" id="basic-nav-dropdown">
                <NavDropdown.Item href="#" onClick={() => setLanguage("en")}>
                  <img
                    className="flag"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg/2560px-Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg.png"
                    alt=""
                  />
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => setLanguage("tj")}>
                  <img
                    className="flag"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Tajikistan.PNG"
                    alt=""
                  />
                </NavDropdown.Item>
              </NavDropdown>
            ) : language === "tj" ? (
              <NavDropdown title="TJ" id="basic-nav-dropdown">
                <NavDropdown.Item href="#" onClick={() => setLanguage("en")}>
                  <img
                    className="flag"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg/2560px-Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg.png"
                    alt=""
                  />
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => setLanguage("ru")}>
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
        {user && user.user && user.user.user ? (
          <UserOffcanvas user={user.user.user} />
        ) : (
          <LoginModal />
        )}
      </Container>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button className="topButton">
          <svg
            onClick={() => scrollToTop()}
            lable="Back to Top"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-arrow-up-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
          </svg>
        </Button>
      </OverlayTrigger>
    </Navbar>
  );
}
