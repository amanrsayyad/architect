import React from "react";
import styled from "styled-components";
import contactImg from "../assets/Images/contactBg.JPG";
import Button from "./Button";

const ContactCompo = () => {
  return (
    <ContactContainer>
      <ContactImg>
        <img src={contactImg} alt="" />
      </ContactImg>
      <ContactForm>
        <div className="data">
          <h2>Contact Us</h2>
          <form>
            <div className="grid">
              <input type="text" placeholder="Full name" />
              <input type="text" placeholder="E-mail" />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="Message"
            ></textarea>
            <Button buttonName="send message" />
          </form>
        </div>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactCompo;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  padding: 100px 0px;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

const ContactImg = styled.div`
  img {
    width: 100%;
    height: 1000px;
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
