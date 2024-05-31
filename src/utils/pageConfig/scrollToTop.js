"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";

import ButtonUp from "../../assets/icons/hotel/listing/up.svg";
// SCROLL

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export function ScrollButton() {
  const [isOccult, setOccult] = useState(false);

  const handleScrollTop = async () => {
    scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      const maxHeight = 200;

      setOccult(scrollY > maxHeight);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isOccult && (
      <div onClick={handleScrollTop}>
        <Image src={ButtonUp} alt="ButtonUp" className="fixed bottom-[9rem] right-[14px] width-[50px] h-[50px] flex justify-center items-center cursor-pointer z-[1000]" />
      </div>
    )
  );
}
