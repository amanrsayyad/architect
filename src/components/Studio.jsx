import React from "react";
import styled from "styled-components";
import img1 from "../assets/Images/Our Studio/img1.jpg";
import img2 from "../assets/Images/Our Studio/img2.jpg";
import img3 from "../assets/Images/Our Studio/img3.jpg";
import img4 from "../assets/Images/Our Studio/img4.PNG";

const Studio = () => {
  return (
    <StudioContainer>
      <h5>Our Studio</h5>
      <div className="grid">
        <div className="card">
          <img src={img1} alt="" />
        </div>
        <div className="card">
          <img src={img2} alt="" />
        </div>
        <div className="card">
          <img src={img3} alt="" />
        </div>
        <div className="card">
          <img src={img4} alt="" />
        </div>
      </div>
    </StudioContainer>
  );
};

export default Studio;

const StudioContainer = styled.div`
  margin: 15px;
  padding: 35px 20px;
  padding-bottom: 60px;
  h5 {
    color: #8e7861;
    font-size: 35px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-family: "Khand1";
    text-transform: uppercase;
    margin-bottom: 2rem;
    margin-top: 1rem;

    @media only screen and (max-width: 991px) {
      margin-bottom: 1rem;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }
  .card {
    img {
      width: 100%;
      height: 550px;
      object-fit: cover;
      border-radius: 10px;

      @media only screen and (max-width: 991px) {
        height: 400px;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    padding: 35px 0px;
  }
`;
