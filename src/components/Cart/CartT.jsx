"use client";

import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import CartTourT from "./carts/CartTourT";
import { useCartAxios } from "./CartAxios";
import CartHotelT from "./carts/CartHotelT";
import PriceCart from "./config/PriceCart";
import EmptyCart from "./utils/EmptyCart";
import LanguageContext from "@/language/LanguageContext";
// import LanguageContext from "@/language/LanguageContext";
export default function CartT(props) {
  const { closeCart } = props;
  const [cartUid, setCartUid] = useState(null);
  const { cartData, fetchData } = useCartAxios();
  const [isLoader, setIsLoader] = useState(false);
  const [cartInfo, setCartInfo] = useState(
    cartData && cartData.cartItems ? cartData.cartItems : null
  );
  const { languageData } = useContext(LanguageContext);

  // OBTAIN UID CART
  useEffect(() => {
    handleUid();
  }, []);

  useEffect(() => {
    if (
      cartData &&
      cartData.cartItems &&
      cartData.cartItems.activities &&
      cartData.cartItems.activities.length > 0 ||
      cartData &&
      cartData.cartItems.hotels &&
      cartData.cartItems.hotels.length > 0 
    ) {
      setCartInfo(cartData.cartItems);
    } else {
      setCartInfo(null);
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

  // const handleEmptyAlert = (statusEmpty) => {
  //   setCartInfo(statusEmpty);
  // };

  return (
    <>
      <div className="absolute right-[-15px] top-[48px] max-sm:hidden">
        <div className="relative p-[16px] pt-[25px] w-[416px] bg-white rounded-lg !shadow-[0_4px_40px_0_rgba(102,102,102,0.25)] z-[2] before:content-[' '] before:z-[4] before:w-[3rem] before:h-[3rem] before:block before:bg-[url(https://sandboxmexico.com/assets/icons/general/ellipse.svg)] before:absolute before:left-[88%] before:top-[-14px] before:bg-no-repeat">
          {/* TITLE AND BTN CLOSE */}
          <div className="flex justify-between border-b border-[#ebebeb] mb-[16px] pb-[25px]">
            <span className="m-b text-fs-16 text-[#1a202c]">
              {languageData.cart.checkItinerary}
            </span>
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-100.svg`}
              width={8}
              height={8}
              alt="icon-close"
              className="mr-2 cursor-pointer"
              onClick={() => closeCart()}
            />
          </div>

          {cartInfo && (
            <>
              <div
                className={`max-h-[364px] relative overflow-y-auto scroll-page-gry `}
              >
                {cartInfo.hotels && (
                  <CartHotelT
                    cartId={cartUid}
                    hotelGetCart={cartInfo}
                    setIsLoader={setIsLoader}
                    isLoader={isLoader}
                    // emptyClr={handleEmptyAlert}
                    // onUpdateData={fetchCartData}
                  />
                )}

                {cartInfo.activities && (
                  <CartTourT
                    cartId={cartUid}
                    tourGetCart={cartInfo}
                    setIsLoader={setIsLoader}
                    isLoader={isLoader}
                    // onUpdateData={fetchCartData}
                  />
                )}
              </div>

              {/* PRICE */}
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
    </>
  );
}
