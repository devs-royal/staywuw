import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import React, { useState, useEffect, useContext, Fragment } from "react";

import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

export function AlertRate(props) {
  const { alertShowRate, infoDataRate, cartUid } = props;
  const { languageData } = useContext(LanguageContext);

  const [smShow, setSmShow] = useState(false);

  const handleOpenModal = () => {
    setSmShow(true);
  };

  useEffect(() => {
    if (alertShowRate === true) {
      handleOpenModal();
    }
  }, [alertShowRate]);

  const handleUpdatePrice = async () => {
    const requestPayload = {
      items: infoDataRate.priceChanges.map((change) => ({
        type: "hotel",
        id: change.id,
        items: [
          {
            type: "room",
            id: change.items.id,
            price: change.items.price,
          },
        ],
      })),
    };

    try {
      const url = `v1/carts/${cartUid}/update-prices`;
      const response = await axiosWithInterceptor.post(url, requestPayload);
      if (response) {
      }
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Transition.Root show={smShow} as={Fragment}>
      <Dialog className="relative z-10" onClose={() => setSmShow(false)}>
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
              <Dialog.Panel className="px-6 pt-6 pb-[48px] w-[390px] md:w-[423px] transform overflow-hidden bg-white rounded-lg shadow-xl transition-all my-auto flex flex-col items-center">
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-70.svg`}
                  width={12}
                  height={12}
                  alt="icon-close"
                  className="cursor-pointer absolute top-[20px] right-[20px]"
                  onClick={() => setSmShow(false)}
                />

                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/general/infotipo-staywuw.svg`}
                  alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
                  width={115}
                  height={116}
                  className="w-[115px] h-[116px] mb-[67px] mt-[67px]"
                />

                <div className="m-s-b text-black text-fs-20 mb-[8px] text-center">
                  {languageData.alertsPayment.rateTitle}
                </div>

                <div className="text-center text-fs-12 text-gry-70 mb-[24px] border-b border-gry-50 pb-[10px]">
                  {languageData.alertsPayment.rateText}
                </div>

                <div className="w-full text-[0.938rem] m-b text-black mt-[25px]">
                  <ul>
                    {infoDataRate &&
                      infoDataRate.priceChanged &&
                      infoDataRate.priceChanges.map((service, index) => (
                        <li key={index}>{service.name}</li>
                      ))}
                  </ul>
                </div>

                <button
                  className="rounded-full bg-bl-100 text-fs-12 m-s-b text-center text-white py-[14px] px-[16px] "
                  type="button"
                  onClick={() => handleUpdatePrice()}
                >
                  {languageData.alertsPayment.buttonRate}
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export function AlertUpdate(props) {
  const { priceChanged } = props;

  const [smShow, setSmShow] = useState(false);
  const { languageData } = useContext(LanguageContext);

  const handleOpenModal = () => {
    setSmShow(true);
  };

  useEffect(() => {
    if (priceChanged === true) {
      handleOpenModal();
    }
  }, []);
  return (
    <Transition.Root show={smShow} as={Fragment}>
      <Dialog className="relative z-10" onClose={() => setSmShow(false)}>
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
              <Dialog.Panel className="px-6 pt-6 pb-[48px] w-[390px] md:w-[423px] transform overflow-hidden bg-white rounded-lg shadow-xl transition-all my-auto flex flex-col items-center">
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-70.svg`}
                  width={12}
                  height={12}
                  alt="icon-close"
                  className="cursor-pointer absolute top-[20px] right-[20px]"
                  onClick={() => setSmShow(false)}
                />

                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/general/infotipo-staywuw.svg`}
                  alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
                  width={115}
                  height={116}
                  className="w-[115px] h-[116px] mb-[67px] mt-[67px]"
                />

                <div className="m-s-b text-black text-fs-20 text-center !mb-2">
                  {languageData.alertsPayment.updatePrice}
                </div>

                <div className="m-m text-gry-70 text-fs-12 text-center">
                  {languageData.alertsPayment.rateReservation}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export function AlertNoAvailability(props) {
  const { isNoAvailability } = props;
  const [smShow, setSmShow] = useState(false);
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    if (isNoAvailability === true) {
      setSmShow(true);
    }
  }, []);

  return (
    <Transition.Root show={smShow} as={Fragment}>
      <Dialog className="relative z-10" onClose={() => setSmShow(false)}>
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
              <Dialog.Panel className="px-6 pt-6 pb-[48px] w-[390px] md:w-[423px] transform overflow-hidden bg-white rounded-lg shadow-xl transition-all my-auto flex flex-col items-center">
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-70.svg`}
                  width={12}
                  height={12}
                  alt="icon-close"
                  className="cursor-pointer absolute top-[20px] right-[20px]"
                  onClick={() => setSmShow(false)}
                />

                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/general/infotipo-staywuw.svg`}
                  alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
                  width={115}
                  height={116}
                  className="w-[115px] h-[116px] mb-[67px] mt-[67px]"
                />

                <div className="text-black text-center m-s-b text-fs-20 !mb-2">
                  {languageData.confirmation.bookingData.alertNoAvailability}
                </div>

                <div className="m-m text-fs-12 text-gry-70 text-center">
                  {
                    languageData.confirmation.bookingData
                      .alertNoAvailabilityText
                  }
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
