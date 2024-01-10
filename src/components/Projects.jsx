import React from "react";
import styled from "styled-components";
import { HiArrowLongRight } from "../utils/Icons";
import babar1 from "../assets/Images/babar-chowk/babar1.jpg";
import db1 from "../assets/Images/db-project/db1.jpg";
import forest1 from "../assets/Images/forest-project/forest1.jpg";
import vita1 from "../assets/Images/vita-project/vita1.jpg";
import park1 from "../assets/Images/part-project/park1.jpg";
import rb1 from "../assets/Images/rb-project/rb1.jpg";

const Projects = () => {
  return (
    <ProjectContainer>
      <ProjectCard>
        <img src={babar1} alt="" />
        <div className="text">
          Babar Chowk, Satara <HiArrowLongRight className="iconArrow" />
        </div>
        <span className="number">01</span>
      </ProjectCard>
      <ProjectCard className="border-right">
        <img src={db1} alt="" />
        <div className="text">
          DB Residence, bawada, Indapur{" "}
          <HiArrowLongRight className="iconArrow" />
        </div>
        <span className="number">02</span>
      </ProjectCard>
      <ProjectCard>
        <img src={forest1} alt="" />
        <div className="text">
          Forest Colony, Satara <HiArrowLongRight className="iconArrow" />
        </div>
        <span className="number">03</span>
      </ProjectCard>
      <ProjectCard className="border-right">
        <img src={vita1} alt="" />
        <div className="text">
          Mai's Kitchen, Vita <HiArrowLongRight className="iconArrow" />
        </div>
        <span className="number">04</span>
      </ProjectCard>
      <ProjectCard>
        <img src={park1} alt="" />
        <div className="text">
          Nana-Nani Park, Satara <HiArrowLongRight className="iconArrow" />
        </div>
        <span className="number">05</span>
      </ProjectCard>
      <ProjectCard className="border-right">
        <img src={rb1} alt="" />
        <div className="text">
          RB Residence, Kolewadi, Satara{" "}
          <HiArrowLongRight className="iconArrow" />
        </div>
        <span className="number">06</span>
      </ProjectCard>
    </ProjectContainer>
  );
};

export default Projects;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .border-right {
    border-right: 1px solid #302e2c;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  border-bottom: 1px solid #302e2c;
  border-left: 1px solid #302e2c;
  padding: 110px;
  z-index: 100;

  img {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 0%;
    height: 0%;
    object-fit: cover;
    z-index: 100;
    display: none;
    transition: all 2s ease-in-out;
  }
  &:hover {
    img {
      width: 100%;
      height: 100%;
      display: block;
      cursor: pointer;
    }
  }

  .number {
    position: absolute;
    right: 58px;
    bottom: -35px;
    font-size: 170px;
    font-weight: 100;
    line-height: 1;
    color: #211e19;
    z-index: 1;
    background-color: transparent;
    font-family: "Heebo1";
  }
  .text {
    position: absolute;
    bottom: 17%;
    left: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8e7861;
    font-size: 26px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-family: "Khand4";
    text-transform: uppercase;

    .iconArrow {
      font-size: 30px;
      margin-left: 0.5rem;
    }
  }
`;
