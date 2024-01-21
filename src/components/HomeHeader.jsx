import React, { useState } from "react";
import styled from "styled-components";
import logoWhite from "../assets/Images/logoSlider.png";
import { Link } from "react-router-dom";
import { TfiClose } from "../utils/Icons";

const HomeHeader = () => {
  const [menu, setMenu] = useState(false);

  return (
    <HeaderContainer>
      <div className="container">
        <Link to="/">
          <img src={logoWhite} alt="" className="logo" />
        </Link>
        <MenuIcon onClick={() => setMenu(!menu)}>
          <div className="seperator"></div>
          <div className="seperator"></div>
          <div className="seperator"></div>
          <div className="seperator"></div>
          <div className="seperator"></div>
          <div className="seperator"></div>
        </MenuIcon>
        {menu ? (
          <MenuDrop>
            <div className="nav-list">
              <ul>
                <li>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <div className="seperator"></div>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <div className="seperator"></div>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <div className="seperator"></div>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </MenuDrop>
        ) : null}
        <div className="border"></div>
      </div>
    </HeaderContainer>
  );
};

export default HomeHeader;

const HeaderContainer = styled.div`
  position: relative;

  .container {
    position: absolute;
    width: 100%;
    height: 80px;
    margin-top: 1rem;
  }
  .logo {
    position: absolute;
    top: 2%;
    left: 2%;
    background-color: transparent;
    width: 160px;
    height: 80px;
    z-index: 100;

    @media only screen and (max-width: 991px) {
      left: 5%;
      width: 130px;
      height: 70px;
    }
  }
  .border {
    position: absolute;
    bottom: 1%;
    right: 1.5%;
    background-color: #fff;
    height: 1px;
    width: 87%;
    z-index: 100;

    @media only screen and (max-width: 991px) {
      bottom: 0%;
      width: 100%;
      right: 0%;
    }
  }
  .closeIcon {
    position: absolute;
    top: 40%;
    right: 2.5%;
    transform: translateY(-50%);
    .icon {
      color: #fff;
      font-size: 35px;
    }
  }
  .nav-list {
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 991px) {
      /* display: none; */
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    position: absolute;
    top: 40%;
    right: 3%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
    cursor: pointer;
    background-color: transparent;
    z-index: 1000000;

    .seperator {
      width: 1px;
      height: 27px;
      background-color: #fff;
      margin: 0px 4px;
    }
  }
`;

const MenuDrop = styled.div`
  position: absolute;
  left: 0%;
  top: 100%;
  width: 100%;
  background-color: #080808;
  z-index: 1000000;
  padding: 25px 35px;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    li {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      a {
        position: relative;
        color: #8e7861;
        font-size: 18px;
        line-height: 1.2em;
        font-weight: 600;
        letter-spacing: 0.1em;
        font-family: "Khand4";
        text-transform: uppercase;
        margin-bottom: 11px;

        &:hover:before {
          transform: scaleX(1);
        }
      }
    }
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
`;
