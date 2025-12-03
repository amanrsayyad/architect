import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiArrowLongRight } from "../utils/Icons";
import { babar1, db1, forest1, vita1, rb1, park1 } from "../utils/Images";
import { Link } from "react-router-dom";

const Projects = () => {
  const [data, setData] = useState();

  const tokenName = JSON.parse(localStorage.getItem("TOKEN"));

  useEffect(() => {
    fetch(
      "https://www.fyxarchitects.in/api/data/GetProjectListByCategoryId?CategoryId=0"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.data);
      });

    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectContainer>
      {data &&
        data.map((item) => {
          return (
            <>
              {item.Isshowonhome === true ? (
                <>
                  <ProjectCard to={`/project-detail/${item.ProjectId}/`}>
                    <img src={item.Filepath} alt="" data-aos="fade-left" />
                    <div className="text">
                      {item.Name} <HiArrowLongRight className="iconArrow" />
                    </div>
                  </ProjectCard>
                </>
              ) : null}
            </>
          );
        })}
    </ProjectContainer>
  );
};

export default Projects;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .border-right {
    border-right: 1px solid #302e2c;
  }

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(Link)`
  position: relative;
  border-bottom: 1px solid #302e2c;
  border-left: 1px solid #302e2c;
  border-right: 1px solid #302e2c;
  padding: 110px;
  z-index: 100;
  overflow: hidden;

  img {
    position: absolute;
    top: 0%;
    right: 0%;
    width: 10%;
    height: 100%;
    object-fit: cover;
    z-index: 100;
    display: none;
    overflow: hidden;
  }
  &:hover {
    transition: all 1s ease-in;
    img {
      position: absolute;
      top: 0%;
      right: 0%;
      width: 100%;
      height: 100%;
      display: block;
      cursor: pointer;
      transition: all 1s ease-in;
    }
  }

  .number {
    position: absolute;
    right: 58px;
    bottom: -35px;
    font-size: 170px;
    font-weight: 100;
    line-height: 1;
    color: #211e19;
    z-index: 1;
    background-color: transparent;
    font-family: "Heebo1";

    @media only screen and (max-width: 991px) {
      font-size: 100px;
      right: 5px;
      bottom: -25px;
    }
  }
  .text {
    position: absolute;
    bottom: 17%;
    left: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8e7861;
    font-size: 20px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-family: "Khand4";
    text-transform: uppercase;

    .iconArrow {
      font-size: 30px;
      margin-left: 0.5rem;
    }

    @media only screen and (max-width: 991px) {
      font-size: 19px;
      left: 4%;

      .iconArrow {
        font-size: 20px;
        margin-left: 0.5rem;
      }
    }
  }
`;
