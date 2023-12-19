import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Footer() {
  const language = useSelector((state) => state.languages.currentLanguage);
  const languagePack = {
    ru: { logo: "/artlogo.png" },
    en: { logo: "/artLogoEng.png" },
    tj: { logo: "/artlogoTaj.png" },
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary footerDiv">
        <div className="footerDivBg"></div>
        <Container className="d-flex justify-content-between px-5">
          <Row className="w-100">
            <Col xs={12} className="row">
              <Col xs={6}>
                <h4>adress:</h4>
                <p>brbrbr st. 12</p>
                <p>734000 Dushanbe</p>
                <p>Tajikistan</p>
              </Col>
              <Col xs={6} className="grafikDiv">
                <h4>grdafik</h4>
                <p>mn 10:00-11:00</p>
                <p>mn 10:00-11:00</p>
                <p>mn 10:00-11:00</p>
                <p>mn 10:00-11:00</p>
                <p>mn 10:00-11:00</p>
                <p>mn 10:00-11:00</p>
                <p>mn 10:00-11:00</p>
              </Col>
            </Col>
            <Col xs={12} className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src={languagePack[language].logo}
                  alt=""
                  className="footerLogo"
                />
                <p className="ms-3 mt-3">ART 2023(c)</p>
              </div>
              <div className="d-flex align-items-center">
                <h5>Follow Us: </h5>{" "}
                <Nav.Link
                  className="nav-link mx-3"
                  href="https://www.instagram.com/art__tajikistan/"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png"
                    alt=""
                    className="footerSocialLogo"
                  />
                </Nav.Link>
                <Nav.Link
                  className="nav-link mx-3"
                  href="https://www.facebook.com/arip.tjk"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                    alt=""
                    className="footerSocialLogo"
                  />
                </Nav.Link>
                <Nav.Link
                  className="nav-link mx-3"
                  href="https://www.linkedin.com"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                    alt=""
                    className="footerSocialLogo"
                  />
                </Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
