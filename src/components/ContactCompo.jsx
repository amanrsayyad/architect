import React, { useState } from "react";
import styled from "styled-components";
import contactImg from "../assets/Images/Sketch2.png";
import aboutImg from "../assets/Images/Sketch1.png";
import { ButtonStyle, PopupContainer } from "../utils/styles";
import { VscChromeClose } from "react-icons/vsc";

const ContactCompo = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
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
        console.log(data.data.message);
        setRes(data.data.message);
        setShow(true);
        setName("");
        setEmail("");
        setMessage("");
      });
  };

  return (
    <>
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
      <ContactContainer>
        <ContactImg>
          <img src={aboutImg} alt="" />
        </ContactImg>
        <ContactForm>
          <div className="data">
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
          </div>
        </ContactForm>
      </ContactContainer>
    </>
  );
};

export default ContactCompo;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  padding: 100px 0px;
  padding-bottom: 80px;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

const ContactImg = styled.div`
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;

    @media only screen and (max-width: 991px) {
      height: 100%;
      padding: 0px 15px;
    }
  }
`;

const ContactForm = styled.div`
  position: relative;
  padding: 90px 0px;
  padding-right: 65px;

  .data {
    position: sticky;
    top: 20%;
  }

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
    padding-right: 0px;
    padding: 0px 20px;
  }
`;
