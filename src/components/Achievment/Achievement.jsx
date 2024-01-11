import Image from "next/image";
import React from "react";
import "./style.css";

const Achievement = () => {
  return (
    <div className="flex flex-wrap justify-around items-center w-full">
      <div className="mx-2 achievement card1  my-4 bg-white shadow-md rounded-md overflow-hidden">
        <img src="/ICPC.png" className="logo-image p-4" alt="redux" />

        <div className="flex flex-col p-4">
          <p className="text-lg font-semibold mb-5">
            2023 ICPC Asia Dhaka Regional Site Online Preliminary Contest
          </p>

          <a href="https://icpc.global/ICPCID/C5URH1KZ5BY3">
            Click to see my icpc public profile
          </a>

          <a href="https://drive.google.com/drive/folders/1OpHKzMBisvEEdTJJ3L_XKmVuHSfUVaDq?usp=drive_link">
            Click for the certificate
          </a>
        </div>
      </div>

      <div className="mx-2 achievement card1 my-4 bg-white shadow-md rounded-md overflow-hidden">
        <img src="/Redux.jpeg" className="logo-image p-4" alt="redux" />

        <div className="flex flex-col p-4">
          <p className="text-lg font-semibold mb-5">
            Successfully Complete a Redux Course
          </p>

          <a href="https://drive.google.com/drive/folders/1-QGZGt5diFHHiXRc1p8hUGNHEjrLIlp4">
            Click to see certificate and job recomendation letter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
