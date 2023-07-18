import React from "react";
import { Container } from "react-bootstrap";
import CarouselComponent from "./CarouselComponent";
import News from "./News";

export default function MainPage() {
  return (
    <Container className="my-4">
      <h1 className="h1Main">Welcome to ART</h1>
      <CarouselComponent />
      <News />
    </Container>
  );
}
