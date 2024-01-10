"use client";
import styles from "./page.module.css";
import projectDetails from "g/utils/projectDetails";
import "./style.css";

const page = () => {
  return (
    <div className={`${styles.projects}`}>
      {projectDetails?.map((project, index) => {
        return (
          <div key={index} className={`flex flex-col md:flex-row md:project`}>
            <div className={`md:w-1/2 ${styles.desc}`}>
              <p className="projectNo">
                <strong>Porject No: </strong>
                {project.id < 10 ? `0${index + 1}` : project.id}
              </p>
              <p className="name">
                <strong>Name: </strong>
                {project.name}
              </p>
              <p className="text">
                <strong>Description: </strong>
                {project.about}
              </p>

              <p>
                <strong>Technologies: </strong>
                {project.technology}
              </p>

              <p>
                <strong>Live Site: </strong>
                <a href={`${project.URL}`}>click for live site</a>
              </p>

              <p>
                <strong>Code : </strong>
                <a href={project.github}>github repository</a>
              </p>
              <br />
            </div>

            <div className={`md:w-1/2 ${styles.others}`}>
              <img
                src={`/portfolio/${project.img}`}
                className={`${styles.image}`}
                alt="Image"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default page;
