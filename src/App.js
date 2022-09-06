import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      setIsAllowed(false);
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
          <Route path="/sign-up" element={<SignUp />} />
          {isAllowed && <Route path="/" element={<Home />} />}
        </Routes>
      </Container>
    </>
  );
}

export default App;
