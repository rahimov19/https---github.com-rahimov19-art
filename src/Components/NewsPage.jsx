/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import News from "./News";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

export default function NewsPage() {
  const { id } = useParams();
  const news = useSelector((state) => state.posts.posts);
  const [activeNews, setActiveNews] = useState({});

  useEffect(() => {
    const filteredNews = news.filter((n) => n._id === id);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setActiveNews(filteredNews[0]);
    console.log(filteredNews[0]);
  }, [id]);
  return (
    <>
      <Container className="d-flex flex-column justify-content-between my-4">
        <Row className="newsRow">
          <Col xs={12} md={6}>
            {activeNews.video ? (
              <ReactPlayer url={activeNews.video} />
            ) : activeNews.images ? (
              <img src={activeNews.images[0]} alt="" className="newsImg" />
            ) : (
              <></>
            )}
          </Col>
          <Col xs={12} md={6}>
            <h3>{activeNews.name}</h3>
            <p>{activeNews.description}</p>
          </Col>
        </Row>
        <Row className="my-3">
          {activeNews.images ? (
            activeNews.images.map((i) => (
              <Col xs={12} md={6} lg={3}>
                <a href={i}>
                  {" "}
                  <img src={i} alt="images" className="newsImages" />
                </a>
              </Col>
            ))
          ) : (
            <></>
          )}
        </Row>
        <Row>
          <News />
        </Row>
      </Container>
    </>
  );
}
