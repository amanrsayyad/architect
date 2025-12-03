import React from "react";
import styled from "styled-components";
import logo from "../assets/Images/logo.png";
import logoWhite from "../assets/Images/logoSlider.png";

const Overlay = () => {
  return (
    <OverlayContainer>
      <div className="overlay"></div>
      <div>
        <img src={logoWhite} alt="" />
        <h2>Loading . . .</h2>
      </div>
    </OverlayContainer>
  );
};

export default Overlay;

const OverlayContainer = styled.div`
  position: relative;
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #080808;
    height: 100vh;
    width: 100%;
    z-index: 1000000000000;
  }

  div {
    img {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000000000000;
      background-color: #000 !important;
      width: 190px;
      height: 90px;
    }
    h2 {
      position: fixed;
      top: 62%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000000000000;
      color: #fff;
      font-weight: 400;
      font-size: 20px;
      letter-spacing: 5px;
      text-transform: uppercase;
    }
  }
`;
