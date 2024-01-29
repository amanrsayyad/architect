import React, { useState } from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <CounterContainer>
        {counterOn && (
          <>
            <CounterGrid>
              <CounterCard>
                <span>
                  <CountUp start={0} end={100} duration={2} delay={0} /> +
                </span>
                <p>Clients</p>
              </CounterCard>
              <CounterCard>
                <span>
                  <CountUp start={0} end={10} duration={2} delay={0} /> +
                </span>
                <p>Citys</p>
              </CounterCard>
              <CounterCard>
                <span>
                  <CountUp start={0} end={100000} duration={2} delay={0} /> +
                </span>
                <p>Square Feets</p>
              </CounterCard>
            </CounterGrid>
          </>
        )}
      </CounterContainer>
    </ScrollTrigger>
  );
};

export default Counter;

const CounterContainer = styled.div`
  background-color: #8e7861;
  padding: 50px 70px 40px 70px;
  z-index: 1000;
`;

const CounterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  background-color: transparent;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const CounterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: relative;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Roboto3", sans-serif;
    font-size: 13px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    display: inline-flex;
    vertical-align: middle;
    flex-wrap: wrap;
    color: #fff;
    background-color: transparent;
    text-align: center;
  }
  span {
    background-color: transparent;
    font-family: "Khand4", sans-serif;
    font-weight: 300;
    font-size: 100px;
    line-height: 1;
    color: #756049;
  }
`;
