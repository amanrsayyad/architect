import React from "react";
import styled from "styled-components";

const Counter = () => {
  return (
    <CounterContainer>
      <CounterGrid>
        <CounterCard>
          <span>55 +</span>
          <p>realized projects</p>
        </CounterCard>
        <CounterCard>
          <span>37</span>
          <p>company clients</p>
        </CounterCard>
        <CounterCard>
          <span>22</span>
          <p>square arears</p>
        </CounterCard>
        <CounterCard>
          <span>45</span>
          <p>world awards</p>
        </CounterCard>
      </CounterGrid>
    </CounterContainer>
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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  background-color: transparent;
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
    font-size: 11px;
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
