"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import EmptyCart from "../utils/EmptyCart";
import PriceCart from "../config/PriceCart";
import { useCartAxios } from "../CartAxios";
import { CartItem } from "../config/CartItem";

export default function CartMobile() {
  const [open, setOpen] = useState(true);
  const [cartUid, setCartUid] = useState(null);
  const { cartData, fetchData } = useCartAxios();
  const [cartInfo, setCartInfo] = useState(
    cartData && cartData.cartItems ? cartData.cartItems : null
  );

  // OBTAIN UID CART
  useEffect(() => {
    handleUid();
  }, []);

  useEffect(() => {
    if (cartData && cartData.cartItems && cartData.cartItems.length === 0) {
      setCartInfo(null);
    } else if (cartData && cartData.cartItems) {
      setCartInfo(cartData.cartItems);
    }
  }, [cartData]);

  const handleUid = () => {
    const uidCart = localStorage.getItem("uid-cart");
    if (uidCart) {
      const { uid } = JSON.parse(uidCart);
      setCartUid(uid);
    }
  };

  // GET AXIOS CONTEXT CART
  const fetchCartData = () => {
    fetchData(cartUid);
  };

  const handleEmptyAlert = (statusEmpty) => {
    setCartInfo(statusEmpty);
  };

  return (
    <Transition.Root show={open} as={Fragment} className="sm:hidden">
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-[21rem]">
                  <div className="flex h-[100vh] flex-col bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base m-b text-fs-16 text-[#1a202c]">
                          Revisa tu itinerario
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-3 flex-1 px-4 sm:px-6 flex flex-col">
                      {/*CART MOBILE */}
                      {cartInfo && (
                        <>
                          <div className="h-[65vh]  overflow-y-auto overflow-x-clip scroll-page-gry">
                            {["hotels", "activities", "transportations"].map(
                              (type) =>
                                cartInfo[type] &&
                                cartInfo[type].map((item, index) => (
                                  <CartItem
                                    key={`${type}-${index}`}
                                    item={item}
                                    itemType={type}
                                    cartId={cartUid}
                                    // setIsLoader={setIsLoader}
                                    // isLoader={isLoader}
                                  />
                                ))
                            )}
                          </div>

                          {/* PRICE CART */}
                          <PriceCart cartId={cartUid} />
                        </>
                      )}

                      {!cartInfo && (
                        <div>
                          <EmptyCart />
                        </div>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
