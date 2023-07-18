import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselComponent() {
  return (
    <Carousel className="carouselMain">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blog.trello.com/hubfs/download%20%2842%29.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.chakray.com/wp-content/uploads/2016/12/SOAP-vs-REST-1.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ivypanda.com/blog/wp-content/uploads/2021/03/serene-black-man-resting-park-listening-music.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
