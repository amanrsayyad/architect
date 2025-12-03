import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderPages from "../components/HeaderPages";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "../utils/Icons";
import Slider2 from "../assets/Images/Slider/Slider2.jpg";
import Slider6 from "../assets/Images/Slider/Slider6.jpg";
import Slider8 from "../assets/Images/Slider/Slider8.jpg";
import Slider9 from "../assets/Images/Slider/Slider9.jpg";
import Interior from "../assets/Images/interior.jpeg";
import Landscape from "../assets/Images/landscape.jpeg";

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
      <PortfolioContainer>
        <PortfolioCard to="/architecture" className="border-right">
          <img src={Slider6} alt="" />
          <div className="text">
            Architecture
            <HiArrowLongRight className="iconArrow" />
          </div>
          <span className="number">01</span>
        </PortfolioCard>
        <PortfolioCard to="/interior" className="border-right">
          <img src={Interior} alt="" />
          <div className="text">
            Interior
            <HiArrowLongRight className="iconArrow" />
          </div>
          <span className="number">02</span>
        </PortfolioCard>
        <PortfolioCard to="/landscape" className="border-right">
          <img src={Landscape} alt="" />
          <div className="text">
            Landscape
            <HiArrowLongRight className="iconArrow" />
          </div>
          <span className="number">03</span>
        </PortfolioCard>
        <PortfolioCard to="/visualisation" className="border-right">
          <img src={Slider9} alt="" />
          <div className="text">
            Visualisation
            <HiArrowLongRight className="iconArrow" />
          </div>
          <span className="number">04</span>
        </PortfolioCard>
      </PortfolioContainer>
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

  @media only screen and (max-width: 991px) {
    margin-top: 11rem;
    padding-left: 1.5rem;
    padding-bottom: 2rem;
    h2 {
      font-size: 50px;
      line-height: 50px;
    }
  }
`;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .border-right {
    border-right: 1px solid #302e2c;
  }

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const PortfolioCard = styled(Link)`
  position: relative;
  border-bottom: 1px solid #302e2c;
  border-left: 1px solid #302e2c;
  padding: 110px;
  z-index: 100;
  overflow: hidden;

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

    @media only screen and (max-width: 991px) {
      font-size: 120px;

      &:nth-child(6) {
        bottom: 30px;
      }
    }
  }
  .text {
    position: absolute;
    bottom: 17%;
    left: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8e7861;
    font-size: 20px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-family: "Khand4";
    text-transform: uppercase;

    .iconArrow {
      font-size: 30px;
      margin-left: 0.5rem;
    }

    @media only screen and (max-width: 991px) {
      font-size: 17px;

      .iconArrow {
        font-size: 20px;
        margin-left: 0.5rem;
      }
    }
  }
`;
