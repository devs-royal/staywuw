"use client";

import { Container } from "@/config/Others/Container";
import LanguageContext from '@/language/LanguageContext';
import React, { useContext, useEffect, useState } from 'react'

export default function CookieBanner() {

  const { languageData } = useContext(LanguageContext);
  const [isCookieConsent, setIsCookieConsent] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (cookieConsent && cookieConsent != "true") {
      setTimer();
    } else if(!cookieConsent){
      setTimer();
    }
  }, [])

  const setTimer = () => {
    const timer = setTimeout(() => {
      setIsCookieConsent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }

  const handleAcceptCookies = () =>{
    setIsCookieConsent(false);
    localStorage.setItem("cookieConsent","true");
  }

  if (isCookieConsent) {
    return (
      <div className="w-full bg-white fixed bottom-0 left-0 border-bl-100 border-t z-[400]">

        <Container>
          <div className='flex items-center py-[1rem] max-md:flex-col max-md:gap-4'>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}general/cookies/cookie-royal.png`}
              alt={`cookie ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
              width="140"
              height="140"
            />

            <p className="w-full m-m text-fs-13 mx-[36px] mb-0 leading-5">{languageData.cookie.text}</p>

            <button
              className="flex flex-row justify-center items-center px-[32px] py-[11.5px] rounded-full border-2 border-bl-100 m-b text-bl-100 hover:!text-white hover:!bg-bl-100"
              onClick={handleAcceptCookies}
              // id="cookie-banner"
            >
              {languageData.cookie.accept}
            </button>

          </div>
        </Container>
      </div>
    );
  }
};
