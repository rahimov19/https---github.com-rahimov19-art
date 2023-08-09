/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import AddNewUserModal from "./AddNewUserModal";
import AddNewNewsModal from "./AddNewNewsModal";
import AddNewBannerModal from "./AddNewsBannerModal";
import AddNewDocsModal from "./AddNewDocsModal";
import AddNewAdminModal from "./AddNewAdminModal";

export default function AdminPanel() {
  const user = useSelector((state) => state.user.user.user);
  const token = useSelector((state) => state.user.user.token);
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState([]);
  const [users, setUsers] = useState([]);
  const [news, setNews] = useState([]);
  const [banners, setBanners] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [docs, setDocs] = useState([]);

  const deleteHandler = async (a, link) => {
    const options = {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const endpoint = `http://localhost:3001/${link.link}/${a._id}`;
      const response = await fetch(endpoint, options);
      if (response.ok) {
        alert(`Information is deleted successfully`);
        fetchBanners();
        fetchDocs();
        fetchNews();
        fetchUsers();
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      let response = await fetch(`http://localhost:3001/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        let data = await response.json();
        let users = data.filter((u) => u.userType !== "admin");
        let admins = data.filter((a) => a.userType === "admin");
        setUsers(users);
        setAdmins(admins);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNews = async () => {
    try {
      let response = await fetch(`http://localhost:3001/news`);
      if (response.ok) {
        let data = await response.json();

        setNews(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBanners = async () => {
    try {
      let response = await fetch(`http://localhost:3001/news/banners`);
      if (response.ok) {
        let data = await response.json();
        setBanners(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDocs = async () => {
    try {
      let response = await fetch(`http://localhost:3001/news/docs`);
      if (response.ok) {
        let data = await response.json();

        setDocs(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user.userType !== "admin") {
      navigate("/");
    }
    fetchBanners();
    fetchDocs();
    fetchNews();
    fetchUsers();
  }, []);
  return (
    <>
      <Container className="adminContainer">
        <Row>
          <Col lg={2} md={2}>
            <ul className="adminUl">
              <li
                onClick={() => setActivePage(users)}
                className={activePage === users ? "liSelected" : ""}
              >
                Users
              </li>
              <li
                onClick={() => setActivePage(news)}
                className={activePage === news ? "liSelected" : ""}
              >
                News
              </li>
              <li
                onClick={() => setActivePage(banners)}
                className={activePage === banners ? "liSelected" : ""}
              >
                Banner
              </li>
              <li
                onClick={() => setActivePage(docs)}
                className={activePage === docs ? "liSelected" : ""}
              >
                Docs
              </li>
              <li
                onClick={() => setActivePage(admins)}
                className={activePage === admins ? "liSelected" : ""}
              >
                Admins
              </li>
            </ul>
          </Col>
          <Col lg={10} md={10}>
            {activePage && activePage === users ? (
              <>
                <Row className="my-2">
                  <Col className="adminCol">
                    <h5>Name</h5>
                  </Col>
                  <Col className="adminCol">
                    <h5>Email</h5>
                  </Col>
                  <Col className="adminCol">
                    <h5>User Type</h5>
                  </Col>

                  <Col className="adminCol">
                    <h5>Position</h5>
                  </Col>
                  <Col className="adminCol">
                    <h5>Status</h5>
                  </Col>
                  <Col className="adminCol">
                    <h5>Comment</h5>
                  </Col>

                  <Col className="adminCol">
                    <h5>Edit/Delete</h5>
                  </Col>
                </Row>
                {activePage.map((a) => (
                  <Row className="my-2" key={a.id}>
                    <Col className="adminCol">{a.name}</Col>
                    <Col className="adminCol">{a.email}</Col>
                    <Col className="adminCol">{a.userType}</Col>

                    <Col className="adminCol">{a.nameOfCompanyOrPosition}</Col>
                    <Col className="adminCol">{a.status}</Col>
                    <Col className="adminCol">{a.message}</Col>

                    <Col className="adminCol">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                      </Button>
                      <Button
                        variant="danger"
                        className="ms-2"
                        onClick={() => deleteHandler(a, { link: "users" })}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                      </Button>
                    </Col>
                  </Row>
                ))}
                <AddNewUserModal fetchUsers={fetchUsers} />
              </>
            ) : activePage === news ? (
              <>
                <Row className="my-2">
                  <Col className="adminCol">
                    <h5>Name</h5>
                  </Col>
                  <Col className="adminCol">
                    <h5>Desc</h5>
                  </Col>
                  <Col className="adminCol">
                    <h5>Language</h5>
                  </Col>

                  <Col className="adminCol">
                    <h5>Image</h5>
                  </Col>

                  <Col className="adminCol">
                    <h5>Edit/Delete</h5>
                  </Col>
                </Row>
                {activePage.map((a) => (
                  <Row className="my-2" key={a.id}>
                    <Col className="adminCol">{a.name}</Col>
                    <Col className="adminCol">{a.description}</Col>
                    <Col className="adminCol">{a.language}</Col>
                    <Col className="adminCol">
                      <img src={a.image} alt="" className="adminPic" />
                    </Col>

                    <Col className="adminCol">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                      </Button>
                      <Button
                        variant="danger"
                        className="ms-2"
                        onClick={() => deleteHandler(a, { link: "news" })}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                      </Button>
                    </Col>
                  </Row>
                ))}
                <AddNewNewsModal fetchNews={fetchNews} />
              </>
            ) : activePage === banners ? (
              <>
                <Row className="my-2">
                  <Col className="adminCol">
                    <h5>Name</h5>
                  </Col>
                  <Col className="adminCol">
                    <h5>Desc</h5>
                  </Col>
                  <Col className="adminCol">
                    <h5>Language</h5>
                  </Col>

                  <Col className="adminCol">
                    <h5>Image</h5>
                  </Col>

                  <Col className="adminCol">
                    <h5>Edit/Delete</h5>
                  </Col>
                </Row>
                {activePage.map((a) => (
                  <Row className="my-2" key={a.id}>
                    <Col className="adminCol">{a.title}</Col>
                    <Col className="adminCol">{a.description}</Col>
                    <Col className="adminCol">{a.language}</Col>

                    <Col className="adminCol">
                      <img src={a.image} alt="" className="adminPic" />
                    </Col>

                    <Col className="adminCol">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                      </Button>
                      <Button
                        variant="danger"
                        className="ms-2"
                        onClick={() =>
                          deleteHandler(a, { link: "news/banners" })
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                      </Button>
                    </Col>
                  </Row>
                ))}
                <AddNewBannerModal fetchBanners={fetchBanners} />
              </>
            ) : activePage === docs ? (
              <>
                <Row className="my-2">
                  <Col className="adminCol">
                    <h5>Name</h5>
                  </Col>

                  <Col className="adminCol">
                    <h5>Language</h5>
                  </Col>

                  <Col className="adminCol">
                    <h5>Image</h5>
                  </Col>

                  <Col className="adminCol">
                    <h5>Edit/Delete</h5>
                  </Col>
                </Row>
                {activePage.map((a) => (
                  <Row className="my-2" key={a.id}>
                    <Col className="adminCol">{a.title}</Col>

                    <Col className="adminCol">{a.language}</Col>

                    <Col className="adminCol">
                      <img src={a.image} alt="" className="adminPic" />
                    </Col>

                    <Col className="adminCol">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                      </Button>
                      <Button
                        variant="danger"
                        className="ms-2"
                        onClick={() => deleteHandler(a, { link: "news/docs" })}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                      </Button>
                    </Col>
                  </Row>
                ))}
                <AddNewDocsModal fetchDocs={fetchDocs} />
              </>
            ) : activePage === admins ? (
              <>
                <Row className="my-2">
                  <Col className="adminCol">
                    <h5>Name</h5>
                  </Col>
                  <Col className="adminCol">
                    <h5>Email</h5>
                  </Col>
                  <Col className="adminCol">
                    <h5>User Type</h5>
                  </Col>

                  <Col className="adminCol">
                    <h5>Edit/Delete</h5>
                  </Col>
                </Row>
                {activePage.map((a) => (
                  <Row className="my-2" key={a.id}>
                    <Col className="adminCol">{a.name}</Col>
                    <Col className="adminCol">{a.email}</Col>
                    <Col className="adminCol">{a.userType}</Col>
                    <Col className="adminCol">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                      </Button>
                      <Button
                        variant="danger"
                        className="ms-2"
                        onClick={() => deleteHandler(a, { link: "users" })}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                      </Button>
                    </Col>
                  </Row>
                ))}
                <AddNewAdminModal fetchUsers={fetchUsers} />
              </>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
