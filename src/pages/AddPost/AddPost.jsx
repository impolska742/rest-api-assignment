import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addPostAction } from "../../actions/tableActions";

const AddPost = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addPostButton = (e) => {
    e.preventDefault();
    console.log({ body, title, userInfo });
    dispatch(addPostAction(body, title, userInfo, navigate));
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>User Id</Form.Label>
        <Form.Control
          value={userInfo}
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

      <Button onClick={addPostButton} variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddPost;
