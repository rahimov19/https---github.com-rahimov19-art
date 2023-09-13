/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { getPostsAction } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { format, parseJSON } from "date-fns";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function News() {
  const language = useSelector((state) => state.languages.currentLanguage);
  const languagePack = {
    ru: { news: "Другие новости" },
    en: { news: "More News" },
    tj: { news: "Ахборхо" },
  };
  const dispatch = useDispatch();

  const stateNews = useSelector((state) => state.posts);
  const [news, setNews] = useState([]);
  const fetchData = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/news`);
      if (response.ok) {
        let data = await response.json();
        dispatch(getPostsAction(data));
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (stateNews.posts.length > 0) {
      setNews(stateNews.posts.filter((n) => n.language === language));
    }
  }, [language]);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container className="my-5 newsContainer">
      <h2 className="newsH2">{languagePack[language].news}</h2>
      <Row>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1920: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {news && news[0] ? (
            news.map((n) => (
              <SwiperSlide key={n._id}>
                <Card className="newsCard">
                  <Link to={`/news/${n._id}`}>
                    {" "}
                    <Card.Img variant="top" src={n.images[0]} />
                  </Link>
                  <Card.Body className="cardNewsBody">
                    <Link to={`/news/${n._id}`}>
                      <Card.Title>{n.name}</Card.Title>
                    </Link>
                    <Card.Text>{n.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      {format(parseJSON(n.createdAt), "MM/dd/yyyy pp")}
                    </small>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
            ))
          ) : (
            <></>
          )}
        </Swiper>
      </Row>
    </Container>
  );
}
