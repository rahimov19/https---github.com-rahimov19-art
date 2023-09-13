import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useSelector } from "react-redux";
export default function JoinArtModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useSelector((state) => state.user.user);
  const [name, setName] = useState("");
  const [legalName, setLegalName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [address, setAddress] = useState("");
  const [legalAddress, setLegalAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [webPage, setWebPage] = useState("");
  const [socialPage, setSocialPage] = useState("");
  const [typeOfMember, setTypeOfMember] = useState("");
  const [nameOfContact, setNameOfContact] = useState("");
  const [emailOfContact, setEmailOfContact] = useState("");
  const [phoneOfContact, setPhoneOfContact] = useState("");
  const [positionOfContact, setPositionOfContact] = useState("");

  const language = useSelector((state) => state.languages.currentLanguage);
  const languagePack = {
    ru: {
      joinART: "Вступить в АРТ",
      name: "Наименование компании",
      legalName: "Наименование Юридического Лица",
      image: "Логотип Компании",
      description: "Комментарий",
      taxNumber: "ИНН",
      address: "Адрес осуществления деятельности",
      legalAddress: "Юридический адрес",
      phone: "Телефон",
      webPage: "Веб-сайт",
      socialPage: "Страница в соц сетях",
      typeOfMember: "Тип предприятия",
      nameOfContact: "ФИО Контактного лица",
      emailOfContact: "Эл.почта контактного лица",
      phoneOfContact: "Телефон контактного лица",
      positionOfContact: "Должность контактного лица",
      bar: "Бар",
      cafe: "Кафе",
      restaurant: "Ресторан",
      stolovaya: "Столовая",
      cateringCompany: "Кейтеринговая компания",
      club: "Клуб",
      coffeeShop: "Кофейня",
      karaoke: "Караоке-бар",
      hotelRestaurant: "Ресторан при гостинице",
      hookah: "Кальян-бар",
      close: "Закрыть",
      sendApplication: "Отправить Форму",
    },
    en: {
      joinART: "Join ART",
      name: "Name of company",
      legalName: "Name of the Legal Entity",
      image: "Company Logo",
      description: "Comment",
      taxNumber: "TIN",
      address: "Address of the activity",
      legalAddress: "Legal address",
      phone: "Phone",
      webPage: "Website",
      socialPage: "Page on social networks",
      typeOfMember: "Enterprise type",
      nameOfContact: "Full name of the Contact person",
      emailOfContact: "Email of the contact person",
      phoneOfContact: "Contact person's phone number",
      positionOfContact: "Position of the contact person",
      bar: "Bar",
      cafe: "Cafe",
      restaurant: "Restaurant",
      stolovaya: "Dining",
      cateringCompany: "Catering Company",
      club: "Club",
      coffeeShop: "Coffee Shop",
      karaoke: "Karaoke Bar",
      hotelRestaurant: "Restaurant at hotel",
      hookah: "Hookah Bar",
      close: "Close",
      sendApplication: "Send an Application",
    },
    tj: {
      joinART: "Ба АРТ ҳамроҳ шавед",
      name: "Номи ширкат",
      legalName: "Номи шахси ҳуқуқӣ",
      image: "Логоти ширкат",
      description: "Шарҳ",
      taxNumber: "ТИН",
      address: "Суроғаи фаъолият",
      legalAddress: "Суроғаи ҳуқуқӣ",
      phone: "Телефон",
      webPage: "Вебсайт",
      socialPage: "Саҳифа дар шабакаҳои иҷтимоӣ",
      typeOfMember: "Навъи корхона",
      nameOfContact: "Номи пурраи шахси тамос",
      emailOfContact: "Имейли шахси тамос",
      phoneOfContact: "Рақами телефони шахси тамос",
      positionOfContact: "Мавқеи шахси тамос",
      bar: "Бар",
      cafe: "Кафе",
      restaurant: "Тарабхона",
      stolovaya: "Ошхона",
      cateringCompany: "Ширкати Кейтеринги",
      club: "Клуб",
      coffeeShop: "Қаҳвахона",
      karaoke: "Бари Караоке",
      hotelRestaurant: "Тарабхонаи меҳмонхона",
      hookah: "Бари кальян",
      close: "Маҳкам",
      sendApplication: "Аризаро фиристодан",
    },
  };
  const [valPhone, setValphone] = useState("");
  const [valContactPhone, setValContactphone] = useState("");
  const [valINN, setValINN] = useState("");

  const handleChangePhone = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setValphone(e.target.value);
    }
  };
  const handleChangeINN = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setValINN(e.target.value);
    }
  };
  const handleChangeContactPhone = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setValContactphone(e.target.value);
    }
  };

  const form = {
    name,
    legalName,
    image,
    description,
    taxNumber,
    address,
    legalAddress,
    phone,
    webPage,
    socialPage,
    typeOfMember,
    nameOfContact,
    emailOfContact,
    phoneOfContact,
    positionOfContact,
  };

  const handleSubmit = () => {
    console.log(form);
  };
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={user ? "d-none" : "joinButton"}
      >
        {languagePack[language].joinART}
      </Button>

      <Modal show={show} onHide={handleClose} className="artModal" noValidate>
        <Modal.Header closeButton>
          <Modal.Title id="artModalHeader">
            {languagePack[language].joinART}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setName(e.target.value)}
            >
              <Form.Label>{languagePack[language].name}</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setLegalName(e.target.value)}
            >
              <Form.Label>{languagePack[language].legalName}</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setAddress(e.target.value)}
            >
              <Form.Label>{languagePack[language].address}</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setLegalAddress(e.target.value)}
            >
              <Form.Label>{languagePack[language].legalAddress}</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setPhone(e.target.value)}
            >
              <Form.Label>{languagePack[language].phone}</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
                maxLength={8}
                value={valPhone}
                onChange={(e) => handleChangePhone(e)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setTaxNumber(e.target.value)}
            >
              <Form.Label>{languagePack[language].taxNumber}</Form.Label>
              <Form.Control
                type="number"
                value={valINN}
                onChange={(e) => handleChangeINN(e)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setWebPage(e.target.value)}
            >
              <Form.Label>{languagePack[language].webPage}</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setSocialPage(e.target.value)}
            >
              <Form.Label>{languagePack[language].socialPage}</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              controlId="formFile"
              className="mb-3"
              onChange={(e) => setImage(e.target.files[0])}
            >
              <Form.Label>{languagePack[language].image}</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Label>{languagePack[language].typeOfMember}</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setTypeOfMember(e.target.value)}
            >
              <option value={languagePack.ru.bar}>
                {languagePack[language].bar}
              </option>
              <option value={languagePack.ru.cafe}>
                {languagePack[language].cafe}
              </option>
              <option value={languagePack.ru.restaurant}>
                {languagePack[language].restaurant}
              </option>
              <option value={languagePack.ru.stolovaya}>
                {languagePack[language].stolovaya}
              </option>
              <option value={languagePack.ru.cateringCompany}>
                {languagePack[language].cateringCompany}
              </option>
              <option value={languagePack.ru.club}>
                {languagePack[language].club}
              </option>
              <option value={languagePack.ru.coffeeShop}>
                {languagePack[language].coffeeShop}
              </option>
              <option value={languagePack.ru.karaoke}>
                {languagePack[language].karaoke}
              </option>
              <option value={languagePack.ru.hotelRestaurant}>
                {languagePack[language].hotelRestaurant}
              </option>
              <option value={languagePack.ru.hookah}>
                {languagePack[language].hookah}
              </option>
            </Form.Select>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setNameOfContact(e.target.value)}
            >
              <Form.Label>{languagePack[language].nameOfContact}</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setEmailOfContact(e.target.value)}
            >
              <Form.Label>{languagePack[language].emailOfContact}</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setPhoneOfContact(e.target.value)}
            >
              <Form.Label>{languagePack[language].phoneOfContact}</Form.Label>
              <Form.Control
                type="tel"
                value={valContactPhone}
                onChange={(e) => handleChangeContactPhone(e)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setPositionOfContact(e.target.value)}
            >
              <Form.Label>
                {languagePack[language].positionOfContact}
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setEmailOfContact(e.target.value)}
            >
              <Form.Label>{languagePack[language].emailOfContact}</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={(e) => setDescription(e.target.value)}
            >
              <Form.Label>{languagePack[language].description}</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {languagePack[language].close}
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            {languagePack[language].sendApplication}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
