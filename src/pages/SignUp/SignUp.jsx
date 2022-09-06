import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import {
  saveUserDataInAllowedUsersList,
  saveUserDataInMemory,
} from "../../utils/session-storage";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      isAuthenticated: true,
    };
    saveUserDataInMemory(data);
    saveUserDataInAllowedUsersList(data);
    navigate("/");
  };

  return (
    <>
      <h1 style={{ marginTop: "40px" }}>Register</h1>
      <Form onSubmit={register}>
        <Form.Group style={{ marginTop: "40px" }} className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
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

        <Button
          style={{
            marginRight: "20px",
          }}
          variant="dark"
          type="submit"
        >
          Register
        </Button>

        <Button
          onClick={() => {
            navigate("/login");
          }}
          variant="secondary"
          type="submit"
        >
          Already a user? Login
        </Button>
      </Form>
    </>
  );
};

export default SignUp;
