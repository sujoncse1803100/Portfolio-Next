"use client";
import { useState } from "react";
import styles from "./page.module.css";
import projectDetails from "g/utils/projectDetails";
import { animated, useSpring } from "react-spring";

const Layout = ({ children }) => {
  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: false,
    reverse: flip,
    from: { number: 0 },
    number: projectDetails.length,
    delay: 1000,
  });

  return <div>{children}</div>;
};

export default Layout;
