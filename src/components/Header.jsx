import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logoWhite from "../assets/Images/logoSlider.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = `header-section d-none d-xl-block ${sticky}`;

  return (
    <HeaderContainer>
      <header className={classes}>
        <HeaderFlex>
          <div>
            <img src={logoWhite} className="logo" alt="" />
          </div>
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
        </HeaderFlex>
      </header>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  .is-sticky {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    box-shadow: 0 2px 24px 0 rgb(0 0 0 / 15%);
    background-color: #080808;
    border-bottom: 1px solid #8e7861;
    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
    padding: 15px;
    padding-right: 30px;
    padding-left: 30px;
  }

  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    .logo {
      width: 130px;
      height: 60px;
    }
  }
  .seperator {
    width: 1px;
    height: 30px;
    background-color: #473c30;
    margin: 0px 20px;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
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
