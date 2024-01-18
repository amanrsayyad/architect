import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
        </Routes>
        <Footer />
        <ScrollTop />
      </Router>
    </div>
  );
}

export default App;
