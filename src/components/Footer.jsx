import React from "react";
import styled from "styled-components";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, AiOutlineYoutube } from "../utils/Icons";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterCard>
          <h3>Recognizing the need is the primary condition</h3>
          <p>
            Identifying and understanding the requirements or challenges before
            undertaking any design or problem-solving process.
          </p>
          <p>
            Architects, as problem solvers, identify constraints before
            developing creative and innovative solutions.
          </p>
          <ul className="social_list">
            <li className="seprator-line">
              <a
                href="https://www.instagram.com/fyxarchitects/"
                target="_blank"
              >
                <FaInstagram className="iconInsta" />
              </a>
            </li>
            <li className="seprator-line">
              <a href="https://www.facebook.com/FYXarchitects/" target="_blank">
                <FaFacebookF className="iconInsta" />
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
        </FooterCard>
        <FooterCard>
          <h5>CONTACT</h5>
          <ul>
            <li>
              A: Off.No.5 Krishna Empire, Gorakhpur, Khed, NH-4, Satara.415001.
            </li>
            <li>
              <a href="mailto:fyxarchitects@gmail.com">
                E: fyxarchitects@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:9006990019">T: +91 900 69 900 19</a>
            </li>
            <li>H: Monday to Saturday 10am - 6pm</li>
          </ul>
        </FooterCard>
        <FooterCard>
          <h5>Portfolio</h5>
          <ul>
            <li>
              <Link to="#">Architecture</Link>
            </li>
            <li>
              <Link to="#">Interior</Link>
            </li>
            <li>
              <Link to="#">Landscape</Link>
            </li>
            <li>
              <Link to="#">Visualisation</Link>
            </li>
          </ul>
        </FooterCard>
      </FooterGrid>
      <FooterBottomArea></FooterBottomArea>
      <CopyFooter>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex-center">
          <p>
            © 2023
            <a href="#" target="_blank" rel="noreferrer noopener">
              FYX architects,
            </a>
            All Rights Reserved
          </p>
        </div>
      </CopyFooter>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div``;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 1rem;
  padding-left: 110px;
  padding-right: 110px;
  padding-top: 189px;
  padding-bottom: 187px;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    padding: 50px 0px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const FooterCard = styled.div`
  h3 {
    color: #8e7861;
    font-size: 36px;
    line-height: 1.11111em;
    font-weight: 600;
    letter-spacing: 0.06em;
    margin-bottom: 11px;
    font-family: "Khand1";
    text-transform: uppercase;
    width: 60%;

    @media only screen and (max-width: 991px) {
      width: 80%;
    }
  }
  p {
    color: #ccc;
    width: 62%;
    font-size: 16px;
    margin-right: 15%;
    margin-bottom: 14px;
    font-family: "Roboto3", sans-serif;
    line-height: 25px;

    @media only screen and (max-width: 991px) {
      width: 100%;
    }
  }
  h5 {
    color: #8e7861;
    font-size: 20px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-family: "Khand1";
    text-transform: uppercase;
    margin-bottom: 11px;
  }
  ul {
    li,
    a {
      color: #ccc;
      font-size: 16px;
      margin-right: 15%;
      margin-bottom: 14px;
      font-family: "Roboto3", sans-serif;
      line-height: 25px;
    }
  }
  .social_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10%;
    margin-top: 2.5rem;

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

        .iconInsta {
          font-size: 20px;
          margin-right: 5px;
        }
        .iconYt {
          font-size: 25px;
          margin-left: 5px;
        }
        .iconFb {
          font-size: 20px;
          margin-right: 5px;
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
      }
    }
  }
`;

const FooterBottomArea = styled.div`
  &::before {
    display: block;
    height: 20px;
    content: "";
    width: 100%;
    height: 20px;
    background-image: linear-gradient(
      to right,
      #8e7861 10%,
      rgba(0, 0, 0, 0) 0
    );
    background-size: 10px 100%;
    background-repeat: repeat-x;
    opacity: 0.5;
  }
`;

const CopyFooter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 110px;
  padding-right: 126px;
  padding-top: 30px;
  padding-bottom: 30px;

  img {
    width: 250px;
    height: 100px;
  }
  p {
    color: #ccc;
    font-size: 16px;
    font-family: "Roboto3", sans-serif;
    line-height: 25px;
    a {
      color: #ccc;
      margin: 0px 5px;
    }

    @media only screen and (max-width: 991px) {
    }
  }

  @media only screen and (max-width: 991px) {
    justify-content: center;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;

    img {
      margin-bottom: 0.5rem;
    }
  }
`;
