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
            Innovative and contemporary architectural designs for residential,
            commercial, and institutional projects.
          </p>
          <p>
            Conceptualization, planning, and execution of architectural
            concepts.
          </p>
        </FaqCard>
        <FaqCard>
          <FaqDiv>
            <div className="space-between">
              <div>
                <Link to="/project-detail">
                  <h5>Architecture</h5>
                </Link>
              </div>
              <div onClick={() => toggleIndex(1)}>
                {index === 1 ? (
                  <HiOutlineMinus className="iconFaq" />
                ) : (
                  <TfiPlus className="iconFaq" />
                )}
              </div>
            </div>
            {index === 1 ? (
              <p>
                Design in architecture is a multifaceted and creative process
                that involves the conceptualization, planning, and realization
                of physical structures. Architects are responsible for shaping
                the built environment, and their designs influence the way
                people interact with and experience spaces. Here's a description
                of architecture design.
              </p>
            ) : null}
          </FaqDiv>
          <FaqDiv>
            <div className="space-between">
              <div>
                <Link to="/project-detail">
                  <h5>Interior</h5>
                </Link>
              </div>
              <div onClick={() => toggleIndex(2)}>
                {index === 2 ? (
                  <HiOutlineMinus className="iconFaq" />
                ) : (
                  <TfiPlus className="iconFaq" />
                )}
              </div>
            </div>
            {index === 2 ? (
              <p>
                We believe that every space has the potential to be
                extraordinary. Our passion for interior design goes beyond
                aesthetics – it's about creating environments that inspire,
                comfort, and reflect the essence of those who inhabit them.
              </p>
            ) : null}
          </FaqDiv>
          <FaqDiv>
            <div className="space-between">
              <div>
                <Link to="/project-detail">
                  <h5>Landscape</h5>
                </Link>
              </div>
              <div onClick={() => toggleIndex(3)}>
                {index === 3 ? (
                  <HiOutlineMinus className="iconFaq" />
                ) : (
                  <TfiPlus className="iconFaq" />
                )}
              </div>
            </div>
            {index === 3 ? (
              <p>
                Boundaries between architecture and nature blur. Our landscape
                designs redefine outdoor spaces, seamlessly integrating the
                built environment with the beauty of the natural world.
              </p>
            ) : null}
          </FaqDiv>
          <FaqDiv>
            <div className="space-between">
              <div>
                <Link to="/project-detail">
                  <h5>Visualisation</h5>
                </Link>
              </div>
              <div onClick={() => toggleIndex(4)}>
                {index === 4 ? (
                  <HiOutlineMinus className="iconFaq" />
                ) : (
                  <TfiPlus className="iconFaq" />
                )}
              </div>
            </div>
            {index === 4 ? (
              <p>
                Immerse yourself in dynamic, interactive 3D models that provide
                a holistic understanding of your project from every angle.
              </p>
            ) : null}
          </FaqDiv>
        </FaqCard>
      </FaqGrid>
    </FaqContainer>
  );
};

export default Faq;

const FaqContainer = styled.div`
  padding: 130px 100px;
  /* padding-top: 100px; */

  @media only screen and (max-width: 991px) {
    padding: 100px 30px;
  }
`;

const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
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

    @media only screen and (max-width: 991px) {
      width: 100%;
      font-size: 47px;
    }
  }
  p {
    color: #d7d4d4;
    width: 75%;
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 19px;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;

    @media only screen and (max-width: 991px) {
      width: 100%;
    }
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
