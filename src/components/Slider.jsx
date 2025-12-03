import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, AiOutlineYoutube } from "../utils/Icons";
import OverlayCompo from "./Overlay";

const Slider = () => {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://www.fyxarchitects.in/api/data/GetSliderGallery")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoader(false);
        setData(data.data);
      });
  }, []);

  return (
    <>
      {loader && <OverlayCompo />}
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
          spaceBetween={30}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
        >
          {data &&
            data.map((item) => {
              return (
                <SwiperSlide className="embla__slide animeslide-slide">
                  <img src={item.FilePath} alt="" />
                  <Data>
                    <h1 data-animate="bottom" className="animeslide-heading">
                      {item.Heading}
                    </h1>
                    <p data-animate="bottom" class="animeslide-desc">
                      {item.Subheading}
                    </p>
                  </Data>
                  <Overlay></Overlay>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div className="overlay"></div>
      </SliderContainer>
    </>
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
    right: 5%;
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

  .slider1 {
    h1 {
      transition: all 1s ease;
      -webkit-transform: translateY(-30px);
      transform: translateY(0px);
      opacity: 1;
      animation: slider1 3s infinite;
      animation-timing-function: ease-out;
      animation-direction: alternate;
    }
    @keyframes slider1 {
      0% {
        transition: all 0.3s ease;
        -webkit-transform: translateY(-30px);
        transform: translateY(-40px);
        opacity: 0;
      }
      100% {
        ma-webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transition-delay: 0.9s;
        transition-delay: 0.9s;
        opacity: 1;
      }
    }
    p {
      animation: para1 1s;
      animation-timing-function: ease-out;
      animation-direction: alternate;
    }
    @keyframes para1 {
      0% {
        transition: all 0.5s ease-in;
        margin-left: 5rem;
      }
      100% {
        margin-left: 0rem;
      }
    }
  }
  .slider2 {
    h1 {
      transition: all 1s ease;
      -webkit-transform: translateY(-30px);
      transform: translateY(0px);
      opacity: 1;
      animation: slider1 2s infinite;
      animation-timing-function: ease-out;
      animation-direction: alternate;
    }
    @keyframes slider1 {
      0% {
        transition: all 0.3s ease;
        -webkit-transform: translateY(-30px);
        transform: translateY(-40px);
        opacity: 0;
      }
      100% {
        ma-webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transition-delay: 0.9s;
        transition-delay: 0.9s;
        opacity: 1;
      }
    }
    p {
      animation: para2 7s;
      animation-timing-function: ease-out;
      animation-direction: alternate;
    }
    @keyframes para2 {
      0% {
        transition: all 0.5s ease-in;
        margin-left: 5rem;
      }
      100% {
        margin-left: 0rem;
      }
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    background-color: transparent;
    color: #d7d4d4;
    width: 45%;
    margin-bottom: 1.4rem;
    font-weight: 500;
    font-size: 19px;
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
