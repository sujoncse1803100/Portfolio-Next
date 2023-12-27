"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 3,
    title: "Skills",
    url: "/skills",
  },
  {
    id: 4,
    title: "Others",
    url: "/others",
  },
  {
    id: 5,
    title: "About Me",
    url: "/aboutme",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Querist
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link, index) => (
          <Link key={index} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
