"use client";

import axios from "axios";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { CarouselImage } from "./CarouselImage";

const icons = [
  {
    href: "https://www.facebook.com/RoyalVacationsMx",
    url: "icons/face/face-bg-b.svg",
    alt: "icon-facebook",
  },
  {
    href: "https://www.instagram.com/royalvacationsmx/",
    url: "icons/insta/insta-bg-b.svg",
    alt: "icon-instagram",
  },
  {
    href: "https://www.linkedin.com/company/royal-vacations-mexico/",
    url: "icons/in/in-bg-b.svg",
    alt: "icon-linkedin",
  },
  {
    href: "https://www.tiktok.com/@royalvacationsmx",
    url: "icons/tiktok/tiktok-bg-b.svg",
    alt: "icon-tiktok",
  },
];

export function FormContactClient() {
  const [open, setOpen] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const { languageData } = useContext(LanguageContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const phoneRegex = /^\d{0,10}$/;
  const nameRegexIndividual = /^[A-Za-z ]{1,40}$/;

  let inactivityTimer;

  const resetInactivityTimer = () => {
    clearTimeout(inactivityTimer);
    // inactivityTimer = setTimeout(() => setOpen(true), 1000);
    inactivityTimer = setTimeout(() => setOpen(true), 130000);
  };

  const handleActivity = () => {
    resetInactivityTimer();
  };

  const handleScroll = () => {
    handleActivity();
  };

  // VALIDATION OPEN MODAL
  useEffect(() => {
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("scroll", handleScroll);

    resetInactivityTimer();

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(inactivityTimer);
    };
  }, []);

  // ADD NAME
  const addNamePerson = (e) => {
    const value = e.target.value;
    if (nameRegexIndividual.test(value) || value === "") {
      setName(value);
    }
  };

  // ADD PHONE
  const addPhone = (event) => {
    const value = event.target.value;
    if (phoneRegex.test(value) || value === "") {
      setPhone(event.target.value);
    }
  };

  useEffect(() => {
    const isValid =
      name &&
      phone &&
      nameRegexIndividual.test(name) &&
      phoneRegex.test(phone) &&
      phone.length === 10;

    if (isValid) {
      setIsValidate(true);
    } else {
      setIsValidate(false);
    }
  }, [name, phone]);

  // SEND MESSAGE TO TELEGRAM GROUP
  const handleSubmit = () => {
    axios
      .post(
        "https://api.telegram.org/bot6413785790:AAFbmewlmcgnSngod5XWED_h8Iib7mlCJiE/sendMessage",
        {
          chat_id: "-1002030618875",
          text: `⚡ NUEVO CONTACTO  ⚡ \n \nNOMBRE: ${name}\nTELEFONO: ${phone} `,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setOpen(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="rounded-lg relative transform overflow-hidden bg-white px-[24px] pt-[8px] pb-[24px] md:p-[24px] shadow-xl transition-all sm:my-8 sm:w-[925px] sm:p-6 mb-auto mt-auto">
                <div className="flex gap-x-[24px] relative pt-[26px] md:pt-[0] flex-col md:flex-row max-md:items-center">
                  <button className="border-0 focus:outline-none absolute right-0 top-0 w-4 h-4 z-[2]" onClick={() => setOpen(false)}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-70.svg`}
                      alt="close icon modal"
                      width={16}
                      height={16}
                      className="w-full h-full"
                    />
                  </button>

                  {/* md:w-[452px] */}
                  <div className="relative w-full md:w-2/4">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/general/fly-alert.svg`}
                      alt="fly icon alert"
                      width={229}
                      height={168}
                      className="absolute left-[-1rem] top-[-1rem] z-[2]"
                    />

                    <CarouselImage/>
                  </div>

                  <div className="pt-[28px] px-[20px] w-[401px]">
                    <h1 className="m-0 text-fs- text-black m-b text-center text-[40px] px-[10px] leading-[50px]">
                      {languageData.specialOffer.title}
                    </h1>

                    <div className="flex gap-[3px] flex-wrap justify-center mt-2 mb-4">
                      <span className="text-gry-70 m-s-b text-fs-14 text-nowrap">
                        {languageData.alertHelp.description.one}
                      </span>

                      <span className="text-bl-100 m-s-b text-fs-14 text-nowrap">
                        {languageData.alertHelp.description.two}
                      </span>
                      
                      <span className="text-gry-70 m-s-b text-fs-14 text-nowrap">
                        {languageData.alertHelp.description.three}
                      </span>

                      <span className="text-gry-70 m-s-b text-fs-14 text-nowrap">
                        {languageData.alertHelp.description.for}
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-y-2">
                      {/* NAME INPUT */}
                      <div className="relative">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                          alt="adult icon"
                          width={16}
                          height={17}
                          className="opacity-55 grayscale absolute left-4 top-0 bottom-0 my-auto"
                        />

                        <input
                          type="text"
                          className="w-[318px] focus:outline-none border border-gry-70 rounded py-[20px] pl-[42px] pr-4 placeholder:m-b placeholder:text-gry-70 placeholder:text-fs-14 placeholder:p-0"
                          placeholder={languageData.alertHelp.name}
                          value={name}
                          onChange={(event) => addNamePerson(event)}
                        />
                      </div>

                      {/* PHONE INPUT */}
                      <div className="relative">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_URL}icons/tel/tel-b.svg`}
                          alt="adult icon"
                          width={16}
                          height={17}
                          className="opacity-55 grayscale absolute left-4 top-0 bottom-0 my-auto"
                        />

                        <input
                          type="text"
                          className="w-[318px] focus:outline-none border border-gry-70 rounded py-[20px] pl-[42px] pr-4 placeholder:m-b placeholder:text-gry-70 placeholder:text-fs-14 placeholder:p-0"
                          placeholder={languageData.alertHelp.name}
                          value={phone}
                          onChange={(event) => addPhone(event)}
                        />
                      </div>

                      <button
                        disabled={!isValidate}
                        className={`${
                          !isValidate
                            ? "cursor-not-allowed bg-or-70"
                            : "hover:bg-or-70 bg-or-100"
                        } rounded-full w-[318px] text-white m-s-b text-fs-14 text-center py-[15px]`}
                        onClick={handleSubmit}
                      >
                        {languageData.alertHelp.sendNow}
                      </button>
                    </div>

                    <div className="flex flex-col items-center gap-y-4 mt-5">
                      <h2 className="text-gry-100 text-fs-12 m-m m-0 h-[28px]">
                        {languageData.specialOffer.followNetwork}
                      </h2>

                      {/* SOCIAL NETWORK */}
                      <div className="flex gap-x-6 justify-center">
                        {icons.map((icon, index) => (
                          <a href={icon.href} target="_blank" key={index}>
                            <Image
                              src={`${process.env.NEXT_PUBLIC_URL}${icon.url}`}
                              alt={icon.alt}
                              className="h-6 w-6"
                              width={24}
                              height={24}
                            />
                          </a>
                        ))}
                      </div>

                      {/* PHONE NUMBER */}
                      <a
                        className="m-0 text-gry-70 text-fs-12 m-s-b cursor-pointer hover:text-or-100"
                        href="tel:8009530342"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {languageData.navBar.contact}
                        <span className="m-b ml-1">800 953 0342</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
