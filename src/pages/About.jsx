import React, { useEffect } from "react";
import { PageHead, PageBg, PageBreak } from "../utils/styles";
import { aboutBg } from "../utils/Images";
import Faq from "../components/Faq";
import Team from "../components/Team";
import Test from "../components/Test";
import Counter from "../components/Counter";
import HeaderPages from "../components/HeaderPages";
import Vision from "../components/Vision";

const About = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderPages active2="active" />
      <PageHead>
        <h2>about us</h2>
      </PageHead>
      <PageBg>
        <img src={aboutBg} alt="" />
      </PageBg>
      <Faq />
      <Team />
      <Test />
      <Counter />
      <Vision />
      <PageBreak></PageBreak>
    </div>
  );
};

export default About;
