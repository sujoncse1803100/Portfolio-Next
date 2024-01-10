"use client";

import Link from "next/link";
import React, { useState } from "react";
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
  // {
  //   id: 4,
  //   title: "Others",
  //   url: "/others",
  // },
  // {
  //   id: 5,
  //   title: "About Me",
  //   url: "/aboutme",
  // },
];

const Navbar = () => {
  const session = useSession();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <Link href="/">Querist</Link>

        <div className="flex space-x-4">
          <DarkModeToggle />
          <div className="hidden md:flex space-x-4">
            {links.map((link, index) => (
              <Link key={index} href={link.url}>
                {link.title}
              </Link>
            ))}
            {session.status === "authenticated" && (
              <button onClick={signOut}>Logout</button>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isNavOpen ? "" : "hidden"}`}>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="block mb-2 hover:text-red-500"
          >
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button onClick={signOut}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
