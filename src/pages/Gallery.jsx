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
} from "../utils/Images";
import { PageBreak } from "../utils/styles";

const Gallery = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderPages />
      <GalleryContainer>
        <GalleryGrid>
          <GalleryCard>
            <img src={babar1} alt="" />
          </GalleryCard>
          <GalleryCard>
            <img src={babar2} alt="" />
          </GalleryCard>
          <GalleryCard>
            <img src={db1} alt="" />
          </GalleryCard>
          <GalleryCard>
            <img src={babar3} alt="" />
          </GalleryCard>
          <GalleryCard>
            <img src={vita1} alt="" />
          </GalleryCard>
          <GalleryCard>
            <img src={forest1} alt="" />
          </GalleryCard>
          <GalleryCard>
            <img src={park1} alt="" />
          </GalleryCard>
          <GalleryCard>
            <img src={rb1} alt="" />
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
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
  }
`;
