import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function PartnersCarousel() {
  const language = useSelector((state) => state.languages.currentLanguage);
  const languagePack = {
    ru: {
      ourPartners: "Наши Партнеры",
      ziraP: `Единственный в своем роде магазин специализирующийся на кофе,чае и
    сопутствующим товарам. По-сколько мы работаем только с прямым
    поставщиками - наши цены на порядок ниже цен супермаркета, а
    ассортимент в разы шире. По мимо прямой продажи мы так же
    консультируем по выбору сорта кофе и чая в зависимости от способа
    приготовления и желаемого результата. У нас вы всегда можете взять с
    собой или насладится на месте чашкой ароматного кофе или чая,
    закусив это дело нашими эксклюзивными десертами.`,
    },
    en: {
      ourPartners: "Our Partners",
      ziraP: `The only store of its kind specializing in coffee, tea and related products. As far as we work only with direct suppliers - our prices are an order of magnitude lower than supermarket prices, and the assortment is many times wider. In addition to direct sale we also advise on the choice of coffee and tea varieties depending on the method of preparation and the desired result. You can always take with you or enjoy a cup of fragrant coffee or tea on the spot, snacking on our exclusive desserts.`,
    },
    tj: {
      ourPartners: "Шарикони мо",
      ziraP: `Ягона мағозаи намуди он, ки ба қаҳва, чой ва маҳсулоти марбута тахассус дорад. То он даме, ки мо танҳо бо таъминкунандагони мустақим кор мекунем - нархҳои мо нисбат ба нархҳои супермаркет як дараҷа пасттаранд ва ассортимент чанд маротиба васеътар аст. Илова ба фурӯши мустақим мо инчунин оид ба интихоби навъҳои қаҳва ва чой вобаста ба усули тайёр кардан ва натиҷаи дилхоҳ маслиҳат медиҳем. Шумо метавонед ҳамеша бо худ бибаред ё аз як пиёла қаҳва ё чойи хушбӯй дар ҳамон ҷо лаззат баред ва аз шириниҳои истисноии мо газак кашед.`,
    },
  };
  return (
    <Container id="partners" className="my-4">
      <h2>{languagePack[language].ourPartners}</h2>
      <Row className="partnersRow">
        <Col className="partnersColimg" xs={12} sm={6}>
          <img src="/zira.png" alt="ziraLogo" />
        </Col>
        <Col className="partnersCol" xs={12} sm={6}>
          <p>{languagePack[language].ziraP}</p>
        </Col>
      </Row>
    </Container>
  );
}
