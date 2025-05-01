import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Login from "../pages/login/Login.jsx";
import Details from "../pages/details/Details.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
