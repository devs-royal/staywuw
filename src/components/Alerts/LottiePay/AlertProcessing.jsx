"use client";

import Lottie from "lottie-react";
import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import LanguageContext from "@/language/LanguageContext";
import animationLoading from "@/assets/animations/loadingFly.json";

export default function AlertProcessing() {
  const [isOpen, setIsOpen] = useState(true);
  const { languageData } = useContext(LanguageContext);

  function openModal() {
    setIsOpen(true);
  }

  setTimeout(() => {
    setIsOpen(false);
  }, 3000);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={openModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-fit max-w-md transform rounded-lg overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                {/* // LOTTIE PROCESSING */}
                <div className="bg-white rounded-lg shadow-3xl px-[24px] pt-[12px] pb-[47px] w-[423px] h-[485px] flex flex-col items-center gap-[8px] max-sm:w-full">
                  <Lottie
                    className="w-[300px] h-[300px]"
                    animationData={animationLoading}
                  />

                  <span className="text-fs-20 m-s-b">
                    {languageData.alertsPayment.textAlert.PP}...
                  </span>

                  <div className="flex gap-[6px] items-center">
                    <img
                      src={`${process.env.NEXT_PUBLIC_URL}icons/general/encrypted.svg`}
                      alt="icon encrypted"
                    />

                    <span className="text-fs-12 text-grn-100 m-s-b">
                      {languageData.alertsPayment.dataSafe}
                    </span>
                  </div>

                  <p className="text-fs-12 text-gry-100 m-m text-center">
                    {languageData.alertsPayment.textProcessing}
                  </p>
                </div>
                {/* // END LOTTIE PROCESSING */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
