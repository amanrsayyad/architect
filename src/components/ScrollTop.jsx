import React from "react";
import styled from "styled-components";
import arrowLong from "../assets/Icons/arrowLong.png";

const ScrollTop = () => {
  return (
    <ScrollDiv
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <img src={arrowLong} alt="" className="icon_arrow" />
    </ScrollDiv>
  );
};

export default ScrollTop;

const ScrollDiv = styled.div`
  position: relative;
  cursor: pointer;
  
  .icon_arrow {
    position: fixed;
    top: 89%;
    right: 3.5%;
    transform: translateY(-50%);
    width: 45px;
    height: 45px;
    background-color: transparent;
  }
`;
