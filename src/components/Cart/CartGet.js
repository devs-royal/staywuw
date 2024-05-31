import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useContext } from "react";

import CartTour from "./CartTour";
import CartHotel from "./CartHotel";
import { useCartAxios } from "./CartAxios";
import LanguageContext from "../../language/LanguageContext";
import IconRoyal from "../../assets/icons/utils/payment/icon-royal-vacations.svg";

export default function CartGet({ onCloseMenu }) {
  const router = useRouter();
  const [cartUid, setCartUid] = useState(null);
  const { cartData, fetchData, totalPrice } = useCartAxios();
  const { languageData, language } = useContext(LanguageContext);
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

  // REDIRECT PAGE PAYMENT
  // const history = useHistory();
  const handleClickItinerary = () => {
    const uidCart = localStorage.getItem("uid-cart");
    if (uidCart) {
      const { uid } = JSON.parse(uidCart);
      const cartId = uid;
      router.push(`/${language}/booking?uid=${cartId}`);
      onCloseMenu();
    }
  };

  const handleStart = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    history.push(baseUrl);
    onCloseMenu();
  };

  const handleEmptyAlert = (statusEmpty) => {
    setCartInfo(statusEmpty);
  };

  return (
    <div className="container-cart-body">
      {/* LOGIC SEND INFO CARTS */}
      {cartInfo && (
        <div className="container-different-carts">
          {cartInfo.hotels && (
            <CartHotel
              cartId={cartUid}
              hotelGetCart={cartInfo}
              onUpdateData={fetchCartData}
              emptyClr={handleEmptyAlert}
            />
          )}

          {cartInfo.activities && (
            <CartTour
              cartId={cartUid}
              tourGetCart={cartInfo}
              onUpdateData={fetchCartData}
            />
          )}
        </div>
      )}

      {/* {isLoading && (
        <div className="loading-message">{languageData.cart.loadingText}</div>
      )} */}

      {/* {(!cartUid || (cartData && cartData.status === "CLR")) && ( */}
      {/* {(!cartData ||
        cartData.status === "CLR" ||
        (alertEmpty && alertEmpty.status === "CLR")) && (
        <>
          <IconRoyal className="margin-top" />
          <h2 className="cart-no-show">{languageData.cart.subtitleBooking}</h2>
          <p className="cart-no-text padding-bottom">
            {languageData.cart.textMessage}
          </p>
          <button className="button-start-cart" onClick={handleStart}>
            {languageData.cart.buttonPay}
          </button>
        </>
      )} */}

      {!cartInfo && (
        <>
          {/* <IconRoyal className="margin-top" /> */}
          <Image src={IconRoyal} className="margin-top" alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`} />
          <h2 className="cart-no-show">{languageData.cart.subtitleBooking}</h2>
          <p className="cart-no-text padding-bottom">
            {languageData.cart.textMessage}
          </p>
          <button className="button-start-cart m-none" onClick={handleStart}>
            {languageData.cart.buttonPay}
          </button>
        </>
      )}

      {cartInfo && (
        <>
          {/* CONTAINER PRICE CART */}
          <div className="cart-shopping-price">
            <span className="text-total-price">{languageData.cart.total}</span>
            <>
              <span className="price-number-cart-l">
                {languageData.cart.letter}
              </span>
              <span className="price-number-cart">
                $
                {Math.floor(totalPrice)
                  .toLocaleString("es-MX", { currency: "MXN" })
                  .replace(".00", "")}
                .
              </span>
              <sup className="sup-price-cart">
                {(totalPrice % 1).toFixed(2).slice(2)}{" "}
              </sup>
            </>
            <div className="taxes-include-cart">{languageData.cart.taxes}</div>
          </div>

          {/* SEND BUTTON SHOW COMPLETE CART */}
          <div className="container-buttons-send-cart">
            <button className="button-pay-cart" onClick={handleClickItinerary}>
              {languageData.cart.buttonShowComplete}
            </button>
          </div>
        </>
      )}

      <div className="swipe-up-cart" onClick={onCloseMenu}>
        <div className="line-swipe-up"></div>
      </div>
    </div>
  );
}
