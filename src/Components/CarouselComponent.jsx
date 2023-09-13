/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function CarouselComponent() {
  const language = useSelector((state) => state.languages.currentLanguage);
  const [banners, setBanners] = useState([]);
  const [fetchedBanners, setFetchedBanners] = useState([]);
  const fetchBanners = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/news/banners`
      );
      if (response.ok) {
        let data = await response.json();
        setFetchedBanners(data);
        let ban = data.filter((b) => b.language === language);
        setBanners(ban);
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
  useEffect(() => {
    let ban = fetchedBanners.filter((b) => b.language === language);
    setBanners(ban);
  }, [language]);

  return (
    <Carousel className="carouselMain" controls={false} fade>
      {banners ? (
        banners.map((b) => (
          <Carousel.Item key={b._id}>
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
