import React, { useEffect, useState } from "react";
import { ProjectHead, ProjectGrid, ProjectCard } from "../../utils/styles";
import HeaderPages from "../HeaderPages";
import AOS from "aos";
import "aos/dist/aos.css";

const Visualisation = () => {
  const [data, setData] = useState();

  const tokenName = JSON.parse(localStorage.getItem("TOKEN"));

  useEffect(() => {
    fetch(
      "https://www.fyxarchitects.in/api/data/GetProjectListByCategoryId?CategoryId=4"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.data);
      });

    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  return (
    <div>
      <HeaderPages active3="active" />
      <ProjectHead>
        <h2>Visualisation</h2>
      </ProjectHead>
      <ProjectGrid>
        {data &&
          data.map((item) => {
            return (
              <ProjectCard to={`/project-detail/${item.ProjectId}/`}>
                <img src={item.Filepath} alt="" />
                <h5>{item.Name}</h5>
              </ProjectCard>
            );
          })}
      </ProjectGrid>
    </div>
  );
};

export default Visualisation;
