import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { saveUserDataInMemory } from "../../utils/session-storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      isAuthenticated: true,
    };
    const allowedUser = JSON.parse(localStorage.getItem("allowedUser"));
    console.log(allowedUser, data);

    if (
      allowedUser &&
      allowedUser.email === email &&
      allowedUser.password === password
    ) {
      saveUserDataInMemory(data);
      navigate("/");
    } else {
      toast.error("Invalid Email or password!!");
    }
  };

  return (
    <>
      <h1 style={{ marginTop: "40px" }}>Login</h1>
      <Form onSubmit={login}>
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

        <Button style={{ marginRight: "20px" }} variant="dark" type="submit">
          Login
        </Button>

        <Button
          onClick={() => {
            navigate("/sign-up");
          }}
          variant="secondary"
          type="submit"
        >
          New User? Register
        </Button>
      </Form>
    </>
  );
};

export default Login;
