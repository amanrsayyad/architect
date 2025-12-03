import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HeaderPages from "../components/HeaderPages";
import { babar1, babar2, babar3 } from "../utils/Images";

const ProjectDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [gallery, setGallery] = useState();

  const tokenName = JSON.parse(localStorage.getItem("TOKEN"));

  useEffect(() => {
    fetch(
      "https://admin.fyxarchitects.in/api/data/GetProjectListByCategoryId?CategoryId=0"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.data);
      });

    fetch(
      `https://admin.fyxarchitects.in/api/data/GetProjectGalleryById?ProjectId=${id}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGallery(data.data);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderPages active3="active" />
      <ProjectContainer>
        {data &&
          data.map((item) => {
            return (
              <>
                {item.ProjectId == id ? (
                  <>
                    <div className="header">
                      <p>Project - {item.Name}</p>
                    </div>
                    <ProjectGrid>
                      <ProjectCard>
                        {item.Filepath === null ? null : (
                          <img src={item.Filepath} alt="" />
                        )}
                        {item.HFilepath === null ? null : (
                          <img src={item.HFilepath} alt="" />
                        )}
                      </ProjectCard>
                      <ProjectCard>
                        <div className="data">
                          <h2>{item.Name}</h2>
                          <p>{item.Description}</p>
                          <ul>
                            <li>
                              <h5>CLIENT :</h5>
                              <p>{item.Client}</p>
                            </li>
                            <li>
                              <h5>AREA :</h5>
                              <p>{item.Area}</p>
                            </li>
                            <li>
                              <h5>LOCATION :</h5>
                              <p>{item.Location}</p>
                            </li>
                          </ul>
                        </div>
                      </ProjectCard>
                    </ProjectGrid>
                  </>
                ) : null}
              </>
            );
          })}
        <GalleryGrid>
          {gallery &&
            gallery.map((item) => {
              return (
                <GalleryCard>
                  <img src={item.FolderPath} alt="" />
                </GalleryCard>
              );
            })}
        </GalleryGrid>
      </ProjectContainer>
    </>
  );
};

export default ProjectDetail;

const ProjectContainer = styled.div`
  margin-top: 5.9rem;
  border-bottom: 1px solid #8e7861;
  .header {
    border-top: 1px solid #8e7861;
    border-bottom: 1px solid #8e7861;
    padding: 35px 50px;

    p {
      color: #fff;
      font-weight: 400;
      font-size: 20px !important;
      font-family: "Roboto3", sans-serif;
      line-height: 27px;
    }
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  grid-gap: 2rem;
  padding: 100px 50px;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding: 50px 15px;
  }
`;

const ProjectCard = styled.div`
  position: relative;

  .data {
    position: sticky;
    top: 15%;
  }

  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  h2 {
    color: #8e7861;
    font-size: 50px;
    line-height: 70px;
    font-weight: 500;
    letter-spacing: 0.06em;
    margin-bottom: 8px;
    font-family: "Khand1";
    text-transform: uppercase;
  }
  p {
    color: #fff;
    font-weight: 400;
    font-size: 15px;
    font-family: "Roboto3", sans-serif;
    line-height: 27px;
    letter-spacing: 0.7px;
  }
  ul {
    margin-top: 3rem;
    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 1.5rem;

      h5 {
        color: #8e7861;
        font-size: 16px;
        line-height: 1.2em;
        font-weight: 600;
        letter-spacing: 0.3em;
        font-family: "Khand1";
        text-transform: uppercase;
      }
      p {
        margin-top: -0.2rem;
        line-height: 0px !important;
        margin-left: 0.5rem;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    img {
      height: 350px;
    }
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 50px 50px;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryCard = styled.div`
  img {
    width: 100%;
    height: 500px;
    border-radius: 5px;
    object-fit: cover;
  }
`;
