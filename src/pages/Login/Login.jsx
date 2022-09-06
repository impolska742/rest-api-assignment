import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userLoginAction } from "../../actions/userActions";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    dispatch(userLoginAction(password, userId, navigate));
  };

  return (
    <Form onSubmit={login}>
      <Form.Group style={{ marginTop: "40px" }} className="mb-3">
        <Form.Label>User ID</Form.Label>
        <Form.Control
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          type="number"
          placeholder="Enter user id"
        />
        <Form.Text className="text-muted">
          We'll never share your user id with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
