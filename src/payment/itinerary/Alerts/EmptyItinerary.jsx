"use client";

import React, { useContext } from "react";
import { Container } from "@/config/Others/Container";
import LanguageContext from "@/language/LanguageContext";
import Link from "next/link";

export default function EmptyItinerary() {
  const { languageData } = useContext(LanguageContext);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-[21vh]">
        <h2 className="text-or-100 m-b text-fs-24 pt-[1rem] max-lg:text-fs-16">
          {languageData.cart.subtitleItinerary}
        </h2>

        <p className="text-gry-100 m-s-b text-fs-15 pb-[1rem] max-lg:text-fs-12">
          {languageData.cart.textMessage}
        </p>

        <Link
          href="/"
          className="text-black px-[15px] py-[6px] text-fs-14 rounded-[42px] border-transparent bg-yw-100 m-b !m-0 hover:bg-yw-110"
        >
          {languageData.cart.buttonPay}
        </Link>
      </div>
    </Container>
  );
}
