import React from "react";
import Numbers from "./Numbers";
import { Col, Container, Row } from "react-bootstrap";

export default function AboutUs() {
  return (
    <div>
      <Container className="my-4">
        <Row>
          <Col xs={6} className="d-flex justify-content-center">
            <img src="/artlogo.png" alt="logo" className="aboutUsPics" />
          </Col>
          <Col xs={6}>
            {" "}
            <h2>We Are ART</h2>{" "}
            <p>
              Tajik Association of Restaurators (ART) is a something with
              something i need really inetersting text to fill it up and bla bla
              bla
            </p>
          </Col>
        </Row>
      </Container>
      <Numbers />
    </div>
  );
}
