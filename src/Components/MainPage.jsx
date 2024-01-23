import React from "react";
import { Container } from "react-bootstrap";
import CarouselComponent from "./CarouselComponent";
import News from "./News";
import AboutUs from "./AboutUs";

import PartnersCarousel from "./PartnersCarousel";
import EmailNews from "./EmailNews";
import { useSelector } from "react-redux";
import Courses from "./Courses";

export default function MainPage() {
  const language = useSelector((state) => state.languages.currentLanguage);
  const languagePack = {
    ru: {
      welcome: "Добро пожаловать на сайт Ассоциации Рестораторов Таджинистана",
    },
    en: {
      welcome:
        "Welcome to the webpage of Association of Restaurateurs of Tajikistan",
    },
    tj: {
      welcome: "Хуш Омадед ба сайти Ассотсиатсияи Тарабхонаҳои Тоҷикистон",
    },
  };
  return (
    <Container className="my-4">
      <h1 className="h1Main">{languagePack[language].welcome}</h1>
      <CarouselComponent />
      <News />
      <AboutUs />
      <Courses />
      <PartnersCarousel />
      {/* <Docs /> */}
      <EmailNews />
    </Container>
  );
}
