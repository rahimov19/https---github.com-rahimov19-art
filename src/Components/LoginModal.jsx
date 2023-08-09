import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveUserAction } from "../Redux/actions";

export default function LoginModal() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const res = await fetch("http://localhost:3001/users/login", options);
      if (res.ok) {
        const response = await res.json();
        const user = { user: response.user, token: response.accessToken };
        dispatch(saveUserAction(user));
      }
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal
        className="artModal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="artModalHeader">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              onChange={(e) => setEmail(e.target.value)}
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              onChange={(e) => setPassword(e.target.value)}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => loginHandler(e)}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
