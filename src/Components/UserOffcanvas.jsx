import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { saveUserAction } from "../Redux/actions";

export default function UserOffcanvas(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(saveUserAction(""));
    navigate("/");
    handleClose();
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.user.name}
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.user.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Name: {props.user.name}</h3>
          <h3>Email: {props.user.email}</h3>
          {props.user.nameOfCompanyOrPosition &&
          props.user.userType === "owner" ? (
            <h3>Name of Company: {props.user.nameOfCompanyOrPosition} </h3>
          ) : props.user.nameOfCompanyOrPosition &&
            props.user.userType === "participant" ? (
            <h3>Position: {props.user.nameOfCompanyOrPosition} </h3>
          ) : (
            <></>
          )}
          <div className="d-flex offcanvasBtn">
            <Button
              onClick={() => logoutHandler()}
              variant="warning"
              className="me-2"
            >
              Log Out
            </Button>
            {props.user.userType === "admin" ? (
              <Link to="/admin">
                <Button variant="success">Admin Panel</Button>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
