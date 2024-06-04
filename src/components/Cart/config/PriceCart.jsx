"use client";

import Link from "next/link";
import React, { useContext } from "react";

import { useCartAxios } from "../CartAxios";
import LanguageContext from "@/language/LanguageContext";

export default function PriceCart(props) {
  const { languageData, language } = useContext(LanguageContext);
  const { cartId } = props;

  const { totalPrice } = useCartAxios();

  const iva = totalPrice * 0.16;
  const priceIva = totalPrice * 0.84;

  const handleClickItinerary = () => {
    if (uidCart) {
      history.push(`${language}/booking?uid=${cartId}`);
      onCloseMenu();
    }
  };

  return (
    <>
      {/* PRICE CART */}
      <div className="border-t border-[#ebebeb] mt-[16px] pt-[16px] max-sm:sticky max-sm:bottom-0 max-sm:bg-white">
        <div className="flex justify-between">
          <span className="text-fs-12 text-gry-100 m-m">
            {languageData.cart.subtotal}
          </span>

          <span className="text-fs-14 text-gry-100 m-m">
            $
            {Math.floor(priceIva)
              .toLocaleString("es-MX", { currency: "MXN" })
              .replace(".00", "")}
            .<sup>{(priceIva % 1).toFixed(2).slice(2)} </sup>
          </span>
        </div>

        <div className="flex justify-between mb-[12px]">
          <span className="text-fs-12 text-gry-100 m-m">
            {languageData.booking.taxes}
          </span>

          <span className="text-fs-14 text-gry-100 m-m">
            {" "}
            $
            {Math.floor(iva)
              .toLocaleString("es-MX", { currency: "MXN" })
              .replace(".00", "")}
            .<sup>{(iva % 1).toFixed(2).slice(2)} </sup>
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-fs-14 m-s-b">{languageData.cart.total}</span>

          <span className="text-fs-18 m-s-b">
            $
            {Math.floor(totalPrice)
              .toLocaleString("es-MX", { currency: "MXN" })
              .replace(".00", "")}
            .<sup>{(totalPrice % 1).toFixed(2).slice(2)} </sup>
          </span>
        </div>

        {/* BTN */}
        <div className="flex justify-end gap-[16px] mt-[16px] mb-3">
          {/* <button className=" flex items-center text-fs-14 text-bl-100 m-s-b border-2 border-bl-100 rounded-full py-[12px] px-[16px] hover:bg-bl-100 hover:text-white">
            {languageData.cart.btnReset}
          </button> */}
          <Link
            href={`/${language}/booking?uid=${cartId}`}
            passHref
            className="flex items-center text-fs-14 text-white m-s-b bg-bl-100 rounded-full py-[12px] px-[16px] hover:bg-[#1b317d] no-underline"
          >
            {languageData.cart.btnPurchase}
          </Link>
        </div>
      </div>
    </>
  );
}
