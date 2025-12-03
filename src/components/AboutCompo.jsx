import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { visionBg } from "../utils/Images";

const AboutCompo = () => {
  return (
    <>
      <AboutContainer>
        <AboutCard>
          <h2>Conception</h2>
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
          <img src={visionBg} alt="" />
          <h5>Ar.Hrishikesh Bobade</h5>
          <h6>Principal Architect</h6>
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
  margin-top: 3rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImg = styled.div`
  padding-right: 170px;
  img {
    height: 600px;
    width: 90%;
    object-fit: cover;
    border-radius: 10px;

    @media only screen and (max-width: 991px) {
      width: 100%;
      height: 500px;
    }
  }
  h5 {
    color: #8e7861;
    font-size: 27px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-family: "Khand1";
    text-transform: uppercase;
    margin-top: 1rem;
  }
  h6 {
    color: #d7d4d4 !important;
    width: 85% !important;
    margin-bottom: 0.5rem !important;
    font-weight: 400;
    font-size: 20px !important;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;

    @media only screen and (max-width: 991px) {
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (max-width: 991px) {
    padding-right: 0px;
    margin: 0px 10px;
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
