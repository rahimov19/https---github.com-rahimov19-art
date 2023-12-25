import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function PartnersCarousel() {
  const language = useSelector((state) => state.languages.currentLanguage);
  const languagePack = {
    ru: {
      ourPartners: "Наши Партнеры",
      ziraP1: `Zira Trade - является дочерним проектом группы компаний ZIRA GROUP, которая специализируется на предоставлении товаров и услуг в сфере общественного питания. Zira TRADE осуществляет свою деятельность на рынке с 2014 года и стала лидирующей компанией в сфере дистрибьюции HoReCa. На данный момент, компания является единственным дистрибьютором местного производства фреш сыров и обжарки кофе. Имеющая первую систему онлайн оформления заказа и прямого контакта с компанией для потребителей его услуг.
      Компания позиционирует себя как - первая и крупнейшая компания в Таджикистане в сфере оснащения предприятий HoReCa, с большим корпоративным портфелем, а также прямыми контрактами с мировыми брендами.
      Компания предоставляет услуги:`,
      ziraP2: `На данный момент услуги компании предоставляются исключительно в городе Душанбе.`,
      ziraLi1: ` оснащение оборудованием (доставка и установка)`,
      ziraLi2: ` поставкой продукции для кухни от мировых брендов`,
      ziraLi3: ` поставкой кофе местной обжарки `,
      ziraLi4: ` поставкой фреш сыров местного приготовления `,
      ziraLi5: ` доставкой необходимой продукции как юр. лицам, так и физическим`,
      ziraLi6: ` обучением персонала`,
      ziraLi7: ` починкой и техническим обеспечением `,
    },
    en: {
      ourPartners: "Our Partners",
      ziraP1: `Zira Trade - is a subsidiary project of ZIRA GROUP, which specializes in providing goods and services in the catering industry. Zira TRADE has been operating on the market since 2014 and has become a leading company in the field of HoReCa distribution. At the moment, the company is the only distributor of locally produced freeze-dried cheese and coffee roasting. Having the first online ordering system and direct contact with the company for consumers of its services.
      The company positions itself as the first and largest company in Tajikistan in the field of equipping HoReCa enterprises, with a large corporate portfolio, as well as direct contracts with global brands.
      The company provides services:`,
      ziraP2: `The company's services are currently provided exclusively in the city of Dushanbe.`,
      ziraLi1: `equipment of equipment (delivery and installation)`,
      ziraLi2: `delivery of products for kitchen from world brands`,
      ziraLi3: ` supplying locally roasted coffee`,
      ziraLi4: ` supplying locally made fresh cheeses`,
      ziraLi5: `delivery of necessary products to both legal entities and individuals`,
      ziraLi6: `training of personnel`,
      ziraLi7: `maintenance and technical support`,
    },
    tj: {
      ourPartners: "Шарикони мо",
      ziraP1: `Zira Trade - лоиҳаи фаръии ZIRA GROUP мебошад, ки ба пешниҳоди мол ва хизматрасонӣ дар саноати хӯрокворӣ тахассус дорад. Zira TRADE дар бозор аз соли 2014 фаъолият карда, ба як ширкати пешбари соҳаи дистрибютори HoReCa табдил ёфтааст. Дар айни замон, ширкат ягона дистрибютори панири хушкшудаи маҳаллӣ ва бирён кардани қаҳва мебошад. Доштани аввалин системаи фармоиши онлайн ва тамоси мустақим бо ширкат барои истеъмолкунандагони хидматҳои он.
      Ширкат худро ҳамчун аввалин ва бузургтарин ширкат дар Тоҷикистон дар соҳаи муҷаҳҳаз кардани корхонаҳои HoReCa бо портфели бузурги корпоративӣ ва инчунин шартномаҳои мустақим бо брендҳои ҷаҳонӣ муаррифӣ мекунад.
      Ширкат чунин хидматҳоро пешниҳод мекунад:`,
      ziraP2: `Хизматрасонии ширкат айни замон танҳо дар шаҳри Душанбе пешниҳод карда мешавад.`,
      ziraLi1: `таҷҳизоти таҷҳизот (таҳвил ва насб)`,
      ziraLi2: `таҳвили маҳсулот барои ошхона аз брендҳои ҷаҳонӣ`,
      ziraLi3: `таъмини қаҳва бирёншудаи маҳаллӣ`,
      ziraLi4: `таъмин кардани панирҳои тару тозаи маҳаллӣ`,
      ziraLi5: `таҳвили маҳсулоти зарурӣ ҳам ба шахсони ҳуқуқӣ ва ҳам ба шахсони воқеӣ`,
      ziraLi6: `тайёркунии кадрҳо`,
      ziraLi7: `нигоҳдорӣ ва дастгирии техникӣ`,
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
          <p>{languagePack[language].ziraP1}</p>
          <ul>
            <li>{languagePack[language].ziraLi1}</li>
            <li>{languagePack[language].ziraLi2}</li>
            <li>{languagePack[language].ziraLi3}</li>
            <li>{languagePack[language].ziraLi4}</li>
            <li>{languagePack[language].ziraLi5}</li>
            <li>{languagePack[language].ziraLi6}</li>
            <li>{languagePack[language].ziraLi7}</li>
          </ul>
          <p>{languagePack[language].ziraP2}</p>
        </Col>
      </Row>
    </Container>
  );
}
