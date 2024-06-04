import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useContext, useState } from "react";

import LanguageContext from "../../language/LanguageContext";

const typeShared = [
  {
    value: "whatsapp",
    activeIcon: `${process.env.NEXT_PUBLIC_URL}icons/whats/whats-b-o.svg`,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/whats/whats-b.svg`,
    label: "whatsApp",
  },
  {
    value: "mail",
    activeIcon: `${process.env.NEXT_PUBLIC_URL}icons/mail/mail-b-o.svg`,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/mail/mail-b.svg`,
    label: "email",
  },
  {
    value: "link",
    activeIcon: `${process.env.NEXT_PUBLIC_URL}icons/link/link-b-o.svg`,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/link/link-b.svg`,
    label: "copyLink",
  },
];

export function ShareContainer({ smShow, handleCloseModal }) {
  const { languageData } = useContext(LanguageContext);

  const [activeIcon, setActiveIcon] = useState(null);
  const storageLanguage = localStorage.getItem("language");

  const setMessage = () => {
    switch (storageLanguage) {
      case "es":
        return "Hola, te comparto mi itinerario. ";
      case "en":
        return "Hello, I share my itinerary with you. ";
      default:
        return "Hola, te comparto mi itinerario. ";
    }
  };

  const handleMouseOver = (icon) => {
    setActiveIcon(icon);
  };

  const handleMouseOut = () => {
    setActiveIcon(null);
  };

  const handleWhatsAppClick = () => {
    const currentURL = window.location.href;
    const message = setMessage();
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message + currentURL
    )}`;

    window.open(whatsappLink, "_blank");
  };

  const handleEmailClick = () => {
    const currentURL = window.location.href;
    const subject =
      storageLanguage === "es"
        ? "PENDIENTE MENSAJE POR PARTE DE MARKETING"
        : "PENDING MESSAGE FROM MARKETING";
    const message = setMessage();
    const emailLink = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message + currentURL)}`;

    window.location.href = emailLink;
  };

  const handleCopyClick = () => {
    const currentURL = window.location.href;
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = currentURL;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setActiveIcon("link");
    // setButtonText(languageData.shareLink.copy); // Change the button text

    // setTimeout(() => {
    //   setActiveIcon(null);
    //   setButtonText(languageData.shareLink.copyLink); // Reset the button text
    // }, 2000);
  };

  const handleSharedType = (sharedType) => {
    switch (sharedType) {
      case "whatsapp":
        return handleWhatsAppClick();
      case "mail":
        return handleEmailClick();
      case "link":
        return handleCopyClick();
    }
  };

  return (
    <Transition.Root show={smShow} as={Fragment}>
      <Dialog className="relative z-[1000]" onClose={handleCloseModal}>
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 mb-auto mt-auto">
                <div className="absolute right-0 top-0 pr-4 pt-4 block">
                  <button
                    type="button"
                    className="rounded-md ng-white text-gry-400 hover:text-gry-500 focus:outline-none"
                    onClick={handleCloseModal}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="sm:flex sm:items-center sm:flex-col">
                  <h3 className="m-0 pb-[2.5rem] text-fs-16 m-b text-center">
                    {languageData.shareLink.titleShareModal}
                  </h3>

                  <div className="flex gap-x-6 flex-wrap justify-center">
                    {typeShared.map((shared, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => handleSharedType(shared.value)}
                        onMouseEnter={() => handleMouseOver(shared.value)}
                        onMouseLeave={handleMouseOut}
                      >
                        <img
                          src={
                            activeIcon === shared.value
                              ? shared.activeIcon
                              : shared.icon
                          }
                          alt={shared.label}
                          className="w-[33px] h-[33px]"
                          width={33}
                          height={33}
                        />
                        <div
                          className={`m-b text-fs-14 ${
                            activeIcon === shared.value && "text-or-100"
                          }`}
                        >
                          {languageData.shareLink[shared.label]}
                        </div>
                      </div>
                    ))}
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
