"use client";
import { useContext } from "react";
import "./style.css";
import { ThemeContext } from "g/context/ThemeContext";
import Image from "next/image";

const page = () => {
  const { mode } = useContext(ThemeContext);
  console.log(mode);
  return (
    <div
      className={`container-about ${
        mode == "dark" ? "dark-mood" : "light-mood"
      }`}
    >
      <div className="body">
        <div className="top">
          <div className="header">
            <Image
              src="/Sujon4.jpg"
              width={120}
              height={120}
              className="img"
              alt="Email"
            />
            <h3 className="name">Sujon Ali</h3>
            <h3 className="designation">Web Developer</h3>
          </div>

          <div className="contact">
            <div className="item">
              <Image
                src="/email.png"
                width={18}
                height={18}
                className="icon"
                alt="Email"
              />
              <a className="content" href="mailto:sujonali8276@gmail.com">
                sujonali8276@gmail.com
              </a>
            </div>

            <div className="item">
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
            <div className="item">
              <Image
                src="/website.png"
                width={18}
                height={18}
                className="icon"
                alt="Website"
              />
              <a className="content" href="https://www.ruet.ac.bd">
                www.ruet.ac.bd
              </a>
            </div>

            <div className="item">
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
          </div>
        </div>

        <div className="description">
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
        </div>
      </div>
    </div>
  );
};

export default page;
