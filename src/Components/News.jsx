/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Card, CardGroup, Container, Row } from "react-bootstrap";
import { getPostsAction } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { format, parseJSON } from "date-fns";
import { Link } from "react-router-dom";

export default function News() {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.posts.posts);
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
    fetchData();
  }, []);
  return (
    <Container className="my-5">
      <h2 className="newsH2">Some News</h2>
      <Row>
        <CardGroup>
          {news.map((n) => (
            <Card className="newsCard" key={n.id}>
              <Link to={`/news/${n._id}`}>
                {" "}
                <Card.Img variant="top" src={n.image} />
              </Link>
              <Card.Body>
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
          ))}
        </CardGroup>
      </Row>
    </Container>
  );
}
