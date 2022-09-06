/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Spinner, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import TableRow from "../../components/Table/TableRow";
import { POSTS_URL } from "../../constants/constants";
import {
  addPost,
  deletePost,
  saveApiData,
  updatePost,
} from "../../redux/jsonApi/jsonApi.actions";

const Home = (props) => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setEmail(
      JSON.parse(localStorage.getItem("userInfo"))
        ? JSON.parse(localStorage.getItem("userInfo")).email
        : ""
    );
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(POSTS_URL)
      .then(function (response) {
        props.saveApiData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDeletePost = (id) => {
    // We can perform delete task using calling delete request and fetching data again but dummy api dont support this
    // axios.delete(POSTS_URL+"/"+id).then((res) => console.log(res));
    // fetchData()

    props.deletePost(id);
  };

  const handleUpdatePost = (post) => {
    // We can perform delete task using calling delete request and fetching data again but dummy api dont support this
    // axios.put(POSTS_URL+"/"+id, post).then((res) => console.log(res));
    // fetchData()

    props.updatePostData(post);
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    const post = {
      body: body,
      title: title,
      userId: 1,
    };
    props.addPostData(post);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>{email}</h1>
        <Button onClick={handleShow} variant="dark">
          +
        </Button>
      </div>

      {props.jsonData.length > 0 ? (
        <Table style={{ marginTop: "40px" }} striped bordered hover>
          <thead>
            <tr>
              <th style={{ minWidth: "80px" }}>User ID</th>
              <th>ID</th>
              <th>Title</th>
              <th style={{ minWidth: "200px" }}>Body</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.jsonData.slice(0, 15).map((item) => (
              <TableRow
                key={item.id}
                id={item?.id}
                userId={item?.userId}
                title={item?.title}
                body={item?.body}
                handleDelete={handleDeletePost}
                handleEditPost={handleUpdatePost}
              />
            ))}
          </tbody>
        </Table>
      ) : (
        <div
          style={{
            minWidth: "400px",
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner
            style={{
              transform: "scale(4.5)",
            }}
            animation="grow"
            variant="dark"
          />
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>User Id</Form.Label>
              <Form.Control
                value={1}
                disabled={true}
                type="number"
                placeholder="Enter id"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Body</Form.Label>
              <Form.Control
                value={body}
                onChange={(e) => setBody(e.target.value)}
                type="text"
                placeholder="Body"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            onClick={(e) => {
              handleAddPost(e);
              handleClose();
            }}
          >
            Add Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    jsonData: state.jsonApi.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveApiData: (props) => dispatch(saveApiData(props)),
    deletePost: (id) => dispatch(deletePost({ id: id })),
    updatePostData: (props) => dispatch(updatePost(props)),
    addPostData: (props) => dispatch(addPost(props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
