import React, { useEffect } from "react";
import Map from "../components/Map";
import Video from "../components/Video";
import ContactCompo from "../components/ContactCompo";
import AboutCompo from "../components/AboutCompo";
import Counter from "../components/Counter";
import Faq from "../components/Faq";
import Team from "../components/Team";
import Projects from "../components/Projects";
import SliderTag from "../components/SliderTag";
import Test from "../components/Test";
import ProjectImg from "../components/ProjectImg";
import Slider from "../components/Slider";
import Header from "../components/Header";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Slider />
      <Projects />
      <AboutCompo />
      <Team />
      <Faq />
      <Video />
      <Test />
      <Counter />
      <ProjectImg />
      <SliderTag />
      <ContactCompo />
      <Map />
    </div>
  );
};

export default Home;
