import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PageHead, PageBreak } from "../utils/styles";
import Map from "../components/Map";
import HeaderPages from "../components/HeaderPages";
import { ButtonStyle, PopupContainer } from "../utils/styles";
import { VscChromeClose } from "react-icons/vsc";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [res, setRes] = useState();

  const tokenName = JSON.parse(localStorage.getItem("TOKEN"));

  const sendMail = () => {
    fetch(
      `https://admin.fyxarchitects.in/api/data/SendEnquiry?Name=${name}&Email=${email}&message=${message}`,
      {
        method: "PUT",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRes(data.data.message);
        setShow(true);
        setName("");
        setEmail("");
        setMessage("");
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {show ? (
        <PopupContainer>
          <div className="overlay"></div>
          <div className="card">
            <h2>{res}</h2>
          </div>
          <VscChromeClose
            onClick={() => setShow(false)}
            className="iconClose"
          />
        </PopupContainer>
      ) : null}
      <HeaderPages active4="active" />
      <PageHead>
        <h2>Contact us</h2>
      </PageHead>
      <Map />
      <ContactGrid>
        <ContactForm>
          <h2>Contact Us</h2>
          <form>
            <div className="grid">
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <ButtonStyle onClick={sendMail}>send message</ButtonStyle>
          </form>
        </ContactForm>
        <ContactInfo>
          <div>
            <h4>SATARA OFFICE</h4>
            <ul>
              <li>
                <a href="#">
                  Off.No.5 Krishna Empire, Gorakhpur, Khed, NH-4, Satara.415001.
                </a>
              </li>
              <li>
                <a href="tel:9006990019">+91 900 69 900 19</a>
              </li>
              <li>
                <a href="mailto:fyxarchitects@gmail.com">
                  fyxarchitects@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:studio@fyxarchitects.in">
                  studio@fyxarchitects.in
                </a>
              </li>
            </ul>
          </div>
        </ContactInfo>
      </ContactGrid>
      <PageBreak></PageBreak>
    </div>
  );
};

export default Contact;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
  padding: 100px 70px;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    padding: 70px 35px;
  }
`;

const ContactForm = styled.div`
  padding: 90px 0px;
  padding-right: 65px;

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
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    margin-top: 2rem;

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }
  input {
    border: none;
    outline: none;
    border-bottom: 1px solid #8e7861;
    color: #fff;
    font-size: 15px;
    padding-top: 15px;
    padding-bottom: 7px;
    font-weight: 400;

    &::placeholder {
      color: #fff;
    }
  }
  textarea {
    margin-top: 2rem;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #8e7861;
    color: #fff;
    font-size: 16px;
    padding-top: 15px;
    padding-bottom: 7px;
    font-weight: 400;
    margin-bottom: 2rem;

    &::placeholder {
      color: #fff;
    }
  }

  @media only screen and (max-width: 991px) {
    padding: 0px 0px;
  }
`;

const ContactInfo = styled.div`
  padding: 90px 0px;
  div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 5rem;
    margin-left: 6rem;

    h4 {
      color: #8e7861;
      font-size: 30px;
      line-height: 1.2em;
      font-weight: 600;
      letter-spacing: 0.1em;
      font-family: "Khand4";
      text-transform: uppercase;
      margin-bottom: 0.6rem;
    }
    ul {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      li {
        margin-bottom: 0.4rem;
        a {
          color: #d7d4d4 !important;
          width: 85% !important;
          margin-bottom: 0.5rem !important;
          font-weight: 400;
          font-size: 17px !important;
          font-family: "Roboto3", sans-serif;
          line-height: 27px;
        }
      }
    }

    @media only screen and (max-width: 991px) {
      margin-bottom: 0rem;
      margin-left: 0rem;
    }
  }

  @media only screen and (max-width: 991px) {
    padding-top: 50px;
    padding-bottom: 0px;
  }
`;
