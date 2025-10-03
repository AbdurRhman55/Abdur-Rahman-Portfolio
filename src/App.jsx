// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import ScrollTop from "./Components/Scroll/ScrollTop";
import Services from "./pages/Services";
import ContactUs from './pages/ContactUs' 

function App() {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
