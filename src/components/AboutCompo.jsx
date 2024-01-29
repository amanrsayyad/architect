import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/Images/Sketch1.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const AboutCompo = () => {
  return (
    <>
      <AboutContainer>
        <AboutCard>
          <h2>START WITH IDEA</h2>
          <p>
            Explore our portfolio, where each project tells a unique story of
            creativity, functionality, and a commitment to delivering
            exceptional results. With a passion for design excellence, we
            transform concepts into architectural masterpieces that stand the
            test of time.
          </p>
          <div style={{ marginTop: "3rem", cursor: "pointer" }}>
            <Link to="/about">
              <Button buttonName="about us" />
            </Link>
          </div>
        </AboutCard>
        <AboutImg>
          <img src={aboutImg} alt="" />
        </AboutImg>
      </AboutContainer>
    </>
  );
};

export default AboutCompo;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImg = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
`;

const AboutCard = styled.div`
  padding-top: 130px;
  padding-left: 100px;
  h2 {
    color: #8e7861;
    font-size: 40px;
    line-height: 1.11111em;
    font-weight: 600;
    letter-spacing: 0.06em;
    margin-bottom: 11px;
    font-family: "Khand1";
    text-transform: uppercase;
  }
  p {
    color: #d7d4d4;
    width: 85%;
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 19px;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;

    @media only screen and (max-width: 991px) {
      width: 100%;
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 991px) {
    padding-top: 100px;
    padding-left: 15px;
  }
`;
