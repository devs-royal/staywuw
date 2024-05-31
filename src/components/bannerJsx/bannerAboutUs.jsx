import React, { useContext } from "react";

import { Others } from "../../config/Others/imagesBanners";
import LanguageContext from "../../language/LanguageContext";

export function BannerAboutUs() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div data-aos="fade-left" className="relative h-[12rem] lg:h-[20rem]">
      <img
        className="object-cover w-full h-full"
        src={Others.bannerAbout.image}
        alt={Others.bannerAbout.alt}
        width="100%"
        height="100%"
      />
      <h1 className="absolute my-auto mx-auto inset-y-0 inset-x-0 w-auto h-max text-white text-fs-20 text-center px-8 lg:px-0 lg:text-[45px] m-b drop-shadow-xl">
        {languageData.titleBanners[Others.bannerAbout.title]}
      </h1>
    </div>
  );
}

export function BannerFaqsTop() {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="relative">
      <img
        src={Others.bannerFqs.image}
        alt={Others.bannerFqs.alt}
        width="100%"
      />
      <h1 className="absolute text-white m-b text-fs-30 md:text-[45px] !text-wrap top-0 left-0 right-0 bottom-0 my-auto mx-auto w-max h-max">
        {languageData.titleBanners[Others.bannerFqs.title]}
      </h1>
    </div>
  );
}

export function BannerFaqsDown() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="relative mt-8 mb-3">
      <img
        src={Others.bannerHelp.image}
        alt={Others.bannerHelp.image}
        width="100%"
        className="h-[7rem] md:h-full object-cover"
      />
      <div className="absolute h-max my-auto mx-0 top-0 bottom-0 ml-3 w-[76%] md:w-[68%] pl-[30px] md:pl-[60px] lg:pl-[95px]">
        <h2 className="text-bl-100 m-b text-fs-14 md:text-fs-23 lg:text-fs-30">
          {languageData.titleBanners[Others.bannerHelp.title]}
        </h2>

        <h4 className="m-s-b text-fs-10 md:text-fs-17 text-gry-100 lg:text-fs-20">
          {languageData.titleBanners[Others.bannerHelp.paragraph]}{" "}
          <a
            target="_blank"
            href="mailto:info@StayWuw.com"
            className="cursor-pointer m-b hover:text-or-100 no-underline text-gry-100"
          >
            {languageData.titleBanners.titleEmail}
          </a>{" "}
          {languageData.titleBanners[Others.bannerHelp.text]}{" "}
          <a
            href="tel:8009530342"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer m-b hover:text-or-100 no-underline text-gry-100"
          >
            {languageData.titleBanners.titleNumber}
          </a>
        </h4>
      </div>
    </div>
  );
}
