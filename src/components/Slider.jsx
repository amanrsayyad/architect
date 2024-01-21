import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, EffectFade, Navigation, Autoplay } from "swiper/modules";
import styled from "styled-components";
import Slider1 from "../assets/Images/Slider/Slider1.jpg";
import Slider2 from "../assets/Images/Slider/Slider2.jpg";
import Slider3 from "../assets/Images/Slider/Slider3.jpg";
import Slider6 from "../assets/Images/Slider/Slider6.jpg";
import Slider7 from "../assets/Images/Slider/Slider7.jpg";
import Slider8 from "../assets/Images/Slider/Slider8.jpg";
import Slider9 from "../assets/Images/Slider/Slider9.jpg";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, AiOutlineYoutube } from "../utils/Icons";

const Slider = () => {
  return (
    <SliderContainer>
      <ul className="nav_list">
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <ul className="socail_list">
        <li className="seprator-line">
          <a href="https://www.instagram.com/fyxarchitects/" target="_blank">
            <FaInstagram className="iconInsta" />
          </a>
        </li>
        <li className="seprator-line">
          <a href="https://www.facebook.com/FYXarchitects/" target="_blank">
            <FaFacebookF className="iconFb" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCzlAk6ojMkPcwf1JgYBSm7A"
            target="_blank"
          >
            <AiOutlineYoutube className="iconYt" />
          </a>
        </li>
      </ul>
      <Swiper
        loop={true}
        navigation={true}
        effect={"fade"}
        autoplay={true}
        modules={[Pagination, EffectFade, Navigation, Autoplay]}
        pagination={{
          dynamicBullets: true,
        }}
        className="slider_container"
      >
        <SwiperSlide className="embla__slide">
          <img src={Slider7} alt="" />
          <Data>
            <h1>experiences & knowledge integrated</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Delectus, perspiciatis explicabo? Ipsa assumenda nulla molestias
              delectus nisi placeat!
            </p>
          </Data>
          <Overlay></Overlay>
        </SwiperSlide>
        <SwiperSlide className="embla__slide">
          <img src={Slider1} alt="" />
          <Data>
            <h1>experiences & knowledge integrated</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Delectus, perspiciatis explicabo? Ipsa assumenda nulla molestias
              delectus nisi placeat!
            </p>
          </Data>
          <Overlay></Overlay>
        </SwiperSlide>
        <SwiperSlide className="embla__slide">
          <img src={Slider2} alt="" />
          <Data>
            <h1>experiences & knowledge integrated</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Delectus, perspiciatis explicabo? Ipsa assumenda nulla molestias
              delectus nisi placeat!
            </p>
          </Data>
          <Overlay></Overlay>
        </SwiperSlide>
        <SwiperSlide className="embla__slide">
          <img src={Slider3} alt="" />
          <Data>
            <h1>experiences & knowledge integrated</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Delectus, perspiciatis explicabo? Ipsa assumenda nulla molestias
              delectus nisi placeat!
            </p>
          </Data>
          <Overlay></Overlay>
        </SwiperSlide>
        <SwiperSlide className="embla__slide">
          <img src={Slider6} alt="" />
          <Data>
            <h1>experiences & knowledge integrated</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Delectus, perspiciatis explicabo? Ipsa assumenda nulla molestias
              delectus nisi placeat!
            </p>
          </Data>
          <Overlay></Overlay>
        </SwiperSlide>
        <SwiperSlide className="embla__slide">
          <img src={Slider7} alt="" />
          <Data>
            <h1>experiences & knowledge integrated</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Delectus, perspiciatis explicabo? Ipsa assumenda nulla molestias
              delectus nisi placeat!
            </p>
          </Data>
          <Overlay></Overlay>
        </SwiperSlide>
        <SwiperSlide className="embla__slide">
          <img src={Slider8} alt="" />
          <Data>
            <h1>experiences & knowledge integrated</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Delectus, perspiciatis explicabo? Ipsa assumenda nulla molestias
              delectus nisi placeat!
            </p>
          </Data>
          <Overlay></Overlay>
        </SwiperSlide>
        <SwiperSlide className="embla__slide">
          <img src={Slider9} alt="" />
          <Data>
            <h1>experiences & knowledge integrated</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Delectus, perspiciatis explicabo? Ipsa assumenda nulla molestias
              delectus nisi placeat!
            </p>
          </Data>
          <Overlay></Overlay>
        </SwiperSlide>
      </Swiper>
      <div className="overlay"></div>
    </SliderContainer>
  );
};

export default Slider;

const SliderContainer = styled.div`
  position: relative;
  background-color: transparent;

  .nav_list {
    position: absolute;
    right: 3%;
    top: 18%;
    z-index: 100;
    text-align: right;
    background-color: transparent;

    li {
      background-color: transparent;
      margin-bottom: 1.5rem;
      a {
        position: relative;
        color: #fff;
        font-size: 16px;
        line-height: 1.2em;
        font-weight: 600;
        letter-spacing: 0.3em;
        font-family: "Khand4";
        text-transform: uppercase;
        background-color: transparent;
      }
      .active {
        &::after {
          content: "";
          position: absolute;
          width: 32px;
          height: 1px;
          top: calc(50% - 1px);
          background-color: currentColor;
          transition: transform 0.52s cubic-bezier(0.22, 0.61, 0.36, 1);
          transform-origin: left;
          left: -16px;
          right: auto;
        }
      }
    }

    @media only screen and (max-width: 991px) {
      display: none;
    }
  }

  .socail_list {
    position: absolute;
    right: 7%;
    bottom: 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 7%;
    z-index: 100;
    background-color: transparent;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;

      a {
        color: #fff;
        font-size: 16px;
        line-height: 1.2em;
        font-weight: 600;
        /* letter-spacing: 0.3em; */
        font-family: "Khand1";
        text-transform: uppercase;
        background-color: transparent;
        margin-bottom: -0.3rem;

        .iconInsta {
          font-size: 20px;
          margin-right: 5px;
          background-color: transparent;
        }
        .iconYt {
          font-size: 25px;
          margin-left: 5px;
          background-color: transparent;
        }
        .iconFb {
          font-size: 20px;
          margin-right: 5px;
          background-color: transparent;
        }
      }
    }
    .seprator-line {
      &::after {
        content: "";
        display: inline-block;
        width: 30px;
        height: 1px;
        background-color: #fff;
        margin: 0 5px;
      }
    }
    @media only screen and (max-width: 991px) {
      left: 8%;
    }
  }
`;

const Data = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 7%;
  background-color: transparent;
  z-index: 100;

  h1 {
    width: 37%;
    color: #fff;
    background-color: transparent;
    font-size: 70px;
    line-height: 70px;
    font-weight: 500;
    letter-spacing: 0.06em;
    margin-bottom: 11px;
    font-family: "Khand1";
    text-transform: uppercase;
  }
  p {
    background-color: transparent;
    color: #d7d4d4;
    width: 45%;
    margin-bottom: 1.4rem;
    font-weight: 500;
    font-size: 18px;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;
  }
  @media only screen and (max-width: 991px) {
    h1 {
      font-size: 40px;
      line-height: 45px;
      width: 80%;
    }
    p {
      width: 75%;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
