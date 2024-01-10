import React from "react";
import "./style.css";
import Image from "next/image";
import DownloadButton from "./DownloadButton";

const Aboutme = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex flex-col justify-center items-center pt-8">
          <Image
            src="/Sujon4.jpg"
            width={120}
            height={120}
            className="img rounded"
            alt="Email"
          />
          <h3 className="mt-3">Sujon Ali</h3>
          <h3 className="designation">Software Engineer</h3>
        </div>
        <div className="flex flex-col  justify-center items-center space-y-3 pt-8">
          <h1>Contact</h1>
          <div className="flex space-x-3">
            <Image
              src="/github.png"
              width={18}
              height={18}
              className="icon"
              alt="Github"
            />
            <a className="content" href="https://github.com/sujoncse1803100">
              github.com/sujoncse1803100
            </a>
          </div>

          <div className="flex space-x-3">
            <Image
              src="/email.png"
              width={15}
              height={3}
              className="icon"
              alt="Email"
            />
            <a className="content" href="mailto:sujonali8276@gmail.com">
              sujonali8276@gmail.com
            </a>
          </div>

          <div className="flex space-x-3">
            <Image
              src="/call.png"
              width={18}
              height={18}
              className="icon"
              alt="Telephone"
            />
            <a className="content" href="tel:+8801782562576">
              +8801782562576
            </a>
          </div>
        </div>
      </div>
      <div className="description mt-8 mb-5">
        <p>
          📆 Since 2020, I've been on an exciting journey in the world of web
          development, and it's been a thrilling ride! As a Computer Science and
          Engineering student at Rajshahi University of Engineering &
          Technology, I've honed my skills and become a professional in this
          field.
          <br />
          🚀 I specialize in full-stack web development, creating dynamic and
          user-friendly applications. My tech toolkit includes HTML, CSS,
          Bootstrap, JavaScript, React, Redux, MongoDB, Node.js (Express.js),
          and MySQL.
          <br />
          💼 Recently, I've successfully completed multiple full-stack projects,
          demonstrating my ability to bring ideas to life and deliver top-notch
          solutions. I'm passionate about satisfying clients with my acquired
          skills, and I'm always eager to take on new challenges in the
          ever-evolving web development landscape.
          <br />
          🌟 Let's connect and explore opportunities to create innovative web
          solutions together!
        </p>
      </div>

      <DownloadButton className="bg-blue-500" />
    </div>
  );
};

export default Aboutme;
