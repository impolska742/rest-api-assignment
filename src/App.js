import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import EditPost from "./pages/EditPost/EditPost";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<EditPost />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
