import React from "react";
import Numbers from "./Numbers";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function AboutUs() {
  const language = useSelector((state) => state.languages.currentLanguage);
  const languagePack = {
    ru: {
      logo: "/artlogo.png",
      aboutUsH2: "О Нас",
      weAreArt: "Мы Ассоциация Рестораторов Таджикистана",
      artArticle:
        "Ассоциация Рестораторов Таджикистана (АРТ), недавно созданная некоммерческая организация, нацелена на поддержку развития ресторанного бизнеса в Таджикистане. Официально зарегистрирована 31 августа 2020 г. ",
    },
    en: {
      logo: "/artLogoEng.png",
      aboutUsH2: "About Us",
      weAreArt: "We Are Association of Restaurateurs of Tajikistan",
      artArticle:
        "The Association of Restaurateurs of Tajikistan (ART), a newly established non-profit organization, aims to support the development of the restaurant business in Tajikistan. It was officially registered on August 31, 2020.",
    },
    tj: {
      logo: "/artlogoTaj.png",
      aboutUsH2: "Дар Бораи Мо",
      weAreArt: "Мо Ассотсиатсияи Тарабхонаҳои Тоҷикистон хастем",
      artArticle:
        "Ассотсиатсияи Тарабхонаҳои Тоҷикистон (АТТ), як созмони ғайритиҷоратии тозатаъсис, ҳадафи дастгирии рушди тиҷорати тарабхонаҳо дар Тоҷикистон аст. Он расман 31 августи соли 2020 ба қайд гирифта шудааст.",
    },
  };
  return (
    <div>
      <Container className="my-4" id="aboutUs">
        <Row>
          <h2 className="aboutUsh2">{languagePack[language].aboutUsH2}</h2>
          <Col md={6} xs={12} className="d-flex justify-content-center">
            <img
              src={languagePack[language].logo}
              alt="logo"
              className="aboutUsPics"
            />
          </Col>
          <Col md={6} xs={12} className="mt-4">
            {" "}
            <h2>{languagePack[language].weAreArt}</h2>{" "}
            <p>{languagePack[language].artArticle}</p>
          </Col>
        </Row>
      </Container>
      <Numbers />
    </div>
  );
}
