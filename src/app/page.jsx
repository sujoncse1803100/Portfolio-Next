"use client";
import Image from "next/image";
import styles from "./page.module.css";
import home from "../../public/home.png";
import Button from "g/components/Button/Button";
import { useContext } from "react";
import { ThemeContext } from "g/context/ThemeContext";

export default function Home() {
  const { toggle, mode } = useContext(ThemeContext);
  console.log(mode);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Beyond Pixels: Crafting Experiences with Code!
        </h1>
        <p className={styles.desc}>
          Embark on a digital odyssey as I weave seamless experiences with code,
          transcending the confines of pixels and crafting immersive web
          solutions.
        </p>
        <Button url="/projects" text="See My Projects" />
      </div>
      <div className={styles.item}>
        <Image src={home} alt="" className={styles.img} />
      </div>
    </div>
  );
}
