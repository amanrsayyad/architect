import React from "react";
import styled from "styled-components";
import teamBg from "../assets/Images/teamBg.jpg";
import team1 from "../assets/Images/team1.jpg";
import team2 from "../assets/Images/team2.jpg";

const Team = () => {
  return (
    <TeamContainer>
      <TeamGrid>
        <TeamBg>
          <img src={teamBg} alt="" />
        </TeamBg>
        <TeamCard>
          <div className="card">
            <img src={team1} alt="" />
            <h5>VINCENT RASEL</h5>
            <p>CEO / Architect</p>
            <ul>
              <li className="seprator-line">
                <a
                  href="https://www.instagram.com/fyxarchitects/"
                  target="_blank"
                >
                  ig
                </a>
              </li>
              <li className="seprator-line">
                <a
                  href="https://www.facebook.com/FYXarchitects/"
                  target="_blank"
                >
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
          </div>
          <div className="card">
            <img src={team2} alt="" />
            <h5>VICTORIA SAVANO</h5>
            <p>Urbanism and spatial planning</p>
            <ul>
              <li className="seprator-line">
                <a
                  href="https://www.instagram.com/fyxarchitects/"
                  target="_blank"
                >
                  ig
                </a>
              </li>
              <li className="seprator-line">
                <a
                  href="https://www.facebook.com/FYXarchitects/"
                  target="_blank"
                >
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
          </div>
        </TeamCard>
      </TeamGrid>
    </TeamContainer>
  );
};

export default Team;

const TeamContainer = styled.div`
  padding: 0px 25px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  .card {
    img {
      width: 100%;
      height: 80%;
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
    p {
      color: #d7d4d4 !important;
      width: 85% !important;
      margin-bottom: 1.4rem !important;
      font-weight: 400;
      font-size: 18px !important;
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
      width: 40%;

      li {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          color: #8e7861;
          font-size: 16px;
          line-height: 1.2em;
          font-weight: 600;
          letter-spacing: 0.3em;
          font-family: "Khand1";
          text-transform: uppercase;
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
