import React, { useContext } from "react";
import style from "./style.css";
import { ThemeContext } from "g/context/ThemeContext";

const Porject = ({ projects }) => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className="project">
      <div className="desc">this is description</div>
      <div className="others">this is others</div>
    </div>
  );
};

export default Porject;
