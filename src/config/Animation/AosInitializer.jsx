"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return null;
};

export default AosInitializer;
