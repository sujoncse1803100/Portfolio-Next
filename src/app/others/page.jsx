import React from "react";
import "./style.css";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <div className="main-item">
        <h1 className="title">Achievements</h1>
        <hr className="main-hr" />
        <div className="achiev">
          <p>
            <span className="achiev-title">Achievment No :</span> 01
          </p>

          <p>
            <span className="achiev-title">Title :</span> 2023 ICPC Asia Dhaka
            Regional Site Online Preliminary Contest
          </p>

          <p>
            <span className="achiev-title">ICPC Profile :</span>{" "}
            <a href="https://icpc.global/ICPCID/C5URH1KZ5BY3">
              click to see my icpc public profile
            </a>
          </p>

          <p>
            <span className="achiev-title">Cirtifications :</span>{" "}
            <a href="https://drive.google.com/drive/folders/1OpHKzMBisvEEdTJJ3L_XKmVuHSfUVaDq?usp=drive_link">
              click for the cirtificates
            </a>
          </p>
        </div>
        <div className="achiev">
          <p>
            <span className="achiev-title">Achievement No :</span> 02
          </p>

          <p>
            <span className="achiev-title">Title :</span> Successfully Complete
            a Redux Course
          </p>

          <p>
            <span className="achiev-title">
              Cirtificate and Job Recomendation letter :
            </span>
            <a href="https://drive.google.com/drive/folders/1-QGZGt5diFHHiXRc1p8hUGNHEjrLIlp4">
              click to see the details
            </a>
          </p>
        </div>
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
      <div className="languages"></div>
    </div>
  );
};

export default page;
