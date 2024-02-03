import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "../utils/Icons";
import projectBg2 from "../assets/Images/projectBg2.jpg";
import projectBg5 from "../assets/Images/projectBg5.jpg";
import projectBg6 from "../assets/Images/projectBg6.jpg";
import { db4 } from "../utils/Images";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollTrigger from "react-scroll-trigger";

const ProjectImg = () => {
  const [trueImg, setTrueImg] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ProjectContainer>
      <ScrollTrigger
        onEnter={() => setTrueImg(true)}
        onExit={() => setTrueImg(false)}
      >
        {trueImg && (
          <ProjectGrid>
            <ProjectCard>
              <img src={projectBg2} alt="" />
            </ProjectCard>
            <ProjectCard2 className="img2">
              <img src={projectBg6} alt="" />
            </ProjectCard2>
            <ProjectCard3>
              <img src={db4} alt="" />
            </ProjectCard3>
            <ProjectCard4>
              <img src={projectBg5} alt="" />
            </ProjectCard4>
          </ProjectGrid>
        )}
        <Link to="/gallery">
          View All Work <HiArrowLongRight className="iconArrow" />
        </Link>
      </ScrollTrigger>
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
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 100px 15px;
  overflow: hidden;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  img {
    width: 100%;
    height: 550px;
    object-fit: cover;
    animation: img1 1.5s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    margin-left: -20rem;
  }
  @keyframes img1 {
    0% {
      transition: all 0.5s ease-in;
      height: 300px;
      margin-left: 0rem;
    }
    100% {
      height: 550px;
      margin-left: -20rem;
    }
  }

  @media only screen and (max-width: 991px) {
    img {
      height: 350px;
    }
  }
`;

const ProjectCard2 = styled.div`
  margin-left: 10px;
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    animation: img2 1.5s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    margin-left: -20rem;
  }
  @keyframes img2 {
    0% {
      transition: all 0.5s ease-in;
      height: 300px;
      margin-left: 0rem;
    }
    100% {
      height: 500px;
      margin-left: -20rem;
    }
  }
`;

const ProjectCard3 = styled.div`
  margin-left: 10px;
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    animation: img3 1.5s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    margin-left: -20rem;
  }
  @keyframes img3 {
    0% {
      transition: all 0.5s ease-in;
      height: 300px;
      margin-left: 0rem;
    }
    100% {
      height: 450px;
      margin-left: -20rem;
    }
  }
`;

const ProjectCard4 = styled.div`
  margin-left: 10px;
  img {
    width: 450px;
    height: 350px;
    object-fit: cover;
    animation: img4 1.5s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    margin-left: -20rem;
  }
  @keyframes img4 {
    0% {
      transition: all 0.5s ease-in;
      height: 300px;
      margin-left: 0rem;
    }
    100% {
      height: 350px;
      margin-left: -20rem;
    }
  }
`;

const ProjectCard5 = styled.div`
  img {
    width: 100%;
    height: 550px;
    object-fit: cover;
  }
`;
