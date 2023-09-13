/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

export default function AddNewDocsModal(props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [language, setLanguage] = useState("");
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.user.user.token);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = async () => {
    const formData = new FormData();
    formData.append("docsImage", image);
    const news = { title, language };
    const options = {
      body: JSON.stringify(news),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const options2 = {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/news/docs`,
        options
      );
      const idObj = await res.json();
      console.log(idObj);
      const imgRes = await fetch(
        `${process.env.REACT_APP_BE_URL}/news/docs/${idObj._id}/image`,
        options2
      );
    } catch (error) {
      console.log(error);
    }
    props.fetchDocs();
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="modalBtn">
        Добавить новый документ
      </Button>

      <Modal show={show} onHide={handleClose} className="artModal">
        <Modal.Header closeButton>
          <Modal.Title>Добавить новый документ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setTitle(e.target.value)}
            >
              <Form.Label>Название</Form.Label>
              <Form.Control type="email" placeholder="Add Title" />
            </Form.Group>

            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>Язык</option>
              <option value="ru">Ru</option>
              <option value="tj">Tj</option>
              <option value="en">En</option>
            </Form.Select>
            <Form.Group controlId="image">
              <Form.Label>Изображение</Form.Label>
              <Form.Control
                type="file"
                placeholder="Enter your Image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={submitHandler}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
