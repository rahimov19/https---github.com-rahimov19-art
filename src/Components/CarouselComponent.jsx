import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselComponent() {
  const [banners, setBanners] = useState([]);
  const fetchBanners = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/news/banners`
      );
      if (response.ok) {
        let data = await response.json();
        setBanners(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBanners();
  }, []);
  return (
    <Carousel className="carouselMain">
      {banners ? (
        banners.map((b) => (
          <Carousel.Item>
            <img className="d-block w-100" src={b.image} alt="First slide" />
            <Carousel.Caption>
              <h3>{b.title}</h3>
              <p>{b.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      ) : (
        <></>
      )}
    </Carousel>
  );
}
