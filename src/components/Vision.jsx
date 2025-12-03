import React from "react";
import styled from "styled-components";
import team1 from "../assets/Images/team1.jpg";

const Vision = () => {
  return (
    <VisionContainer>
      <VisionGrid>
        <VisionCard>
          <div className="positionFixed">
            <div className="data">
              <h3>VISION MOVE US</h3>
              <p>
                "At FYX, our vision is to create a sustainable and inclusive
                world where architecture becomes a catalyst for positive social
                change, fostering connections, and inspiring a harmonious
                coexistence between people and their environments."
              </p>
              <h5>Ar.Hrishikesh Bobade</h5>
              <h6>B.Arch., MA Architectural Design (UK)</h6>
              <p>
                Being a founder and principal architect of the FYX architects,
                He plays a pivotal role in shaping the build environment,
                combining artistic vision with practical expertise. Having
                vision and creativity for their designs to meet and exceed
                expectations while looking at every opportunity where innovation
                can be promoted. His architectural experience ranges from
                Residential, Commercial, Landscape to Master planning. He
                shoulder the responsibility of transforming ideas into tangible,
                harmonious spaces that enhance the quality of life.
              </p>
            </div>
          </div>
        </VisionCard>
        <VisionCard>
          <img src={team1} alt="" />
        </VisionCard>
      </VisionGrid>
    </VisionContainer>
  );
};

export default Vision;

const VisionContainer = styled.div`
  padding-top: 70px;
  padding-bottom: 30px;

  @media only screen and (max-width: 991px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

const VisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const VisionCard = styled.div`
  position: relative;

  .positionFixed {
    position: sticky;
    top: 25%;
    left: 25%;
    width: 100%;
    padding-left: 100px;
    @media only screen and (max-width: 991px) {
      position: relative;
      top: 0%;
      left: 0%;
      padding-left: 0px;
    }
  }

  .data {
    @media only screen and (max-width: 991px) {
      position: relative;
    }
  }
  img {
    width: 100%;
    height: 900px;
    object-fit: cover;

    @media only screen and (max-width: 991px) {
      width: 100%;
      height: 100%;
    }
  }
  h3 {
    color: #8e7861;
    font-size: 35px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-family: "Khand4";
    text-transform: uppercase;
    text-align: left;
    margin-top: 2rem;
  }
  p {
    color: #d7d4d4 !important;
    width: 85% !important;
    margin-bottom: 0.5rem !important;
    font-weight: 400;
    font-size: 20px !important;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;
  }
  h5 {
    color: #8e7861;
    font-size: 35px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-family: "Khand1";
    text-transform: uppercase;
    margin-bottom: 0.3rem;
    margin-top: 5.5rem;
  }
  h6 {
    color: #d7d4d4 !important;
    width: 85% !important;
    margin-bottom: 0.5rem !important;
    font-weight: 400;
    font-size: 24px !important;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;
    margin-bottom: 0.5rem;

    @media only screen and (max-width: 991px) {
      margin-bottom: 0.5rem;
    }
  }
`;
