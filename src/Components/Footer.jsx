import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h2>text</h2>
          </Col>
          <Col xs={12} md={6}></Col>
        </Row>
      </Container>
      <Navbar expand="lg" className="bg-body-tertiary footerDiv">
        <Container className="d-flex justify-content-between px-5">
          <div className="d-flex align-items-center">
            <img src="/artlogo.png" alt="" className="footerLogo" />
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
            <Nav.Link className="nav-link mx-3" href="https://www.linkedin.com">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                alt=""
                className="footerSocialLogo"
              />
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
