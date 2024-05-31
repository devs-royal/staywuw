"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

// import Cart from "@/hooks/Cart";
import { HamburgerMenu } from "./HamburgerMenu";
import { Container } from "@/config/Others/Container";
import { LanguageSelector } from "@/language/LanguageSelector";

import CartOpen from "../Cart/open/CartOpen";
import { SelectCurrency } from "./SelectCurrency";
import { NavigationConfig } from "@/config/Navigation/NavigationConfig";
import LanguageContext from "@/language/LanguageContext";

export default function NavigationDesktop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentActiveIcon, setCurrentActiveIcon] = useState(null);
  const { languageData, language } = useContext(LanguageContext);

  // GET ACTIVITY SERVICE
  const routerActual = NavigationConfig();

  useEffect(() => {
    setCurrentActiveIcon(routerActual);
  }, [routerActual]);

  return (
    <div className="relative md:top-[-22px] mt-[38px] md:mt-0">
      <Container>
        {/* fix tailwind */}
        <header className="relative pt-0 pb-[20px] flex flex-col gap-y-[1rem]">
          <div className="hidden md:flex justify-end items-center">
            <SelectCurrency />
            <span className="pl-[19px] pr-[19px]">|</span>
            <LanguageSelector />

            {/* <Cart /> */}
            <CartOpen />
          </div>

          <nav
            className="flex w-full items-center justify-between "
            aria-label="Global"
          >
            <div className="flex md:flex-1 justify-between">
              <Link
                className="m-1.5"
                href={`${process.env.NEXT_PUBLIC_HOME}`}
                passHref
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}royal/principal-logo.svg`}
                  alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} logo`}
                  width={200}
                  height={100}
                />
              </Link>
              <div className="hidden md:items-center md:flex">
                {" "}
                <Link
                  href={`${process.env.NEXT_PUBLIC_HOME}`}
                  passHref
                  className="flex items-center pr-4 text-gry-100 m-b hover:text-or-100 no-underline	"
                >
                  {" "}
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-b.svg`}
                    alt="done green"
                    className="pr-2"
                  />
                  <span
                    className={`${
                      currentActiveIcon === "hotels" && "text-or-100"
                    }`}
                  >
                    {languageData.SearchBox.tabHotel.hotel}
                  </span>
                </Link>
                <Link
                  href={`/${language}/tour`}
                  passHref
                  className="flex items-center pr-4 text-gry-100 m-b hover:text-or-100 no-underline	"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-b.svg`}
                    alt="done green"
                    className="pr-2"
                  />
                  <span
                    className={`${
                     currentActiveIcon === "tours" || currentActiveIcon === "tour" ? "text-or-100"
                    : ''}`}
                  >
                    Tours
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex gap-x-[18px] md:hidden">
              {/* <Cart /> */}
              <CartOpen />

              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="flex flex-col gap-y-[3px]">
                  <span className="rounded-lg bg-or-100 w-[16px] h-[3px]" />
                  <span className="rounded-lg bg-or-100 w-[16px] h-[3px]" />
                  <span className="rounded-lg bg-or-100 w-[16px] h-[3px]" />
                </div>
              </button>
            </div>

            <HamburgerMenu
              open={mobileMenuOpen}
              setMobileMenuOpen={() => setMobileMenuOpen(false)}
            />
          </nav>
        </header>
      </Container>
    </div>
  );
}
