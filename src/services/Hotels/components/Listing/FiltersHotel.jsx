import React, { useContext, useState } from "react";

import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import LanguageContext from "@/language/LanguageContext";

export default function FiltersHotel() {
  const { languageData } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mt-4 p-6 border border-[#EBEBEB] rounded-md bg-white">
      {/* BTN RESET */}
      <div className="flex justify-between mb-[12.5px]">
        <span className="text-fs-16 m-b">
          {languageData.titlesFilterTour.filterResults}
        </span>
        <button className="text-bl-100 text-fs-12 m-s-b">
          {languageData.titlesFilterTour.reset}
        </button>
      </div>

      <div className="border-t w-full mb-[12.5px]"></div>

      {/* ACCORDION  RANGE PRICE */}
      <Disclosure defaultOpen={isOpen}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
              <span className="m-s-b text-fs-14">
                {languageData.titlesFilterTour.priceRange}
              </span>
              <ChevronUpIcon
                className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
              />
            </Disclosure.Button>

            <Disclosure.Panel className="pb-2 pt-2 text-sm text-gray-500">
              <div className="flex  justify-between">
                <div className="flex flex-col gap-2">
                  <span className="text-gry-100 m-m text-fs-10">
                    {languageData.titlesFilterTour.minimum}
                  </span>
                  <span className="text-gry-100 m-m text-fs-10">$1500</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-gry-100 m-m text-fs-10">
                    {languageData.titlesFilterTour.maximum}
                  </span>
                  <span className="text-gry-100 m-m text-fs-10">$40,000</span>
                </div>
              </div>

              {/* RANGE */}
              {/* <div class="relative mb-6 !text-bl-100">
                <input
                  id="range"
                  type="range"
                  class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer outline-none "
                ></input>
              </div> */}
              {/*END RANGE */}

              {/* NUMBER FROM  */}
              <div className="flex justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-gry-100 m-m text-fs-10">
                    {languageData.SearchBox.tabTour.from}
                  </span>
                  <input
                    type="number"
                    className="w-[132px] border border-gry-70 rounded m-m text-fs-12 text-black py-[6px] px-[16px]"
                    placeholder={languageData.SearchBox.tabTour.from}
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-gry-100 m-m text-fs-10">
                    {languageData.titlesFilterTour.to}
                  </span>
                  <input
                    type="number"
                    className="w-[132px] border border-gry-70 rounded m-m text-fs-12 text-black py-[6px] px-[16px]"
                    placeholder={languageData.titlesFilterTour.to}
                  />
                </div>
              </div>
              {/*END NUMBER FROM  */}

              {/* BTN APPLY RANGE PRICE */}
              <div className="flex justify-end mt-3">
                <button
                  type="button"
                  className="rounded-full text-fs-12 bg-white px-[25px] py-[8.5px] m-b text-bl-100 shadow-sm !border !border-bl-100 hover:!bg-bl-100 hover:!text-white"
                >
                  {languageData.containerFilterHotel.button}
                </button>
              </div>
              {/* BTN APPLY RANGE PRICE */}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/*END ACCORDION  RANGE PRICE */}

      <div className="border-t w-full mt-[12.5px] mb-[12.5px]"></div>

      {/*ACCORDION STARS  */}
      <Disclosure defaultOpen={isOpen}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
              <span className="m-s-b text-fs-14">
                {languageData.titlesFilterHotel.Star}
              </span>
              <ChevronUpIcon
                className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
              />
            </Disclosure.Button>

            <Disclosure.Panel className="pb-2 pt-2 text-sm text-gray-500">
              <div className="flex gap-7">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-2">
                    <input
                      id="all-stars-a"
                      type="checkbox"
                      className="w-[20px] h-[20px]"
                    />
                    <label
                      for="all-stars-a"
                      className="m-m text-fs-12 cursor-pointer text-black"
                    >
                      {languageData.optionsFilterTour.allCategories}
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="five-stars"
                      className="w-[20px] h-[20px]"
                    />
                    <label
                      for="five-stars"
                      className="flex items-center gap-[4px] cursor-pointer"
                    >
                      {[...Array(5)].map((_, index) => (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_URL}icons/info/Star.svg`}
                          key={index}
                          width={10}
                          height={11}
                          alt="icon-star"
                          className="w-auto h-auto"
                        />
                      ))}
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="four-stars"
                      className="w-[20px] h-[20px]"
                    />
                    <label
                      for="four-stars"
                      className="flex items-center gap-[4px] cursor-pointer"
                    >
                      {[...Array(4)].map((_, index) => (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_URL}icons/info/Star.svg`}
                          key={index}
                          width={10}
                          height={11}
                          alt="icon-star"
                          className="w-auto h-auto"
                        />
                      ))}
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-[4px]">
                  <div className="flex gap-2 mb-1">
                    <input
                      type="checkbox"
                      id="three-stars"
                      className="w-[20px] h-[20px]"
                    />
                    <label
                      for="three-stars"
                      className="flex items-center gap-[4px] cursor-pointer"
                    >
                      {[...Array(3)].map((_, index) => (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_URL}icons/info/Star.svg`}
                          key={index}
                          width={10}
                          height={11}
                          alt="icon-star"
                          className="w-auto h-auto"
                        />
                      ))}
                    </label>
                  </div>

                  <div className="flex gap-2 mb-1">
                    <input
                      type="checkbox"
                      id="two-stars"
                      className="w-[20px] h-[20px]"
                    />
                    <label
                      for="two-stars"
                      className="flex items-center gap-[4px] cursor-pointer"
                    >
                      {[...Array(2)].map((_, index) => (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_URL}icons/info/Star.svg`}
                          key={index}
                          width={10}
                          height={11}
                          alt="icon-star"
                          className="w-auto h-auto"
                        />
                      ))}
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="one-star"
                      className="w-[20px] h-[20px]"
                    />
                    <label
                      for="one-star"
                      className="flex items-center gap-[4px] cursor-pointer"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_URL}icons/info/Star.svg`}
                        width={10}
                        height={11}
                        alt="icon-star"
                        className="w-auto h-auto"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/*END ACCORDION STARS  */}

      <div className="border-t w-full mt-[12.5px] mb-[12.5px]"></div>

      {/*ACCORDION TYPE HOTELS */}
      <Disclosure defaultOpen={isOpen}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
              <span className="m-s-b text-fs-14">
                {languageData.titlesFilterHotel.titleTypeHotel}
              </span>

              <ChevronUpIcon
                className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
              />
            </Disclosure.Button>

            <Disclosure.Panel className="pb-2 pt-2 text-sm text-gray-500">
              <div className="flex flex-col gap-2 mb-1">
                <div className="flex gap-1">
                  <input
                    id="all-category-a"
                    type="checkbox"
                    className="w-[20px] h-[20px]"
                  />
                  <label
                    for="all-category-a"
                    className="m-m text-fs-12 cursor-pointer text-black"
                  >
                    {languageData.optionsFilterTour.allCategories}
                  </label>
                </div>

                <div className="flex gap-1">
                  <input
                    id="category-Beach"
                    type="checkbox"
                    className="w-[20px] h-[20px]"
                  />
                  <label
                    for="category-Beach"
                    className="m-m text-fs-12 cursor-pointer text-black"
                  >
                    {languageData.optionsFilterHotel.beach}
                  </label>
                </div>

                <div className="flex gap-1">
                  <input
                    id="category-Family"
                    type="checkbox"
                    className="w-[20px] h-[20px]"
                  />
                  <label
                    for="category-Family"
                    className="m-m text-fs-12 cursor-pointer text-black"
                  >
                    {languageData.optionsFilterHotel.family}
                  </label>
                </div>

                <div className="flex gap-1">
                  <input
                    id="category-Romantic"
                    type="checkbox"
                    className="w-[20px] h-[20px]"
                  />
                  <label
                    for="category-Romantic"
                    className="m-m text-fs-12 cursor-pointer text-black"
                  >
                    {languageData.optionsFilterHotel.romantic}
                  </label>
                </div>
              </div>

              <Disclosure Open={isOpen}>
                {({ open }) => (
                  <>
                    <Disclosure.Panel className="pb-2 pt-1 text-sm text-gray-500">
                      <div className="flex flex-col gap-2 mb-1">
                        <div className="flex gap-1">
                          <input
                            id="category-Business"
                            type="checkbox"
                            className="w-[20px] h-[20px]"
                          />
                          <label
                            for="category-Business"
                            className="m-m text-fs-12 cursor-pointer text-black"
                          >
                            {languageData.optionsFilterHotel.business}
                          </label>
                        </div>

                        <div className="flex gap-1">
                          <input
                            id="category-Adults-Only"
                            type="checkbox"
                            className="w-[20px] h-[20px]"
                          />
                          <label
                            for="category-Adults-Only"
                            className="m-m text-fs-12 cursor-pointer text-black"
                          >
                            {languageData.optionsFilterHotel.onlyAdults}
                          </label>
                        </div>

                        <div className="flex gap-1">
                          <input
                            id="category-Pet-Friendly"
                            type="checkbox"
                            className="w-[20px] h-[20px]"
                          />
                          <label
                            for="category-Pet-Friendly"
                            className="m-m text-fs-12 cursor-pointer text-black"
                          >
                            {languageData.optionsFilterHotel.petFriendly}
                          </label>
                        </div>
                      </div>
                    </Disclosure.Panel>

                    <Disclosure.Button className="flex w-full py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span className="text-bl-100 text-fs-12 m-b underline">
                        {languageData.modalHotelOptions.buttonShowMore}
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-360 transform" : "rotate-180 transform"
                        } h-5 w-5 text-bl-100`}
                      />
                    </Disclosure.Button>
                  </>
                )}
              </Disclosure>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/*END ACCORDION TYPE HOTELS */}
    </div>
  );
}
