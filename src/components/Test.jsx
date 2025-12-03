import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import testBg from "../assets/Images/testBg.png";
import { HiArrowLongRight, HiArrowLongLeft } from "../utils/Icons";

const Test = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://admin.fyxarchitects.in/api/data/GetAllTestimonial")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.data);
      });
  }, []);

  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const slider = useRef(null);

  return (
    <TestContainer>
      <Slider ref={slider} {...settings}>
        {data &&
          data.map((item, index) => {
            return (
              <TestDiv>
                <div className="data">
                  <h5>"{item.Description}"</h5>
                  <p>{item.Name}</p>
                  <p>{item.Address}</p>
                </div>
              </TestDiv>
            );
          })}
      </Slider>
      <button
        onClick={() => slider?.current?.slickNext()}
        className="slick-arrow slick-next"
      >
        <HiArrowLongRight className="arrows" />
      </button>
      <button
        onClick={() => slider?.current?.slickPrev()}
        className="slick-arrow slick-prev"
      >
        <HiArrowLongLeft className="arrows" />
      </button>
    </TestContainer>
  );
};

export default Test;

const TestContainer = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  height: 50vh;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;

  @media only screen and (max-width: 991px) {
    height: 65vh;
  }
`;

const TestDiv = styled.div`
  width: 100%;
  height: 50vh;
  background: url(${testBg});
  background-color: transparent;
  z-index: 10000000;

  .data {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: auto;
    width: 80%;
    height: 100%;
    background-color: transparent;
  }
  h5 {
    font-family: "Khand4", sans-serif;
    font-size: 25px;
    font-weight: 600;
    line-height: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8e7861;
    background-color: transparent;
    margin-bottom: 1rem;
    padding: 0px 100px;
  }
  p {
    background-color: transparent;
    color: #fff;
    margin-bottom: 0.5rem;
    font-weight: 400;
    font-size: 16px;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;
  }

  @media only screen and (max-width: 991px) {
    height: 65vh;
    h5 {
      padding: 0px;
      font-size: 18px;
    }
    p {
      margin-bottom: 0.3rem;
    }
  }
  @media only screen and (max-width: 360px) {
    h5 {
      padding: 0px;
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 375px) {
    h5 {
      padding: 0px;
      font-size: 15px;
    }
  }
`;
