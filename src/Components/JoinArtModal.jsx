import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Form, InputGroup } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
export default function JoinArtModal() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),

    terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });
  const typeChangeHandler = (e) => {
    setType(e.target.value);
    console.log(type);
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="joinButton">
        Join ART
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className="artModal"
        noValidate
        validated={validated}
      >
        <Modal.Header closeButton>
          <Modal.Title id="artModalHeader">Join ART</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              name: "Mark",
              number: "Otto",
              email: "",
              terms: false,
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormik101"
                  className="position-relative mb-4"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your name.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormik102"
                  className="position-relative my-3"
                >
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isValid={touched.phone && !errors.phone}
                  />

                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter a phone number.
                  </Form.Control.Feedback>
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
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Restaurant Name"
                        aria-describedby="inputGroupPrepend"
                        name="restaurant"
                        value={values.restaurant}
                        onChange={handleChange}
                        isInvalid={!!errors.restaurant}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.restaurant}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                ) : type === "employee" ? (
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormikUsername2"
                  >
                    <Form.Label>Previous Work Position</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Position"
                        aria-describedby="inputGroupPrepend"
                        name="position"
                        value={values.position}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                ) : (
                  <></>
                )}

                <Form.Group className="position-relative my-3">
                  <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationFormik106"
                    feedbackTooltip
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
            Send Application
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
