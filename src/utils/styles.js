import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageHead = styled.div`
  margin-top: 16rem;
  margin-bottom: 3rem;
  margin-left: 4rem;
  h2 {
    color: #8e7861;
    font-size: 80px;
    line-height: 90px;
    font-weight: 600;
    letter-spacing: 0.06em;
    margin-bottom: 11px;
    font-family: "Khand1";
    text-transform: uppercase;
  }

  @media only screen and (max-width: 991px) {
    margin-top: 11rem;
    margin-left: 1.5rem;
    margin-bottom: 2rem;
    h2 {
      font-size: 50px;
      line-height: 50px;
    }
  }
`;

export const PageBreak = styled.div`
  background-color: #8e7861;
  padding: 30px 70px 40px 70px;
  z-index: 1000;
`;

export const PageBg = styled.div`
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;

    @media only screen and (max-width: 991px) {
      height: 20vh;
    }
  }
`;

export const ProjectHead = styled.div`
  margin-top: 16rem;
  padding-bottom: 3rem;
  padding-left: 4rem;
  border-bottom: 1px solid #8e7861;
  h2 {
    color: #8e7861;
    font-size: 80px;
    line-height: 90px;
    font-weight: 600;
    letter-spacing: 0.06em;
    margin-bottom: 11px;
    font-family: "Khand1";
    text-transform: uppercase;
  }
  @media only screen and (max-width: 991px) {
    margin-top: 11rem;
    padding-left: 1.5rem;
    padding-bottom: 2rem;
    h2 {
      font-size: 50px;
      line-height: 50px;
    }
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 100px 65px;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    padding: 50px 20px;
  }
`;

export const ProjectCard = styled(Link)`
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
  h5 {
    margin-top: 1rem;
    color: #8e7861;
    font-size: 26px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-family: "Khand4";
    text-transform: uppercase;
  }
  p {
    color: #d7d4d4 !important;
    width: 85% !important;
    font-weight: 400;
    font-size: 16px !important;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;
    margin-top: 0.5rem;
    margin-bottom: 2.5rem !important;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 0.7rem;

    h5 {
      margin-top: 0.3rem;
    }
  }
`;

export const ButtonStyle = styled.div`
  text-align: center;
  text-transform: uppercase;
  border: 1px solid #8e7861;
  padding: 10px 60px;
  color: #8e7861;
  font-size: 12.5px;
  line-height: 28px;
  font-weight: 600;
  letter-spacing: 0.1em;
  font-family: "Roboto2", sans-serif;
  cursor: pointer;
  width: 40%;

  @media only screen and (max-width: 991px) {
    width: 70%;
  }
`;

export const PopupContainer = styled.div`
  .overlay {
    position: fixed;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000000;
  }
  .card {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #080808;
    border: 2px solid #8e7861;
    padding: 150px 50px;
    z-index: 1000000;

    h2 {
      color: #8e7861;
      font-size: 30px;
      line-height: 1.11111em;
      font-weight: 600;
      letter-spacing: 0.06em;
      margin-bottom: 11px;
      font-family: "Khand1";
      text-transform: uppercase;
    }
  }
  .iconClose {
    color: #fff;
    position: fixed;
    top: 25%;
    right: 25%;
    transform: translate(-50%, -50%);
    z-index: 1000000;
    font-size: 35px;
    background-color: transparent;
    cursor: pointer;
  }
`;
