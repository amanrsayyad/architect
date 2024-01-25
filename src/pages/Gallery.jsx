import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderPages from "../components/HeaderPages";
import {
  babar1,
  babar2,
  babar3,
  db1,
  forest1,
  vita1,
  park1,
  rb1,
  db2,
  db3,
  db4,
  db5,
} from "../utils/Images";
import { PageBreak } from "../utils/styles";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  return (
    <div>
      <HeaderPages />
      <GalleryContainer>
        <GalleryGrid>
          <GalleryCard data-aos="zoom-in-right" data-aos-delay="50">
            <img src={db4} alt="" />
          </GalleryCard>
          <GalleryCard data-aos="zoom-in-up" data-aos-delay="50">
            <img src={babar1} alt="" />
          </GalleryCard>
          <GalleryCard data-aos="fade-down" data-aos-delay="50">
            <img src={babar2} alt="" />
          </GalleryCard>
          <GalleryCard data-aos="fade-down" data-aos-delay="50">
            <img src={db1} alt="" />
          </GalleryCard>
          <GalleryCard data-aos="fade-down" data-aos-delay="50">
            <img src={babar3} alt="" />
          </GalleryCard>
          <GalleryCard data-aos="fade-down" data-aos-delay="50">
            <img src={db3} alt="" />
          </GalleryCard>
          <GalleryCard data-aos="fade-down" data-aos-delay="100">
            <img src={vita1} alt="" />
          </GalleryCard>
          <GalleryCard data-aos="fade-down" data-aos-delay="100">
            <img src={forest1} alt="" />
          </GalleryCard>
          <GalleryCard data-aos="fade-down" data-aos-delay="100">
            <img src={park1} alt="" />
          </GalleryCard>
          <GalleryCard data-aos="zoom-in-up" data-aos-delay="100">
            <img src={rb1} alt="" />
          </GalleryCard>
          <GalleryCard data-aos="zoom-in-up" data-aos-delay="100">
            <img src={db2} alt="" />
          </GalleryCard>
          <GalleryCard data-aos="zoom-in-up" data-aos-delay="100">
            <img src={db5} alt="" />
          </GalleryCard>
        </GalleryGrid>
      </GalleryContainer>
      <PageBreak></PageBreak>
    </div>
  );
};

export default Gallery;

const GalleryContainer = styled.div`
  margin-top: 8rem;
  margin-bottom: 3rem;
  padding: 25px 75px;

  @media only screen and (max-width: 991px) {
    padding: 25px 15px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryCard = styled.div`
  &:nth-child(2) {
    grid-column: 2/ 3;
    grid-row: 1/ 3;
  }
  &:nth-child(6) {
    grid-column: 1/ 3;
    grid-row: 3/ 4;
  }
  &:nth-child(7) {
    grid-column: 3/ 4;
    grid-row: 3/ 5;
  }
  @media screen and (max-width: 991px) {
    &:nth-child(2) {
      grid-column: 1/ 2;
      grid-row: 1/ 3;
    }
    &:nth-child(6) {
      grid-column: 1/ 2;
      grid-row: 3/ 4;
    }
    &:nth-child(7) {
      grid-column: 1/ 2;
      grid-row: 3/ 5;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
  }
`;
