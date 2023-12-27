/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import JoinArtModal from "./JoinArtModal";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./LoginModal";
import UserOffcanvas from "./UserOffcanvas";
import { switchLanguageAction } from "../Redux/actions";

export default function NavBar() {
  const location = useLocation();
  const languagePack = {
    ru: {
      logo: "/artlogo.png",
      home: "Начало",
      aboutUs: "О Нас",
      ourPartners: "Наши Партнеры",
      ourMembers: "Наши Члены",
      contactUs: "Контакты",
      backToTop: "Вверх",
    },
    en: {
      logo: "/artLogoEng.png",
      home: "Home",
      aboutUs: "About Us",
      ourPartners: "Our Partners",
      ourMembers: "Our Members",
      contactUs: "Contact Us",
      backToTop: "Back to Top",
    },
    tj: {
      logo: "/artlogoTaj.png",
      home: "Аввал",
      aboutUs: "Дар Бораи Мо",
      ourPartners: "Партнерхои Мо",
      ourMembers: "Аъзоёни Мо",
      contactUs: "Тамос",
      backToTop: "Ба Боло",
    },
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {languagePack[language].backToTop}
    </Tooltip>
  );
  const [language, setLanguage] = useState("ru");
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [navbarClass, setNavbarClass] = useState("navbar-top");

  const checkPosition = () => {
    window.onscroll = () => {
      if (window.scrollY === 0) {
        setNavbarClass("navbar-top");

        document.querySelector("#basic-navbar-nav").classList.remove("bottom");
      } else {
        setNavbarClass("navbar");

        document.querySelector("#basic-navbar-nav").classList.add("bottom");
      }
    };

    return () => (window.onscroll = null);
  };

  useEffect(() => {
    checkPosition();
  }, []);
  useEffect(() => {
    dispatch(switchLanguageAction(language));
  }, [language]);
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={navbarClass}
      collapseOnSelect={true}
    >
      <Container className="navbar-container">
        <Link to="/" className="me-5">
          <img
            src={languagePack[language].logo}
            alt="logo"
            className="navBarLogo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={scrollToTop} />
        <Navbar.Collapse id="basic-navbar-nav">
          {location.pathname === "/" ? (
            <Nav className="me-auto">
              <Nav.Link className="nav-link" href="#top">
                {languagePack[language].home}
              </Nav.Link>
              <Nav.Link className="nav-link" href="#aboutUs">
                {languagePack[language].aboutUs}
              </Nav.Link>
              <Nav.Link className="nav-link" href="#partners">
                {languagePack[language].ourPartners}
              </Nav.Link>
              {/* <Nav.Link className="nav-link" href="#docs">
              Documentation
            </Nav.Link> */}
              {/* <Nav.Link className="nav-link" href="#members">
                {languagePack[language].ourMembers}
              </Nav.Link> */}
              <JoinArtModal />{" "}
            </Nav>
          ) : (
            <>
              <Nav className="me-auto">
                <Link className="nav-link" to="/">
                  {languagePack[language].home}
                </Link>
                <JoinArtModal />{" "}
              </Nav>
            </>
          )}
          <Row className="navbarRow">
            <Col className="contactUsButton">
              {" "}
              <NavDropdown
                title={languagePack[language].contactUs}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  href="tel:+992888884900"
                  className="contactItem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  +992888884900
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="mailto: association.tjk@gmail.com"
                  className="contactItem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  association.tjk@gmail.com
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col className="languageDropdown">
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
            </Col>
          </Row>
          {user && user.user && user.user.user ? (
            <UserOffcanvas user={user.user.user} />
          ) : (
            <LoginModal />
          )}
        </Navbar.Collapse>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button className="topButton">
            <svg
              onClick={() => scrollToTop()}
              lable={languagePack[language].backToTop}
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
      </Container>
    </Navbar>
  );
}
