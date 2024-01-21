import styled from "styled-components";

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

    @media only screen and (max-width: 991px) {
      height: 20vh;
    }
  }
`;
