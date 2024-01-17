import React, { useState } from "react";
import styled from "styled-components";
import testBg from "../assets/Images/testBg.png";
import { HiArrowLongRight, HiArrowLongLeft } from "../utils/Icons";
import People from "../utils/Data";

const Test = () => {
  const [state, setState] = useState(0);
  const { id, name, title, quote } = People[state];

  const Next = () => {
    setState((state + 1) % People.length);
  };
  const Prev = () => {
    const newState = state - 1;
    if (newState < 0) {
      setState(People.length - 1);
    } else {
      setState(state - 1);
    }
  };

  return (
    <TestContainer>
      <TestBg></TestBg>
      <HiArrowLongLeft className="iconLeft" onClick={Prev} />
      <HiArrowLongRight className="iconRight" onClick={Next} />
      <TestDiv key={id}>
        <h5>"{quote}"</h5>
        <p>
          {name}
        </p>
        <p>{title}
        </p>
      </TestDiv>
    </TestContainer>
  );
};

export default Test;

const TestContainer = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  height: 70vh;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .iconLeft {
    position: absolute;
    top: 45%;
    left: 10%;
    transform: translateY(-50%);
    background-color: transparent;
    color: #8e7861;
    font-size: 40px;
    cursor: pointer;
  }
  .iconRight {
    position: absolute;
    top: 45%;
    right: 10%;
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
  width: 75%;
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
