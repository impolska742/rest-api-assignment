import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AddPost from "./pages/AddPost/AddPost";
import EditPost from "./pages/EditPost/EditPost";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      setIsAllowed(false);
      navigate("/login");
    } else {
      setIsAllowed(true);
    }
  }, [navigate]);
  return (
    <>
      {isAllowed && <Navbar />}
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/edit" element={<EditPost />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
