import React from "react";
import { Card, CardGroup, Container, Row } from "react-bootstrap";

const news = [
  {
    img: "https://res.cloudinary.com/iubh/image/upload/q_auto:eco/f_auto,w_iw,c_fill,g_face,ar_4:3/v1638901044/07%20-%20Pages/Unit%20Bilder/Duales%20Studium/Hero/2112_Hero_Blog_und_News.jpg",
    title: "Big News",
    text: "Some news just to fill in some text, somehow lorem is not working",
  },
  {
    img: "https://www.newsaktuell.com/site-nade/assets/files/1/startseite-newsletter.jpg",
    title: "Small News",
    text: "Some news just to fill in some text, somehow lorem is not working",
  },
  {
    img: "https://www.lmz-bw.de/fileadmin/_processed_/1/3/csm_zeitungsjunge-fake-news-GettyImages-893110848-RichVintage-72dpi_2713e7f825.jpg",
    title: "Fake News",
    text: "Some news just to fill in some text, somehow lorem is not working",
  },
  {
    img: "https://m.faz.net/media0/ppmedia/aktuell/4143837080/1.8722454/mmobject-still_full/hq/wer-behaelt-in-der-aktuellen.jpg",
    title: "Medium News",
    text: "Some news just to fill in some text, somehow lorem is not working",
  },
];

export default function News() {
  return (
    <Container className="my-5">
      <h2 className="newsH2">Some News</h2>
      <Row>
        <CardGroup>
          {news.map((n) => (
            <Card className="newsCard">
              <Card.Img variant="top" src={n.img} />
              <Card.Body>
                <Card.Title>{n.title}</Card.Title>
                <Card.Text>{n.text}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </Row>
    </Container>
  );
}
