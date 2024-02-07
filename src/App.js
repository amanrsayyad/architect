import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";
import Portfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";

function App() {
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://admin.fyxarchitects.in/api/data/userlogin",
        { username: "fyx", password: "jayhanuman" }
      );
      localStorage.setItem(
        "TOKEN",
        JSON.stringify(response.data.data.access_token)
      );
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
  handleLogin();

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
        <ScrollTop />
      </Router>
    </div>
  );
}

export default App;
