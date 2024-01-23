import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function EmailNews() {
  const language = useSelector((state) => state.languages.currentLanguage);
  const languagePack = {
    ru: {
      newsSubscription: "Новостная рассылка",
      subscribe: "Подпишитесь чтобы получать новости",
      placeholder: "Введите вашу почту ",
      send: "Отправить",
      sent: "Ваша почта успешно добавлена",
    },
    en: {
      newsSubscription: "Email Subscription",
      subscribe: "Subscribe to get latest news from us",
      placeholder: "Enter your email address",
      send: "Send",
      sent: "Your email is succesfully sent",
    },
    tj: {
      newsSubscription: "Обуна ба ахбор",
      subscribe: "Обуна шавед то аз мо хабархои нав бигиред",
      placeholder: "Суроғаи почтаи худро ворид кунед",
      send: "Ворид",
      sent: "Суроғаи почта ворид карда шуд",
    },
  };

  return (
    <Container className="subscribeContainer">
      <Row>
        <Col xs={12} md={6} className="textSubsCol">
          <h5>{languagePack[language].newsSubscription}</h5>
          <h2>{languagePack[language].subscribe}</h2>
        </Col>
        <Col xs={12} md={6} className="emailCOl">
          <input
            type="email"
            name="email"
            id="email"
            placeholder={languagePack[language].placeholder}
          />
          <Button
            className="ms-3"
            onClick={() => alert(languagePack[language].sent)}
          >
            {languagePack[language].send}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
