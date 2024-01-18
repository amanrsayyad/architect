import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <ButtonStyle>{props.buttonName}</ButtonStyle>;
};

export default Button;

const ButtonStyle = styled.button`
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
`;
