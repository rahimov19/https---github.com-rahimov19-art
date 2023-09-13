/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

export default function AddNewNewsModal(props) {
  const [name, setName] = useState("");
  const [video, setVideo] = useState("");

  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.user.user.token);
  const [files, setFiles] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = async (data) => {
    const formData = new FormData();
    formData.append("newsArray", image);
    const news = { name, description, language, video };
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
      body: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/news`, options);
      const idObj = await res.json();
      console.log(idObj);
      const imgRes = await fetch(
        `${process.env.REACT_APP_BE_URL}/news/${idObj._id}/arrPics`,
        options2
      );
    } catch (error) {
      console.log(error);
    }
    props.fetchNews();
    handleClose();
  };

  const packFiles = (files) => {
    const data = new FormData();

    [...files].forEach((file, i) => {
      data.append(`newsArray`, file, file.name);
    });
    return data;
  };

  const handleUploadClick = () => {
    if (files.length) {
      const data = packFiles(files);
      submitHandler(data);
    }
  };

  const renderFileList = () => (
    <ol>
      {[...files].map((f, i) => (
        <li key={i}>
          {f.name} - {f.type}
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="modalBtn">
        Добавить Новость
      </Button>

      <Modal show={show} onHide={handleClose} className="artModal">
        <Modal.Header closeButton>
          <Modal.Title>Добавить Новость</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setName(e.target.value)}
            >
              <Form.Label>Название</Form.Label>
              <Form.Control type="email" placeholder="Add Title" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={(e) => setDescription(e.target.value)}
            >
              <Form.Label>Описание</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={(e) => setVideo(e.target.value)}
            >
              <Form.Label>Видео</Form.Label>
              <Form.Control as="textarea" rows={3} />
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
                accept="image/*"
                multiple
                onChange={(e) => setFiles(e.target.files)}
              />
            </Form.Group>
            {renderFileList()}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleUploadClick}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
