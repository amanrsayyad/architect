import React from "react";
import styled from "styled-components";
import HeaderPages from "../components/HeaderPages";
import { babar1, babar2, babar3 } from "../utils/Images";

const ProjectDetail = () => {
  return (
    <>
      <HeaderPages active3="active" />
      <ProjectContainer>
        <div className="header">
          <p>Project - Babar Chowk, Satara</p>
        </div>
        <ProjectGrid>
          <ProjectCard>
            <img src={babar1} alt="" />
            <img src={babar2} alt="" />
            <img src={babar3} alt="" />
          </ProjectCard>
          <ProjectCard>
            <h2>Babar Chowk</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </ProjectCard>
        </ProjectGrid>
      </ProjectContainer>
    </>
  );
};

export default ProjectDetail;

const ProjectContainer = styled.div`
  margin-top: 5.9rem;
  .header {
    border-top: 1px solid #8e7861;
    border-bottom: 1px solid #8e7861;
    padding: 35px 50px;

    p {
      color: #fff;
      font-weight: 400;
      font-size: 20px !important;
      font-family: "Roboto3", sans-serif;
      line-height: 27px;
    }
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  grid-gap: 2rem;
  padding: 100px 50px;
`;

const ProjectCard = styled.div`
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  h2 {
    color: #8e7861;
    font-size: 60px;
    line-height: 70px;
    font-weight: 500;
    letter-spacing: 0.06em;
    margin-bottom: 8px;
    font-family: "Khand1";
    text-transform: uppercase;
  }
  p {
    color: #fff;
    font-weight: 400;
    font-size: 15px;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;
    letter-spacing: 0.7px;
  }
`;
