"use client";

import Lottie from "lottie-react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import LanguageContext from "@/language/LanguageContext";
import animationFailure from "@/assets/animations/failure.json";
import animationSuccess from "@/assets/animations/success.json";
import animationLoading from "@/assets/animations/loadingFly.json";

const AnimationContent = ({ animationData, languageData, closeModal }) => {
  if (animationData === "LoadingData") {
    return (
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
    );
  }

  if (animationData === "SuccessData") {
    return (
      <>
        <Lottie
          className="w-[185px] h-[185px] mb-[20px]"
          animationData={animationSuccess}
        />
        <span className="text-fs-20 m-s-b text-grn-100 mb-[8px]">
          {languageData.alertsPayment.textAlert.PE}
        </span>
        <p className="text-fs-12 m-m text-gry-100 text-center mb-[24px]">
          {languageData.alertsPayment.textSuccess}
        </p>
        <button
          className="text-white bg-grn-100 rounded-full px-[16px] py-[14px] text-fs-12 m-s-b hover:bg-grn-70 focus:outline-none"
          onClick={closeModal}
        >
          {languageData.alertsPayment.btnUnderstood}
        </button>
      </>
    );
  }

  if (animationData === "FailureData") {
    return (
      <>
        <Lottie
          className="w-[185px] h-[185px] mb-[38px]"
          animationData={animationFailure}
        />
        <span className="text-fs-20 m-s-b text-red-100 mb-[8px]">
          {languageData.alertsPayment.textAlert.PD}
        </span>
        <p className="text-fs-12 m-m text-gry-100 text-center mb-[24px]">
          {languageData.alertsPayment.textDeclinedPayment}
        </p>
        <button
          className="text-white bg-red-100 rounded-full px-[16px] py-[14px] text-fs-12 m-s-b hover:bg-red-70 focus:outline-none"
          onClick={closeModal}
        >
          {languageData.alertsPayment.btnRetry}
        </button>
      </>
    );
  }

  return null;
};

export default function AlertPayment({ animationData, isOpen, closeModal }) {
  const { languageData } = useContext(LanguageContext);
  console.log(animationData);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <div className="bg-white px-[24px] pt-[24px] pb-[48px] w-[423px] h-[485px] flex flex-col items-center justify-end relative max-sm:w-full">
                  <AnimationContent
                    animationData={animationData}
                    languageData={languageData}
                    closeModal={closeModal}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
