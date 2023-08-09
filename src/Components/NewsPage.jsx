import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import News from "./News";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NewsPage() {
  const { id } = useParams();
  const news = useSelector((state) => state.posts.posts);
  const [activeNews, setActiveNews] = useState({});

  useEffect(() => {
    const filteredNews = news.filter((n) => n._id === id);

    setActiveNews(filteredNews[0]);
  }, [id]);
  return (
    <>
      <Container className="d-flex flex-column justify-content-between my-4">
        <Row className="newsRow">
          <Col xs={6}>
            <img src={activeNews.image} alt="" className="newsImg" />
          </Col>
          <Col xs={6}>
            <h3>{activeNews.name}</h3>
            <p>{activeNews.description}</p>
          </Col>
        </Row>
        <Row>
          <News />
        </Row>
      </Container>
    </>
  );
}
