"use client";

import { useContext, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { SelectCurrency } from "./SelectCurrency";
import { XMarkIcon } from "@heroicons/react/24/outline";
import LanguageContext from "@/language/LanguageContext";
import { LanguageSelector } from "@/language/LanguageSelector";
import { NavigationConfig } from "@/config/Navigation/NavigationConfig";
import Link from "next/link";

export function HamburgerMenu({ open, setMobileMenuOpen }) {
  const [currentActiveIcon, setCurrentActiveIcon] = useState(null);

  const { languageData, language } = useContext(LanguageContext);
  // GET ACTIVITY SERVICE
  const routerActual = NavigationConfig();

  useEffect(() => {
    setCurrentActiveIcon(routerActual);
  }, [routerActual]);

  return (
    <Dialog
      as="div"
      className="md:hidden"
      open={open}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="flex gap-x-4 mt-4 py-6">
              <SelectCurrency />

              <LanguageSelector />
            </div>

            <div className="space-y-7 py-6">
              <Link
                href={`${process.env.NEXT_PUBLIC_HOME}`}
                passHref
                className="flex items-center pr-4 text-gry-100 m-b hover:text-or-100 no-underline	"
              >
                {" "}
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-b.svg`}
                  alt="hospedaje-menu"
                  className="pr-2"
                />
                <span
                  className={`${
                    currentActiveIcon === "hotel" && "text-or-100"
                  }`}
                >
                  {languageData.SearchBox.tabHotel.hotel}
                </span>
              </Link>

              <Link
                href={`${language}/tour`}
                passHref
                className="flex items-center pr-4 text-gry-100 m-b hover:text-or-100 no-underline	"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-b.svg`}
                  alt="tour-menu"
                  className="pr-2"
                />
                <span
                  className={`${ currentActiveIcon === "tours" && "text-or-100"}`}
                >
                  Tours
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
