import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Footer() {
  const language = useSelector((state) => state.languages.currentLanguage);
  const languagePack = {
    ru: {
      logo: "/artlogo.png",
      address: "Адрес",
      street: "ул. С. Айни 84",
      city: "734005 Душанбе",
      taj: "Таджикистан",
      schedule: "Рабочие часы:",
      days: "Пн-Пт 9:00-18:00",
      art2023: "АРТ 2023(с)",
      follow: "Подпишитесь на нас:",
    },
    en: {
      logo: "/artLogoEng.png",
      address: "Address",
      street: "S. Ayni st. 84",
      city: "734005 Dushanbe",
      taj: "Tajikistan",
      schedule: "Working Schedule",
      days: "Monday-Friday 9:00-18:00",
      art2023: "ART 2023(c)",
      follow: "Follow Us",
    },
    tj: {
      logo: "/artlogoTaj.png",
      address: "Суроға",
      street: "к. С. Айни 84",
      city: "734005 Душанбе",
      taj: "Точикистон",
      schedule: "Ҷадвали кор",
      days: "Душанбе-Ҷумъа 9:00-18:00",
      art2023: "АТТ 2023 (с)",
      follow: "Моро пайгирӣ намоед",
    },
  };
  return (
    <>
      <Navbar expand="lg" className="footerDiv">
        <div className="footerDivBg"></div>
        <div className="footerDivBg2"></div>

        <Container className="d-flex justify-content-between px-5">
          <Row className="w-100">
            <Col xs={12} className="row">
              <Col xs={6}>
                <h4>{languagePack[language].address}</h4>
                <p>{languagePack[language].street}</p>
                <p>{languagePack[language].city}</p>
                <p>{languagePack[language].taj}</p>
              </Col>
              <Col xs={6} className="grafikDiv">
                <h4>{languagePack[language].schedule}</h4>
                <p>{languagePack[language].days}</p>
              </Col>
            </Col>
            <Col xs={12} className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src={languagePack[language].logo}
                  alt=""
                  className="footerLogo"
                />
                <p className="ms-3 mt-3">{languagePack[language].art2023}</p>
              </div>
              <div className="d-flex align-items-center">
                <h5>{languagePack[language].follow} </h5>{" "}
                <Nav.Link
                  className="nav-link mx-3"
                  href="https://www.instagram.com/art__tajikistan/"
                >
                  <img src="/ig.png" alt="" className="footerSocialLogo" />
                </Nav.Link>
                <Nav.Link
                  className="nav-link mx-3"
                  href="https://www.facebook.com/arip.tjk"
                >
                  <img src="/fb.png" alt="" className="footerSocialLogo" />
                </Nav.Link>
                <Nav.Link
                  className="nav-link mx-3"
                  href="https://www.linkedin.com"
                >
                  <img src="/li.png" alt="" className="footerSocialLogo" />
                </Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
