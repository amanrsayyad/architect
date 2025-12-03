import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "../utils/Icons";
import projectBg2 from "../assets/Images/projectBg2.jpg";
import projectBg5 from "../assets/Images/projectBg5.jpg";
import projectBg6 from "../assets/Images/projectBg6.jpg";
import { db4 } from "../utils/Images";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollTrigger from "react-scroll-trigger";

const ProjectImg = () => {
  const [trueImg, setTrueImg] = useState(false);
  const [gallery, setGallery] = useState();

  const tokenName = JSON.parse(localStorage.getItem("TOKEN"));

  useEffect(() => {
    fetch("https://admin.fyxarchitects.in/api/data/GetWorkGalaryList", {
      headers: {
        Authorization: `bearer ${tokenName}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGallery(data.data);
      });

    AOS.init();
  }, []);

  return (
    <ProjectContainer>
      <ScrollTrigger
        onEnter={() => setTrueImg(true)}
        onExit={() => setTrueImg(false)}
      >
        {trueImg && (
          <ProjectGrid>
            {gallery &&
              gallery.map((item) => {
                return (
                  <>
                    {item.IsShowOnHomePage == true ? (
                      <ProjectCard data-aos="zoom-in-right" data-aos-delay="50">
                        <img src={item.Filepath} alt="" />
                      </ProjectCard>
                    ) : null}
                  </>
                );
              })}
          </ProjectGrid>
        )}
        <Link to="/gallery">
          View All Work <HiArrowLongRight className="iconArrow" />
        </Link>
      </ScrollTrigger>
    </ProjectContainer>
  );
};

export default ProjectImg;

const ProjectContainer = styled.div`
  position: relative;
  overflow: hidden;
  a {
    position: absolute;
    bottom: 13%;
    right: 2%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: "Roboto2", sans-serif;
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    display: inline-flex;
    vertical-align: middle;
    flex-wrap: wrap;
    color: #8e7861;
    background-color: transparent;
    text-align: center;

    .iconArrow {
      font-size: 25px;
      margin-left: 0.5rem;
    }

    @media only screen and (max-width: 991px) {
      bottom: 4%;
      right: 6%;
    }
  }
`;

const ProjectGrid = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 100px 15px;
  overflow: hidden;

  @media only screen and (max-width: 991px) {
    flex-direction: column;
    padding-bottom: 155px;
  }
`;

const ProjectCard = styled.div`
  &:nth-child(1) {
    img {
      width: 400px;
      height: 550px;
      object-fit: cover;
      animation: img1 1.5s;
      animation-timing-function: ease-out;
      animation-direction: alternate;
      margin-left: -10rem;
    }
    @keyframes img1 {
      0% {
        transition: all 0.5s ease-in;
        height: 300px;
        margin-left: 0rem;
      }
      100% {
        height: 550px;
        margin-left: -10rem;
      }
    }
  }

  &:nth-child(2) {
    margin-left: 10px;
    img {
      width: 600px;
      height: 500px;
      object-fit: cover;
      animation: img2 1.5s;
      animation-timing-function: ease-out;
      animation-direction: alternate;
    }
    @keyframes img2 {
      0% {
        transition: all 0.5s ease-in;
        height: 300px;
        margin-left: 0rem;
      }
      100% {
        height: 500px;
      }
    }
  }

  &:nth-child(3) {
    margin-left: 10px;
    img {
      width: 500px;
      height: 450px;
      object-fit: cover;
      animation: img3 1.5s;
      animation-timing-function: ease-out;
      animation-direction: alternate;
    }
    @keyframes img3 {
      0% {
        transition: all 0.5s ease-in;
        height: 300px;
        margin-left: 0rem;
      }
      100% {
        height: 450px;
      }
    }
  }

  &:nth-child(4) {
    margin-left: 10px;
    img {
      width: 500px;
      height: 350px;
      object-fit: cover;
      animation: img4 1.5s;
      animation-timing-function: ease-out;
      animation-direction: alternate;
      margin-left: -0rem;
    }
    @keyframes img4 {
      0% {
        transition: all 0.5s ease-in;
        height: 300px;
        margin-left: 0rem;
      }
      100% {
        height: 350px;
        margin-left: -0rem;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    img {
      height: 350px;
    }
    &:nth-child(1) {
      img {
        margin-left: -0rem;
        width: 100%;
      }
      @keyframes img1 {
        0% {
          transition: all 0.5s ease-in;
          height: 300px;
          margin-left: 0rem;
        }
        100% {
          height: 550px;
          margin-left: -0rem;
        }
      }
    }
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      margin-left: 0px;

      img {
        width: 100%;
      }
    }
  }
`;
