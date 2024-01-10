import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiArrowLongRight, TfiPlus, HiOutlineMinus } from "../utils/Icons";

const Faq = () => {
  const [index, setIndex] = useState(1);
  const toggleIndex = (index) => {
    setIndex(index);
  };

  return (
    <FaqContainer>
      <FaqGrid>
        <FaqCard>
          <h2>ARRAY OF SERVICES AND SKILLS</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur cepteur sint occaecat.
          </p>
          <Link to="#">
            Read More <HiArrowLongRight className="iconArrow" />
          </Link>
        </FaqCard>
        <FaqCard>
          <FaqDiv>
            <div className="space-between">
              <div>
                <h5>consultancy</h5>
              </div>
              <div onClick={() => toggleIndex(1)}>
                <HiOutlineMinus className="iconFaq" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </FaqDiv>
          <FaqDiv>
            <div className="space-between">
              <div>
                <h5>architecture</h5>
              </div>
              <div>
                <TfiPlus className="iconFaq" />
              </div>
            </div>
          </FaqDiv>
          <FaqDiv>
            <div className="space-between">
              <div>
                <h5>projects</h5>
              </div>
              <div>
                <TfiPlus className="iconFaq" />
              </div>
            </div>
          </FaqDiv>
          <FaqDiv>
            <div className="space-between">
              <div>
                <h5>construction</h5>
              </div>
              <div>
                <TfiPlus className="iconFaq" />
              </div>
            </div>
          </FaqDiv>
        </FaqCard>
      </FaqGrid>
    </FaqContainer>
  );
};

export default Faq;

const FaqContainer = styled.div`
  padding: 130px 100px;
`;

const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const FaqCard = styled.div`
  h2 {
    color: #8e7861;
    font-size: 50px;
    line-height: 1.11111em;
    font-weight: 600;
    letter-spacing: 0.06em;
    margin-bottom: 11px;
    font-family: "Khand1";
    text-transform: uppercase;
    width: 90%;
  }
  p {
    color: #d7d4d4;
    width: 75%;
    margin-bottom: 2.5rem;
    font-weight: 400;
    font-size: 19px;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: "Roboto2", sans-serif;
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    display: inline-flex;
    vertical-align: middle;
    flex-wrap: wrap;
    color: #8e7861;
    background-color: transparent;
    text-align: center;

    .iconArrow {
      font-size: 25px;
      margin-left: 0.5rem;
    }
  }
`;

const FaqDiv = styled.div`
  padding: 15px 0px;
  border-bottom: 1px solid #8e7861;
  margin-bottom: 1rem;

  p {
    color: #d7d4d4 !important;
    width: 85% !important;
    margin-bottom: 0.5rem !important;
    font-weight: 400;
    font-size: 16px !important;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;
  }
  .space-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div {
    h5 {
      color: #8e7861;
      font-size: 16px;
      line-height: 1.2em;
      font-weight: 600;
      letter-spacing: 0.1em;
      font-family: "Khand1";
      text-transform: uppercase;
      margin-bottom: 11px;
    }
    .iconFaq {
      color: #8e7861;
      font-size: 25px;
    }
  }
`;
