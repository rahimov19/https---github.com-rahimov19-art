import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function PartnersCarousel() {
  const language = useSelector((state) => state.languages.currentLanguage);
  const languagePack = {
    ru: { ourPartners: "Наши Партнеры" },
    en: { ourPartners: "Our Partners" },
    tj: { ourPartners: "Шарикони мо" },
  };
  return (
    <Container id="partners" className="my-4">
      <h2>{languagePack[language].ourPartners}</h2>
      <Row className="partnersRow">
        <Col className="partnersCol">
          <div>image</div>
        </Col>
        {/* <Col className="partnersCol">
          <div>image</div>
        </Col>
        <Col className="partnersCol">
          <div>image</div>
        </Col>
        <Col className="partnersCol">
          <div>image</div>
        </Col>
        <Col className="partnersCol">
          <div>image</div>
        </Col> */}
      </Row>
    </Container>
  );
}
