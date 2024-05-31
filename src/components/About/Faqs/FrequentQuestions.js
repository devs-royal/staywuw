"use client";

import React, { useContext, useState, useEffect } from "react";

import { BannerFaqsTop, BannerFaqsDown } from "../../bannerJsx/bannerAboutUs";

import FaqsWeb from "./Faqs";
import { Container } from "@/config/Others/Container";
import { useIsMobile } from "../../../config/Mobile/isMobile";
import LanguageContext from "../../../language/LanguageContext";
import { SkeletonFaqs } from "../../../utils/skeleton/SkeletonFaqs";

// import MetaFrequentQuestions from "../../components/Meta/MetaFrequentQuestions";

export default function FrequentQuestions() {
  const { languageData } = useContext(LanguageContext);

  const isMobile = useIsMobile();

  const [showSkeletonFaqs, setShowSkeletonFaqs] = useState(true);
  const [showFaqs, setShowFaqs] = useState(false);

  const [openSection, setOpenSection] = useState("frequentlyQuestions");
  const [activeKey, setActiveKey] = useState("0");

  useEffect(() => {
    setActiveKey("0");
  }, [openSection]);

  const handleAccordionClick = (sectionKey, id) => {
    if (activeKey === id) {
      //CLICK ON THE OPEN QUESTION, CLOSE IT
      setActiveKey(null);
    } else {
      setActiveKey(id);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowFaqs(true);
      setShowSkeletonFaqs(false);
    }, 2000);
  });

  return (
    <>
      {showSkeletonFaqs && <SkeletonFaqs />}
      {showFaqs && (
        <Container>
          {/* <MetaFrequentQuestions /> */}
          <BannerFaqsTop />
          <h1 className="m-b text-fs-20 md:text-[2rem] mt-[1rem]">
            {languageData.faqs.titleFaqs}
          </h1>
          <div className="m-m text-fs-15 md:text-[1rem] pb-[2.5rem]">
            {languageData.faqs.textFaqs}
          </div>

          <FaqsWeb
            setOpenSection={setOpenSection}
            openSection={openSection}
            activeKey={activeKey}
            handleAccordionClick={handleAccordionClick}
          />

          <BannerFaqsDown />
        </Container>
      )}
    </>
  );
}
