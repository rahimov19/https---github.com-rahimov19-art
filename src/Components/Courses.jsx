import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Courses() {
  const language = useSelector((state) => state.languages.currentLanguage);
  const languagePack = {
    ru: {
      h4: "Ассоциация Рестораторов Таджикистана при поддержки Европейского союза проводит бесплатное обучение по 4 направлениям:",
      waiter: "Официант",
      cook: "Повар",
      barista: "Бариста",
      conditer: "Кондитер",
      join: "Записаться",
    },
    en: {
      h4: "The Association of Restaurateurs of Tajikistan with the support of the European Union organizes free training in 4 areas:",
      waiter: "Waiter",
      cook: "Cook",
      barista: "Barista",
      conditer: "Confectioner",
      join: "Sign up",
    },
    tj: {
      h4: "Ассотсиатсияи Тарабхонаҳои Тоҷикистон бо дастгирии Иттиҳоди Аврупо дар 4 самт омӯзиши ройгон мегузаронад:",
      waiter: "Пешхизмат",
      cook: "Ошпаз",
      barista: "Бариста",
      conditer: "Каннод",
      join: "Бақайдгирӣ",
    },
  };
  return (
    <Container className="coursesContainer" id="courses">
      <Row className="d-flex justify-content-center mx-5 mb-3">
        <h4 className="coursesH4">{languagePack[language].h4}</h4>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <img src="/barista.jpg" alt="barista" className="courseImg" />
          <p className="coursesP"> {languagePack[language].barista}</p>
        </Col>
        <Col xs={6} md={3}>
          <img src="/cook.jpg" alt="cook" className="courseImg" />
          <p className="coursesP"> {languagePack[language].cook} </p>
        </Col>
        <Col xs={6} md={3}>
          <img src="/confector.jpg" alt="confector" className="courseImg" />
          <p className="coursesP"> {languagePack[language].conditer} </p>
        </Col>
        <Col xs={6} md={3}>
          <img src="/waiter.jpg" alt="waiter" className="courseImg" />
          <p className="coursesP"> {languagePack[language].waiter}</p>
        </Col>
        <Col xs={12} className="d-flex justify-content-center mt-3">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScwITqgKPWX5zcwYcO7oFtOrlOLzwWhtnkcQeEj7TZp-njQdg/viewform?fbclid=PAAaZbNjec0Qir7MYWWMcLlk9mWK-j556bCzT_fzEDaI21iRiBEGfDWmngIbQ ">
            <Button className="anketaButton">
              {" "}
              {languagePack[language].join}
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
