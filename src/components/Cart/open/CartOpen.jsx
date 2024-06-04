"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import CartT from "../CartT";
import CartMobile from "./CartMobile";
import { useCartAxios } from "../CartAxios";

export default function CartOpen() {
  const [cartUid, setCartUid] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const { fetchData, totalItemsInCart } = useCartAxios();

  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //CLICK OCCURRED OUTSIDE THE DIVE, CLOSE THE DIV
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpenCart(false);
    }
  };

  // OBTAIN UID CART
  useEffect(() => {
    handleUid();
  }, []);

  useEffect(() => {
    if (cartUid) {
      fetchData(cartUid);
    }
  }, [openCart]);

  const handleUid = () => {
    const uidCart = localStorage.getItem("uid-cart");
    if (uidCart) {
      const { uid } = JSON.parse(uidCart);
      setCartUid(uid);
    }
  };

  return (
    <div ref={ref} className="relative cursor-pointer ml-[20px]">
      {totalItemsInCart ? (
        <div
          className="!m-0 flex relative"
          onClick={() => setOpenCart(!openCart)}
        >
          <Image
            className="w-auto h-auto"
            src={`${process.env.NEXT_PUBLIC_URL}icons/cart/cart-o.svg`}
            width={26}
            height={22}
            alt="icon-cart-active"
          />
          <div className="absolute top-[-15px] right-[6px] z-[0]">
            <div className="relative flex h-[14px] w-[14px]">
              <span className="animate-ping absolute h-[10px] w-[10px] rounded-full bg-or-100 opacity-75 top-0 left-0 right-0 bottom-0 mx-auto my-auto" />
              <span className="relative inline-flex rounded-full h-[14px] w-[14px] bg-or-100"></span>
              <span className="absolute inline-flex h-full w-full text-white m-b text-[9px] flex items-center justify-center top-0 left-0 right-0 bottom-0 mx-auto my-auto">
                {totalItemsInCart}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <Image
          src={`${process.env.NEXT_PUBLIC_URL}icons/cart/cart-b.svg`}
          width={26}
          height={22}
          className="w-auto h-auto"
          alt="icon-cart"
          onClick={() => setOpenCart(!openCart)}
        />
      )}

      {/* MOBILE */}
      {openCart && <CartMobile closeCart={() => setOpenCart(false)} />}

      {/* DESKTOP */}
      <div
        className={`transition-opacity ease-in duration-300 ${
          openCart ? "opacity-100" : "opacity-0"
        }`}
      >
        {openCart && <CartT closeCart={() => setOpenCart(false)} />}
      </div>
    </div>
  );
}
