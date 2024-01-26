import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "../utils/Icons";
import projectBg2 from "../assets/Images/projectBg2.jpg";
import projectBg5 from "../assets/Images/projectBg5.jpg";
import projectBg6 from "../assets/Images/projectBg6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectImg = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ProjectContainer>
      <ProjectGrid>
        <ProjectCard data-aos="zoom-out-left" data-aos-delay="50">
          <img src={projectBg2} alt="" />
        </ProjectCard>
        <ProjectCard2 data-aos="zoom-out-left" data-aos-delay="100">
          <img src={projectBg6} alt="" />
        </ProjectCard2>
        <ProjectCard3 data-aos="zoom-out-left" data-aos-delay="150">
          <img src={projectBg5} alt="" />
        </ProjectCard3>
      </ProjectGrid>
      <Link to="/gallery">
        View Portfolio <HiArrowLongRight className="iconArrow" />
      </Link>
    </ProjectContainer>
  );
};

export default ProjectImg;

const ProjectContainer = styled.div`
  position: relative;
  overflow: hidden;
  a {
    position: absolute;
    bottom: 13%;
    right: 2%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: "Roboto2", sans-serif;
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    display: inline-flex;
    vertical-align: middle;
    flex-wrap: wrap;
    color: #8e7861;
    background-color: transparent;
    text-align: center;

    .iconArrow {
      font-size: 25px;
      margin-left: 0.5rem;
    }
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr;
  grid-gap: 1rem;
  padding: 100px 15px;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }

  @media only screen and (max-width: 991px) {
    img {
      height: 350px;
    }
  }
`;

const ProjectCard2 = styled.div`
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;

const ProjectCard3 = styled.div`
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
`;
