import React from "react";
import { Container } from "react-bootstrap";

export default function Numbers() {
  return (
    <Container className="numbersContainer">
      <h2>Our Association in Numbers:</h2>
      <p>
        Our Association is first and leading in Tajikistan. During our time we
        managed:
      </p>
      <div className="numbersDiv">
        <div className="stats-block__item">
          <h3>$100 Million</h3>
          <p>Our members made sales of 100$ millions in last 100 years</p>
        </div>
        <div className="stats-block__item">
          <h3>$100 Million</h3>
          <p>Our members made sales of 100$ millions in last 100 years</p>
        </div>
        <div className="stats-block__item">
          <h3>$100 Million</h3>
          <p>Our members made sales of 100$ millions in last 100 years</p>
        </div>
        <div className="stats-block__item">
          <h3>$100 Million</h3>
          <p>Our members made sales of 100$ millions in last 100 years</p>
        </div>
      </div>
    </Container>
  );
}
