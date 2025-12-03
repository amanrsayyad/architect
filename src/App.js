import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
import Architecture from "./components/ProjectTypes/Architecture";
import Interior from "./components/ProjectTypes/Interior";
import Landscape from "./components/ProjectTypes/Landscape";
import Visualisation from "./components/ProjectTypes/Visualisation";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/landscape" element={<Landscape />} />
          <Route path="/visualisation" element={<Visualisation />} />
          <Route path="/project-detail/:id" element={<ProjectDetail />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
        <ScrollTop />
      </Router>
    </div>
  );
}

export default App;
