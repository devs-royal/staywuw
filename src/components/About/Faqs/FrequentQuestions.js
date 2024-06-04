"use client";

import React, { useContext, useState, useEffect } from "react";

import FaqsWeb from "./Faqs";
import { Container } from "@/config/Others/Container";
import SkeletonFaqsT from "../Skeleton/SkeletonFaqsT";
import LanguageContext from "../../../language/LanguageContext";
import { BannerFaqsTop, BannerFaqsDown } from "../../bannerJsx/bannerAboutUs";


export default function FrequentQuestions() {
  
  const [activeKey, setActiveKey] = useState("0");
  const [showFaqs, setShowFaqs] = useState(false);
  const { languageData } = useContext(LanguageContext);
  const [showSkeletonFaqs, setShowSkeletonFaqs] = useState(true);
  const [openSection, setOpenSection] = useState("frequentlyQuestions");

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
      {showSkeletonFaqs && <SkeletonFaqsT/>}

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
