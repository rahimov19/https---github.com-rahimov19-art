/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

export default function AddNewNewsModal(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.user.user.token);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = async () => {
    const formData = new FormData();
    formData.append("newsImage", image);
    const news = { name, description, language };
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
      const res = await fetch(`http://localhost:3001/news`, options);
      const idObj = await res.json();
      console.log(idObj);
      const imgRes = await fetch(
        `http://localhost:3001/news/${idObj._id}/picture`,
        options2
      );
    } catch (error) {
      console.log(error);
    }
    props.fetchNews();
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="modalBtn">
        Add new News
      </Button>

      <Modal show={show} onHide={handleClose} className="artModal">
        <Modal.Header closeButton>
          <Modal.Title>Add new news</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setName(e.target.value)}
            >
              <Form.Label>Title</Form.Label>
              <Form.Control type="email" placeholder="Add Title" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={(e) => setDescription(e.target.value)}
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>Language</option>
              <option value="ru">Ru</option>
              <option value="tj">Tj</option>
              <option value="en">En</option>
            </Form.Select>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
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
            Close
          </Button>
          <Button variant="primary" onClick={submitHandler}>
            Add new news
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
