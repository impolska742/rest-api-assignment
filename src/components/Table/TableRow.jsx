import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { Button, Form, Modal } from "react-bootstrap";

const TableRow = ({
  userId,
  id,
  title,
  body,
  handleDelete,
  handleEditPost,
}) => {
  const [prevTitle, setPrevTitle] = useState(title);
  const [prevBody, setPrevBody] = useState(body);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <tr>
        <td>{userId}</td>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td>
          <FiEdit onClick={handleShow} />
          <AiFillDelete onClick={() => handleDelete(id)} />
        </td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
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
                value={prevTitle}
                onChange={(e) => setPrevTitle(e.target.value)}
                type="text"
                placeholder="Text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Body</Form.Label>
              <Form.Control
                value={prevBody}
                onChange={(e) => setPrevBody(e.target.value)}
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
              handleEditPost(e);
              handleClose();
            }}
          >
            Edit Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TableRow;
