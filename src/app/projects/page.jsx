"use client";
import styles from "./page.module.css";
import projectDetails from "g/utils/projectDetails";

const page = () => {
  return (
    <div className={styles.projects}>
      {projectDetails?.map((project, index) => {
        return (
          <div className={styles.project}>
            <div className={styles.desc}>
              <p className="projectNo">
                <strong>Porject No: </strong>
                {project.id < 10 ? `0${project.id}` : project.id}
              </p>
              <p className="name">
                <strong>Name: </strong>
                {project.name}
              </p>
              <p className="text">
                <strong>Description: </strong>
                {project.about}
              </p>
            </div>
            <div className={styles.others}>
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
                <a href="#">github repository</a>
              </p>
              <br />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default page;
