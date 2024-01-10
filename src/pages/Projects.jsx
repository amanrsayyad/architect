import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderPages from "../components/HeaderPages";
import babar1 from "../assets/Images/babar-chowk/babar1.jpg";
import db1 from "../assets/Images/db-project/db1.jpg";
import forest1 from "../assets/Images/forest-project/forest1.jpg";
import vita1 from "../assets/Images/vita-project/vita1.jpg";
import park1 from "../assets/Images/part-project/park1.jpg";
import rb1 from "../assets/Images/rb-project/rb1.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderPages active3="active" />
      <ProjectHead>
        <h2>Projects</h2>
      </ProjectHead>
      <ProjectGrid>
        <ProjectCard to="/project-detail">
          <img src={babar1} alt="" />
          <h5>Babar Chowk, Satara</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullam
          </p>
        </ProjectCard>
        <ProjectCard to="/project-detail">
          <img src={db1} alt="" />
          <h5>DB Residence, bawada, Indapur</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullam
          </p>
        </ProjectCard>
        <ProjectCard to="/project-detail">
          <img src={forest1} alt="" />
          <h5>Forest Colony, Satara</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullam
          </p>
        </ProjectCard>
        <ProjectCard to="/project-detail">
          <img src={vita1} alt="" />
          <h5>Mai's Kitchen, Vita</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullam
          </p>
        </ProjectCard>
        <ProjectCard to="/project-detail">
          <img src={park1} alt="" />
          <h5>Nana-Nani Park, Satara</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullam
          </p>
        </ProjectCard>
        <ProjectCard to="/project-detail">
          <img src={rb1} alt="" />
          <h5>RB Residence, Kolewadi, Satara</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullam
          </p>
        </ProjectCard>
      </ProjectGrid>
    </div>
  );
};

export default Projects;

const ProjectHead = styled.div`
  margin-top: 16rem;
  padding-bottom: 3rem;
  padding-left: 4rem;
  border-bottom: 1px solid #8e7861;
  h2 {
    color: #8e7861;
    font-size: 80px;
    line-height: 90px;
    font-weight: 600;
    letter-spacing: 0.06em;
    margin-bottom: 11px;
    font-family: "Khand1";
    text-transform: uppercase;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 100px 65px;
`;

const ProjectCard = styled(Link)`
  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }
  h5 {
    margin-top: 1rem;
    color: #8e7861;
    font-size: 26px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-family: "Khand4";
    text-transform: uppercase;
  }
  p {
    color: #d7d4d4 !important;
    width: 85% !important;
    font-weight: 400;
    font-size: 16px !important;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;
    margin-top: 0.5rem;
    margin-bottom: 2.5rem !important;
  }
`;
