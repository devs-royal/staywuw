import { useRouter } from "next/navigation";
import React, { useState, useEffect, useContext, useRef } from "react";

import LanguageContext from "@/language/LanguageContext";
import { useCartAxios } from "@/components/Cart/CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import DetailTourContext from "@/services/Tours/context/DetailTourContext";
import { AlertTourDetails } from "../../AlertsTour/AlertTours";

export default function AddCartTour(props) {
  const { totalPrice, tourists, isLoader, setIsLoader } = props;
  const { fetchData } = useCartAxios();
  const [alert, setAlert] = useState({
    alert: false,
    type: null,
    title: null,
    message: null,
  });
  const router = useRouter();

  const { languageData, language } = useContext(LanguageContext);
  const { dataTour, hourTour, dayTour, selectModality } =
    useContext(DetailTourContext);


  const handleAddCartTour = async () => {
    try {
      setIsLoader(true);
      const uidCart = localStorage.getItem("uid-cart");
      let cartId = "";

      if (uidCart) {
        const { uid } = JSON.parse(uidCart);
        cartId = uid;
      }

      const saveRequestCart = {
        activityId: dataTour.code,
        date: dayTour.date,
        currency: "MXN",
        tourists: tourists,
        modality: selectModality.id,
        price: totalPrice,
        address: dataTour.address,
        cancelPolicies: dataTour.cancelPolicies,
        ...(hourTour && hourTour.time ? { time: hourTour.time } : {}),
      };

      if (cartId) {
        saveRequestCart.cartId = cartId;
      }

      const response = await axiosWithInterceptor.post(
        "v1/carts/activity",
        saveRequestCart
      );

      const cartUid = response.data.cart;
      const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000;
      localStorage.setItem(
        "uid-cart",
        JSON.stringify({ uid: cartUid, expirationTime })
      );
      // setShowContent(2);
      fetchData(cartUid);

      setTimeout(() => {
        router.push(`/${language}/booking?uid=${cartUid}`);
        // setIsLoader(false);
      }, 1000);
    } catch (error) {
      setIsLoader(false);
      console.error(error);
      if (error.response.status >= 405) {
        setAlert({
          alert: true,
          type: "error",
          title: languageData.Alerts.tour.tourDetails.title,
          message: languageData.Alerts.tour.tourDetails.message,
        });
      }
      //   if (
      //     error.response.data.message ===
      //       "La fecha de salida debe ser 2 días después de la fecha actual" ||
      //     error.response.data.message ===
      //       "ApiStatusCode: 422, ApiMessage: not availability, ApiInternalCode: 422"
      //   ) {
      //     setErrorAxios({ error: true, message: error.response.data.message });
      //   }
    }
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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
      setAlert({ alert: false, type: null, title: null, message: null });
    }
  };

  useEffect(() => {
    // Verifica si al menos un elemento tiene una parte decimal mayor a 0
    const hasValidTourists = tourists.some((tourist) => {
      const decimalPart = Number(`0.${tourist.split(".")[1]}`);
      return decimalPart > 0;
    });
    setIsButtonDisabled(!hasValidTourists);
  }, [tourists]);

  return (
    <>
      <button
        onClick={() => handleAddCartTour()}
        className={`rounded-full w-full py-3.5 text-black text-center text-fs-12 m-s-b bg-yw-100 hover:bg-yw-110 ${
          isButtonDisabled || isLoader ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isButtonDisabled || isLoader}
      >
        {isLoader
          ? languageData.cart.loadingText
          : languageData.modalTour.OccupancyTours.reserve}
      </button>
      {alert.alert && (
        <div ref={ref}>
          <AlertTourDetails alertInfo={alert} />
        </div>
      )}
    </>
  );
}
