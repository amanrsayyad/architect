import React from "react";
import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import logoWhite from "../assets/Images/logo-white.png";
import Slider1 from "../assets/Images/Slider/Slider1.jpg";
import Slider2 from "../assets/Images/Slider/Slider2.jpg";
import Slider3 from "../assets/Images/Slider/Slider3.jpg";
import Slider6 from "../assets/Images/Slider/Slider6.jpg";
import Slider7 from "../assets/Images/Slider/Slider7.jpg";
import Slider8 from "../assets/Images/Slider/Slider8.jpg";
import Slider9 from "../assets/Images/Slider/Slider9.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
  // { loop: true }, [Autoplay()]
  const [emblaRef] = useEmblaCarousel();

  return (
    <SliderContainer>
      <img src={logoWhite} alt="" className="logo" />
      <div className="border"></div>
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
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <ul className="socail_list">
        <li className="seprator-line">
          <a href="https://www.instagram.com/fyxarchitects/" target="_blank">
            ig
          </a>
        </li>
        <li className="seprator-line">
          <a href="https://www.facebook.com/FYXarchitects/" target="_blank">
            fb
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCzlAk6ojMkPcwf1JgYBSm7A"
            target="_blank"
          >
            yt
          </a>
        </li>
      </ul>
      {/* ref={emblaRef} */}
      <div className="embla">
        <div className="embla__container">
          <div className="embla__slide">
            <img src={Slider7} alt="" />
          </div>
          <div className="embla__slide">
            <img src={Slider2} alt="" />
          </div>
          <div className="embla__slide">
            <img src={Slider3} alt="" />
          </div>
          <div className="embla__slide">
            <img src={Slider6} alt="" />
          </div>
          <div className="embla__slide">
            <img src={Slider8} alt="" />
          </div>
          <div className="embla__slide">
            <img src={Slider9} alt="" />
          </div>
          <div className="embla__slide">
            <img src={Slider1} alt="" />
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </SliderContainer>
  );
};

export default Slider;

const SliderContainer = styled.div`
  position: relative;
  background-color: transparent;
  /* z-index: 100000000; */

  .logo {
    position: absolute;
    top: 2%;
    left: 1%;
    background-color: transparent;
    width: 200px;
    height: 80px;
  }
  .border {
    position: absolute;
    top: 12%;
    right: 2.3%;
    background-color: #fff;
    height: 1px;
    width: 82%;
  }
  .nav_list {
    position: absolute;
    right: 3%;
    top: 18%;
    z-index: 1000000000;
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
  }

  .socail_list {
    position: absolute;
    right: 3%;
    bottom: 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 8%;
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
        letter-spacing: 0.3em;
        font-family: "Khand1";
        text-transform: uppercase;
        background-color: transparent;
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
  }

  .overlay {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 100000000;
  }
`;
