/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

export default function AddNewAdminModal(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("admin");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.user.user.token);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = async () => {
    const user = { name, email, userType, password };
    const options = {
      body: JSON.stringify(user),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/users`, options);
      const idObj = await res.json();
      console.log(idObj);
    } catch (error) {
      console.log(error);
    }
    props.fetchUsers();
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="modalBtn">
        Добавить Администратора
      </Button>

      <Modal show={show} onHide={handleClose} className="artModal">
        <Modal.Header closeButton>
          <Modal.Title>Добавить нового Администратора</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setName(e.target.value)}
            >
              <Form.Label>Имя</Form.Label>
              <Form.Control type="email" placeholder="Add Name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) => setEmail(e.target.value)}
            >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Add email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              onChange={(e) => setPassword(e.target.value)}
            >
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
