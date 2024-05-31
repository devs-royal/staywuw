import React, { useState, useEffect, useContext } from "react";

import ConfirmationEmail from "../Email/ConfirmationEmail";
import LanguageContext from "../../language/LanguageContext";
import { useIsMobileNew } from "../../config/Mobile/isMobile";
import { useCartAxios } from "../../components/Cart/CartAxios";
import { StepperContext } from "../context/steeperContext";
import { ShareContainer } from "@/utils/booking/ShareContainer";
import SkeletonConfirmPay from "../../utils/skeleton/SkeletonConfirmPay";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
import StructureItineraryWeb from "../itinerary/others/StructureItineraryWeb";
import Image from "next/image";
export default function ConfirmReservation() {
  const isMobile = useIsMobileNew();
  const { fetchData, cartData, setCartData, setItinerary, setTotalItemsInCart } = useCartAxios();
  const [dataConfirmation, setDataConfirmation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [smShow, setSmShow] = useState(false);

  const { languageData } = useContext(LanguageContext);
  const { setInfoReservation } = useContext(StepperContext);

  const handleOpenModal = () => {
    setSmShow(true);
  };

  const handleCloseModal = () => {
    setSmShow(false);
  };

  const handleIconClick = () => {
    if (!smShow) {
      handleOpenModal();
    } else {
      handleCloseModal();
    }
  };

  useEffect(() => {
    scrollToTop();
    const fetchDataConfirmation = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const language = localStorage.getItem("language") || "es";
        const url = "/v1/booking/";
        const searchParams = new URLSearchParams(window.location.search);
        const cartId = searchParams.get("uid");
        const response = await axiosWithInterceptor.get(`${url}${cartId}`);
        setDataConfirmation(response.data);
        setInfoReservation(response.data);
        setIsLoading(false);

        const sentEmail = response.data.sent;
        if (!sentEmail) {
          const searchParams = new URLSearchParams(window.location.search);
          const uid = searchParams.get("uid");
          const newRequestBody = {
            cartId: uid,
            lang: language,
            status: 1,
          };
          sendConfirmationEmail(newRequestBody);
        }

        const token = localStorage.getItem("token");
        const iat = localStorage.getItem("iat");
        const exp = localStorage.getItem("exp");

        localStorage.clear();

        if (token) localStorage.setItem("token", token);
        if (iat) localStorage.setItem("iat", iat);
        if (exp) localStorage.setItem("exp", exp);
        handleEmptyClear();
      } catch (error) {
        console.error("Error al realizar la petición:", error);
        setIsLoading(false);
      }
    };

    fetchDataConfirmation();
  }, []);

  const sendConfirmationEmail = (requestBody) => {
    ConfirmationEmail({ requestBody });
  };

  const handleEmptyClear = () => {
    fetchData(null);
    setItinerary(null);
    setTotalItemsInCart(null);
    setCartData(null);
  };

  return (
    <div className="m-h-hotel-confirmation">
      {isLoading && <SkeletonConfirmPay />}
      {/* <SkeletonConfirmPay/> */}
      {dataConfirmation && (
        <>
          {dataConfirmation && (
            <>
              <StructureItineraryWeb dataItinerary={dataConfirmation} />

              {/* TOTAL PRICE CONFIRMATION */}
              {!isMobile && (
                <div className="orange-total-p-c !pr-4 !rounded-br-lg">
                  <span className="total-confirmation-r">
                    No. de confirmación:{" "}
                    <div className="green-container-c">
                      {dataConfirmation.booking.reference}
                    </div>
                  </span>

                  <div className="flex flex-row gap-4 items-center">
                    <span className="price-num-confirmation">
                      {languageData.confirmation.total} $
                      {Math.floor(dataConfirmation.totalPrice)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .<sup>{(dataConfirmation.totalPrice % 1).toFixed(2).slice(2)}</sup>
                    </span>

                    <button className="bg-or-100 rounded-full flex gap-2 py-2 px-4" onClick={handleIconClick}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_URL}icons/share/share-w.svg`}
                        alt="icon-share"
                        width={16}
                        height={18}
                      />

                      <span className="m-b text-white text-fs-12">Compartir Itinerario</span>
                    </button>
                    <ShareContainer smShow={smShow} handleCloseModal={handleCloseModal} />
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
