/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Form, InputGroup } from "react-bootstrap";
import * as formik from "formik";
import { useSelector } from "react-redux";

export default function AddNewUserModal(props) {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { Formik } = formik;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [userType, setUserType] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("pending");
  const token = useSelector((state) => state.user.user.token);
  const [nameOfCompanyOrPosition, setNameOfCompanyOrPosition] = useState("");

  const typeChangeHandler = (e) => {
    setType(e.target.value);
    setUserType(e.target.value);
    console.log(type);
  };
  const handleSubmit = async () => {
    const user = {
      name,
      number,
      userType,
      comment,
      nameOfCompanyOrPosition,
      email,
      status,
    };
    const options = {
      body: JSON.stringify(user),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await fetch(`http://localhost:3001/users`, options);
    } catch (error) {
      console.log(error);
    }
    props.fetchUsers();
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="modalBtn">
        Add New User
      </Button>

      <Modal show={show} onHide={handleClose} className="artModal" noValidate>
        <Modal.Header closeButton>
          <Modal.Title id="artModalHeader">Join ART</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik>
            {({ handleSubmit, touched, errors }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group as={Col} md="12" className="position-relative mb-4">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="12" className="position-relative mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="12" className="position-relative my-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Select Role in ART</Form.Label>
                  <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                    value={type}
                    onChange={(e) => typeChangeHandler(e)}
                  >
                    <option>Select role</option>
                    <option value="owner">Restaurant Owner</option>
                    <option value="employee">Employee</option>
                  </Form.Select>
                </Form.Group>
                {type === "owner" ? (
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormikUsername2"
                  >
                    <Form.Label>Restaurant Name</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Restaurant Name"
                        aria-describedby="inputGroupPrepend"
                        name="restaurant"
                        onChange={(e) =>
                          setNameOfCompanyOrPosition(e.target.value)
                        }
                      />
                    </InputGroup>
                  </Form.Group>
                ) : type === "employee" ? (
                  <Form.Group as={Col} md="12">
                    <Form.Label>Previous Work Position</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Position"
                        aria-describedby="inputGroupPrepend"
                        name="position"
                        onChange={(e) =>
                          setNameOfCompanyOrPosition(e.target.value)
                        }
                      />
                    </InputGroup>
                  </Form.Group>
                ) : (
                  <></>
                )}
                <Form.Group className="mb-3">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Add New
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
