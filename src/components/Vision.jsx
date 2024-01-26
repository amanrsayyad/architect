import React from "react";
import styled from "styled-components";
import { visionBg } from "../utils/Images";

const Vision = () => {
  return (
    <VisionContainer>
      <VisionGrid>
        <VisionCard>
          <img src={visionBg} alt="" />
        </VisionCard>
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
            </div>
          </div>
        </VisionCard>
      </VisionGrid>
    </VisionContainer>
  );
};

export default Vision;

const VisionContainer = styled.div`
  padding-top: 110px;
  padding-bottom: 170px;

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
  } 

  .data {
    /* position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0%; */

    @media only screen and (max-width: 991px) {
      position: relative;
    }
  }
  img {
    width: 90%;
    height: 100%;

    @media only screen and (max-width: 991px) {
      width: 100%;
    }
  }
  h3 {
    color: #8e7861;
    font-size: 40px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-family: "Khand4";
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 0.7rem;
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
`;
