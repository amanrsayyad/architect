import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/Images/aboutImg.png";
import Button from "./Button";

const AboutCompo = () => {
  return (
    <>
      <AboutContainer>
        <AboutCard>
          <h2>START WITH IDEA</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non provident sunt in culpa qui officia deserunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
          </p>
          <div style={{ marginTop: "3rem" }}>
            <Button buttonName="explore" />
          </div>
        </AboutCard>
        <AboutImg>
          <img src={aboutImg} alt="" />
        </AboutImg>
      </AboutContainer>
    </>
  );
};

export default AboutCompo;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImg = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
`;

const AboutCard = styled.div`
  padding-top: 130px;
  padding-left: 100px;
  h2 {
    color: #8e7861;
    font-size: 40px;
    line-height: 1.11111em;
    font-weight: 600;
    letter-spacing: 0.06em;
    margin-bottom: 11px;
    font-family: "Khand1";
    text-transform: uppercase;
  }
  p {
    color: #d7d4d4;
    width: 75%;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 991px) {
    padding-top: 100px;
    padding-left: 30px;
  }
`;
