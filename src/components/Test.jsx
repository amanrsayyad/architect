import React from "react";
import styled from "styled-components";
import testBg from "../assets/Images/testBg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiArrowLongRight, HiArrowLongLeft } from "../utils/Icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Test = () => {
  return (
    <TestContainer>
      <TestBg></TestBg>
      <HiArrowLongLeft className="iconLeft" />
      <HiArrowLongRight className="iconRight" />
      <TestDiv>
        <h5>
          "LOREM IPSUM DOLOR SIT AMET LUCTUS SED DO EIUSMOD TEMP NEC ULLAM CONSE
          CTETUR ADIPISCING ELITSE."
          {/* Investor, Robert Green "SED DO EIUSMOD TEMP
          NEC ULLAM CONSE CTETUR ADIPISCING OREM IPSUM DOLOR SIT AMET LUCTUS
          ELITSE." Designer, Helena Mour "LOREM IPSUM DOLOR SIT AMET LUCTUS SED
          DO EIUSMOD TEMP NEC ULLAM CONSE CTETUR ADIPISCING ELITSE." */}
        </h5>
        <p>Investor, Robert Green</p>
      </TestDiv>
    </TestContainer>
  );
};

export default Test;

const TestContainer = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  height: 60vh;

  .iconLeft {
    position: absolute;
    top: 45%;
    left: 20%;
    transform: translateY(-50%);
    background-color: transparent;
    color: #8e7861;
    font-size: 40px;
    cursor: pointer;
  }
  .iconRight {
    position: absolute;
    top: 45%;
    right: 20%;
    transform: translateY(-50%);
    background-color: transparent;
    color: #8e7861;
    font-size: 40px;
    cursor: pointer;
  }
  @media only screen and (max-width: 991px) {
    .iconLeft {
      left: 7%;
    }
    .iconRight {
      right: 7%;
    }
  }
`;

const TestBg = styled.div`
  height: 100%;
  width: 100%;
  background: url(${testBg});
  background-color: transparent;
`;

const TestDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: transparent;

  h5 {
    width: 60%;
    font-family: "Khand4", sans-serif;
    font-size: 40px;
    font-weight: 600;
    line-height: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8e7861;
    background-color: transparent;
    margin-bottom: 1rem;
  }
  p {
    background-color: transparent;
    color: #fff;
    margin-bottom: 0.5rem !important;
    font-weight: 400;
    font-size: 16px !important;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;
  }

  @media only screen and (max-width: 991px) {
    h5 {
      width: 100%;
      font-size: 25px;
    }
  }
`;
