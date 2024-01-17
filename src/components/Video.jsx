import React, { useState } from "react";
import styled from "styled-components";
import vidImg from "../assets/Images/vidImg.jpg";
import { FaPlay } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";

const Video = () => {
  const [popup, setPopup] = useState(false);
  return (
    <VidContainer>
      <img src={vidImg} alt="" />
      <div className="vid_icon" onClick={() => setPopup(!popup)}>
        <FaPlay className="icon" />
      </div>
      {popup ? (
        <>
          <PopupContainer>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jXoUMcp9-NE?si=kMVkFNQaUx9p4Nm2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </PopupContainer>
          <TfiClose onClick={() => setPopup(false)} className="icon_close" />
          <Overlay onClick={() => setPopup(false)}></Overlay>
        </>
      ) : null}
    </VidContainer>
  );
};

export default Video;

const VidContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100vh;
  }
  .vid_icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;

    .icon {
      color: #fff;
      font-size: 25px;
      background-color: transparent;
    }
  }
  .icon_close {
    position: fixed;
    top: 12%;
    right: 20%;
    z-index: 10000;
    cursor: pointer;
    color: #fff;
    font-size: 28px;
    background-color: transparent;
  }
  @media only screen and (max-width: 991px) {
    img {
      height: 50vh;
      object-fit: cover;
    }
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;

  iframe {
    width: 800px;
    height: 450px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;
