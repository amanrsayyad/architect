import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderPages from "../components/HeaderPages";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderPages active3="active" />
      <ProjectHead>
        <h2>Portfolio</h2>
      </ProjectHead>
      <PortfolioContainer></PortfolioContainer>
    </div>
  );
};

export default Portfolio;

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

const PortfolioContainer = styled.div``;
