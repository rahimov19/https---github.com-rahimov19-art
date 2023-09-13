import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Numbers() {
  const language = useSelector((state) => state.languages.currentLanguage);
  const languagePack = {
    ru: {
      missionTitle: "Миссия",
      missionP:
        "Развитие ресторанной индустрии Таджикистана, а также помощь и содействие членам АРТ в осуществлении профессиональной деятельности.",
      missionOneTitle: "Содействие",
      missionOneP:
        "в повышении престижа профессий в сфере ресторанного дела Республики Таджикистан, а также совершенствованию уровня профессиональной подготовки кадров, воспитание молодых специалистов в духе норм профессиональной этики.",
      missionTwoTitle: "Сотрудничество",
      missionTwoP:
        "Ассоциация Рестораторов Таджикистана работает непосредственно с Рестораторами.  Мы занимаемся повышением квалификации и профессионализма руководителей и персонала ресторанной сферы и сферы гостеприимства.",
      missionThreeTitle: "Поддержка",
      missionThreeP:
        "Мы поддерживаем руководителей путем консультирования и тренингов.",
      missionFourTitle: "Разработка",
      missionFourP:
        "Занимаемся совершенствованием бизнес и рабочих процессов ресторана и разработкой стандартов и правил предпринимательской и профессиональной деятельности.",
    },
    en: {
      missionTitle: "Mission",
      missionP:
        "Development of the restaurant industry in Tajikistan, as well as help and assistance to ART members in carrying out their professional activities.",
      missionOneTitle: "Facilitation",
      missionOneP:
        "in raising the prestige of professions in the field of restaurant business of the Republic of Tajikistan, as well as improving the level of professional training, education of young professionals in the spirit of professional ethics.",
      missionTwoTitle: "Collaboration",
      missionTwoP:
        "The Association of Restaurateurs of Tajikistan works directly with restaurateurs.  We are engaged in improving the skills and professionalism of managers and staff of the restaurant and hospitality industry.",
      missionThreeTitle: "Support",
      missionThreeP: "We support executives through counseling and training.",
      missionFourTitle: "Elaboration",
      missionFourP:
        "Engaged in improving restaurant business and work processes and developing business and professional standards and regulations.",
    },
    tj: {
      missionTitle: "Вазифа",
      missionP:
        "Рушди саноати тарабхонаҳо дар Тоҷикистон, инчунин ёрӣ ва кумак ба аъзои ART дар пешбурди фаъолияти касбиашон.",
      missionOneTitle: "Кӯмак",
      missionOneP:
        "ба баланд бардоштани нуфузи касбҳо дар тиҷорати тарабхонаи Ҷумҳурии Тоҷикистон, инчунин баланд бардоштани сатҳи омодагии касбии кадрҳо, тарбияи мутахассисони ҷавон дар рӯҳияи одоби касбӣ",
      missionTwoTitle: "Ҳамкорӣ",
      missionTwoP:
        "Ассотсиатсияи рестораторҳои Тоҷикистон мустақиман бо рестораторҳо ҳамкорӣ мекунад. Мо ба баланд бардоштани тахассус ва касбии роҳбарон ва кормандони бахши тарабхона ва меҳмондорӣ машғулем.",
      missionThreeTitle: "Дастгирӣ",
      missionThreeP:
        "Мо роҳбаронро тавассути машварат ва омӯзиш дастгирӣ мекунем.",
      missionFourTitle: "Рушд",
      missionFourP:
        "Мо ба такмил додани бизнес ва равандҳои кори тарабхона ва таҳияи стандартҳо ва қоидаҳои фаъолияти соҳибкорӣ ва касбӣ машғулем.",
    },
  };
  return (
    <Container className="numbersContainer">
      <div className="mb-3">
        <h2>{languagePack[language].missionTitle}</h2>
        <p>{languagePack[language].missionP}</p>
      </div>
      <Row className="numbersDiv">
        <Col className="stats-block__item">
          <h3>{languagePack[language].missionOneTitle}</h3>
          <p>{languagePack[language].missionOneP}</p>
        </Col>
        <Col className="stats-block__item">
          <h3>{languagePack[language].missionTwoTitle}</h3>
          <p>{languagePack[language].missionTwoP}</p>
        </Col>
        <Col className="stats-block__item">
          <h3>{languagePack[language].missionThreeTitle}</h3>
          <p>{languagePack[language].missionThreeP}</p>
        </Col>
        <Col className="stats-block__item">
          <h3>{languagePack[language].missionFourTitle}</h3>
          <p>{languagePack[language].missionFourP}</p>
        </Col>
      </Row>
    </Container>
  );
}
