import React from "react";
import "./style.css";
import Image from "next/image";
import Contact from "../Contact/Contact";
import Achievement from "../Achievment/Achievement";

const Others = () => {
  return (
    <div className="">
      <div className="main-item">
        <h1 className="title">Achievements</h1>
        <hr className="main-hr" />
        <Achievement />
      </div>
      <div className="main-item">
        <h1 className="title">Education</h1>
        <hr className="main-hr" />
        <div className="school">
          <div className="desc">
            <h2 className="sub-title">BSc</h2>
            <hr className="hr" />
            <p>
              <strong>Institution : </strong>
              Rajshahi University of Engineering & Technology
            </p>

            <p>
              <strong>Major : </strong>
              Computer Science and Engineering
            </p>

            <p>
              <strong>CGPA : </strong>
              3.05 out of 4.00
            </p>
          </div>
          <div className="img">
            <Image
              src="/Logo_RUET.png"
              width={100}
              height={100}
              className="logo"
              alt="Telephone"
            />
          </div>
        </div>
        <div className="school">
          <div className="img">
            <Image
              src="/Logo_RGCC.jpg"
              width={100}
              height={100}
              className="logo"
              alt="Telephone"
            />
          </div>
          <div className="desc">
            <h2 className="sub-title">HSC</h2>
            <hr className="hr" />
            <p>
              <strong>Institution : </strong>
              Rajshahi Govt. City College
            </p>

            <p>
              <strong>Division : </strong>
              Science
            </p>

            <p>
              <strong>CPA : </strong>
              5.00 out of 5.00
            </p>
          </div>
        </div>
      </div>
      <div className="main-item">
        <h1 className="title">Find Me</h1>
        <hr className="main-hr" />

        <Contact />
      </div>
    </div>
  );
};

export default Others;
