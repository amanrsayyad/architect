import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

const SliderTag = () => {
  return (
    <SliderContainer>
      <SliderTrack>
        <SliderDiv>
          <Marquee direction="right" speed={200} delay={0}>
            <div className="tag">
              <span className="seperator"></span>
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>BUILDING SPACES FOR EVERY PURPOSE SINCE 2005</h5>
              <span className="seperator"></span>
            </div>
            <div className="tag">
              <h5>architecture & interior design</h5>
              <span className="seperator"></span>
            </div>
          </Marquee>
        </SliderDiv>
      </SliderTrack>
    </SliderContainer>
  );
};

export default SliderTag;

const SliderContainer = styled.div`
  border-top: 1px solid #483f30;
  border-bottom: 1px solid #483f30;
  padding: 30px 0px;
`;

const SliderTrack = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const SliderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;

    h5 {
      font-family: "Khand4", sans-serif;
      font-size: 18px;
      font-weight: 600;
      line-height: 1em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      overflow: hidden;
      white-space: nowrap;
      color: #8e7861;
    }
    .seperator {
      color: #8e7861;
      position: relative;
      width: 6px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 14px;

      &::after {
        content: "";
        width: 6px;
        height: 6px;
        background-color: currentColor;
      }
    }
  }
`;
