import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Docs() {
  const [links, setLinks] = useState([]);
  const fetchLinks = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/news/docs`);
      if (response.ok) {
        let data = await response.json();
        setLinks(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <Container>
      <h2 className="docsH2">Our Documentations</h2>
      <Row className="docsContainter">
        {links ? (
          links.map((l) => (
            <Col xl={4} lg={6} sm={12} className="docsCol" key={l.id}>
              <h3 className="docsTitle">{l.title}</h3>
              <a href={l.image}>
                <img src={l.image} alt="doc" className="docImg" />
              </a>
            </Col>
          ))
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
}
