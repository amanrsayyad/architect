import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebookF, AiOutlineYoutube } from "../utils/Icons";
import teamBg from "../assets/Images/teamBg.jpg";
import team1 from "../assets/Images/team1.jpg";
import team2 from "../assets/Images/team2.jpg";
import team3 from "../assets/Images/team3.jpg";

const Team = () => {
  return (
    <TeamContainer>
      <TeamGrid>
        {/* <TeamBg>
          <img src={teamBg} alt="" />
        </TeamBg> */}
        <TeamCard>
          <div className="card">
            <img src={team1} alt="" />
            <h5>Hrishikesh Bobade</h5>
            <h6>CEO / B.Arch., MA Architectural Design (UK)</h6>
            <p>
              Being a founder and principal architect of the FYX architects, He
              plays a pivotal role in shaping the build environment, combining
              artistic vision with practical expertise. Having vision and
              creativity for their designs to meet and exceed expectations while
              looking at every opportunity where innovation can be promoted. His
              architectural experience ranges from Residential, Commercial,
              Landscape to Master planning. He shoulder the responsibility of
              transforming ideas into tangible, harmonious spaces that enhance
              the quality of life.
            </p>
          </div>
          <div className="card">
            <img src={team2} alt="" />
            <h5>Akshay Kalase</h5>
            <h6>Urbanism and spatial planning</h6>
            <p>
              By integrating 3D visualization with traditional drafting
              techniques, he bridge the gap between conceptualization and
              realization, ensuring that architectural visions are effectively
              conveyed and executed with precision and clarity.
            </p>
          </div>
          <div className="card">
            <img src={team3} alt="" />
            <h5>Aniket Mayekar</h5>
            <h6>Interior Designer</h6>
            <p>
              He has special skills to make spaces inside buildings look good
              and work well. He combine architecture and interior design to
              create spaces that are both attractive and practical for people to
              use.
            </p>
          </div>
        </TeamCard>
      </TeamGrid>
    </TeamContainer>
  );
};

export default Team;

const TeamContainer = styled.div`
  padding: 0px 25px;
  padding-top: 100px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const TeamBg = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

const TeamCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  .card {
    img {
      width: 100%;
      height: 550px;
      object-fit: cover;
      margin-bottom: 0.5rem;
    }
    h5 {
      color: #8e7861;
      font-size: 20px;
      line-height: 1.2em;
      font-weight: 600;
      letter-spacing: 0.1em;
      font-family: "Khand1";
      text-transform: uppercase;
    }
    h6 {
      color: #d7d4d4 !important;
      width: 85% !important;
      margin-bottom: 0.5rem !important;
      font-weight: 400;
      font-size: 18px !important;
      font-family: "Roboto3", sans-serif;
      line-height: 27px;

      @media only screen and (max-width: 991px) {
        margin-bottom: 0.5rem;
      }
    }
    p {
      color: #d7d4d4 !important;
      width: 100% !important;
      margin-bottom: 1.4rem !important;
      font-weight: 400;
      font-size: 16px !important;
      font-family: "Roboto3", sans-serif;
      line-height: 27px;

      @media only screen and (max-width: 991px) {
        margin-bottom: 0.5rem;
      }
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 37%;

      li {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          font-size: 16px;
          line-height: 1.2em;
          font-weight: 600;
          font-family: "Khand1";
          text-transform: uppercase;
          background-color: transparent;
          margin-bottom: -0.3rem;
          color: #d7d4d4;

          .iconInsta {
            font-size: 20px;
            margin-right: 5px;
            color: #d7d4d4;
          }
          .iconYt {
            font-size: 25px;
            color: #d7d4d4;
          }
          .iconFb {
            font-size: 20px;
            margin-right: 5px;
            color: #d7d4d4;
          }
        }
      }
      .seprator-line {
        &::after {
          content: "";
          display: inline-block;
          width: 30px;
          height: 1px;
          background-color: #473c30;
          margin: 0 5px;
        }
      }

      @media only screen and (max-width: 991px) {
        margin-bottom: 3rem;
      }
    }
  }
`;
