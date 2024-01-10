import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2024 Sujon Ali. All rights reserved.</div>
      <div className={styles.social}>
        <a href="https://www.facebook.com/sujonali386/">
          <Image
            src="/1.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Facebook Account"
          />
        </a>
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
