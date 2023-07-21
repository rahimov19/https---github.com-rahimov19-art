import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Docs() {
  const links = [
    "https://media.gcflearnfree.org/content/596658ce8444e81d1ca6cde0_07_12_2017/businessformat_image2.jpg",
    "https://aclanthology.org/thumb/C18-1014.jpg",
    "https://data2.unhcr.org/images/documents/big_aa2c81585e808b644ef70587136c23601d33a2e9.jpg",
    "https://classhall.com/wp-content/uploads/2018/06/office-documents-invoice.jpg",
    "https://static.wikia.nocookie.net/scpcb_gamepedia/images/6/61/Doc008.jpg/revision/latest?cb=20131014012706",
    "https://classhall.com/wp-content/uploads/2018/06/office-documents-invoice.jpg",
    "https://static.wikia.nocookie.net/scpcb_gamepedia/images/6/61/Doc008.jpg/revision/latest?cb=20131014012706",
  ];
  return (
    <Container>
      <Row>
        {links.map((l) => (
          <Col xl={4} lg={6} sm={12}>
            <a href={l}>
              <img src={l} alt="doc" className="docImg" />
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
