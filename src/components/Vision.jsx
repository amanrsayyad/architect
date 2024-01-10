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
          <div className="data">
            <h3>VISION MOVE US</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non provident sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
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
`;

const VisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const VisionCard = styled.div`
  position: relative;
  .data {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0%;
  }
  img {
    width: 90%;
    height: 100%;
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
    font-size: 16px !important;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;
  }
`;
