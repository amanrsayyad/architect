import React, { useEffect, useState } from "react";
import { ProjectHead, ProjectGrid, ProjectCard } from "../../utils/styles";
import HeaderPages from "../HeaderPages";
import AOS from "aos";
import "aos/dist/aos.css";

const Interior = () => {
  const [data, setData] = useState();

  const tokenName = JSON.parse(localStorage.getItem("TOKEN"));

  useEffect(() => {
    fetch(
      "https://admin.fyxarchitects.in/api/data/GetProjectListByCategoryId?CategoryId=2"
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
        <h2>Interior</h2>
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

export default Interior;
