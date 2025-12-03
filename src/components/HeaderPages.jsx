import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/Images/logo.png";
import logoWhite from "../assets/Images/logoSlider.png";
import bgLogo from "../assets/Images/bgLogo.png";
import { Link } from "react-router-dom";
import { TfiClose } from "../utils/Icons";
import { FaInstagram, FaFacebookF, AiOutlineYoutube } from "../utils/Icons";

const HeaderPages = (props) => {
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <HeaderContainer>
        <header className="is-sticky">
          <HeaderFlex>
            <div>
              <Link to="/">
                <img src={bgLogo} className="logo" alt="" />
              </Link>
            </div>
            <div className="nav-list">
              <ul>
                <li>
                  <Link to="/" className={props.active1}>
                    Home
                  </Link>
                </li>
                <div className="seperator"></div>
                <li>
                  <Link to="/about" className={props.active2}>
                    About Us
                  </Link>
                </li>
                <div className="seperator"></div>
                <li>
                  <Link to="/portfolio" className={props.active3}>
                    Portfolio
                  </Link>
                </li>
                <div className="seperator"></div>
                <li>
                  <Link to="/contact" className={props.active4}>
                    Contact Us
                  </Link>
                </li>
              </ul>
              <MenuIcon onClick={() => setToggle(!toggle)}>
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
              </MenuIcon>
            </div>
          </HeaderFlex>
          <MenuIco onClick={() => setMenu(!menu)}>
            <div className="seperator"></div>
            <div className="seperator"></div>
            <div className="seperator"></div>
            <div className="seperator"></div>
            <div className="seperator"></div>
            <div className="seperator"></div>
          </MenuIco>
          {menu ? (
            <MenuDrop>
              <div className="nav-list-menu">
                <ul>
                  <li>
                    <Link to="/" className={props.active1}>
                      Home
                    </Link>
                  </li>
                  <div className="seperator"></div>
                  <li>
                    <Link to="/about" className={props.active2}>
                      About Us
                    </Link>
                  </li>
                  <div className="seperator"></div>
                  <li>
                    <Link to="/portfolio" className={props.active3}>
                      Portfolio
                    </Link>
                  </li>
                  <div className="seperator"></div>
                  <li>
                    <Link to="/contact" className={props.active4}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </MenuDrop>
          ) : null}
        </header>
      </HeaderContainer>
      {toggle ? (
        <MenuContainter>
          <TfiClose className="closeIco" onClick={() => setToggle(false)} />
          <img src={logo} className="logo" alt="" />
          <ul className="seperator">
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
          <ul className="contact-info">
            <li>
              A: Off.No.5 Krishna Empire, Gorakhpur, Khed, NH-4, Satara.415001.
            </li>
            <li>
              <a href="mailto:fyxarchitects@gmail.com">
                E: fyxarchitects@gmail.com
              </a>
            </li>
            <li>
              <a href="mailto:studio@fyxarchitects.in">
                E: studio@fyxarchitects.in
              </a>
            </li>
            <li>
              <a href="tel:9006990019">T: +91 900 69 900 19</a>
            </li>
            <li>H: Monday to Saturday 10am - 6pm</li>
          </ul>
        </MenuContainter>
      ) : null}
    </>
  );
};

export default HeaderPages;

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
    padding: 15px 30px;
  }
  .nav-list {
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
  .nav-list-menu {
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 991px) {
      /* display: none; */
    }
  }
`;

const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    .logo {
      width: 120px;
      height: 60px;
    }
  }
  .seperator {
    width: 1px;
    height: 30px;
    background-color: #473c30;
    margin: 0px 35px;
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

const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  cursor: pointer;

  .seperator {
    width: 1px;
    height: 27px;
    background-color: #8e7861;
    margin: 0px 4px;
  }
`;

const MenuContainter = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
  width: 500px;
  height: 100%;
  min-height: 100%;
  padding: 146px 80px 35px;
  text-align: center;
  background-color: #080808;
  overflow: hidden;
  z-index: 9999;
  border-left: 1px solid #8e7861;

  .logo {
    width: 250px;
    height: 100px;
  }
  .closeIco {
    position: absolute;
    top: 42px;
    right: 69px;
    display: block;
    z-index: 1000;
    color: #8e7861;
    font-size: 30px;
    cursor: pointer;
  }
  .seperator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1.5rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

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
  }
  .contact-info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 3rem;

    li,
    a {
      color: #ccc;
      font-size: 16px;
      margin-bottom: 14px;
      font-family: "Roboto3", sans-serif;
      line-height: 25px;
    }
  }
`;

const MenuIco = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    position: absolute;
    top: 50%;
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
