import moment from "moment";
import Image from "next/image";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
import React, { useContext, useState } from "react";

import { useCartAxios } from "./CartAxios";
import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
import IconDate from "../../assets/icons/utils/payment/date.svg";
import IconTour from "../../assets/icons/utils/navigation/tour.svg";
import IconPerson from "../../assets/icons/utils/payment/person.svg";

export default function CartTour(props) {
  const { tourGetCart, cartId, onUpdateData } = props;

  const { removeActivityById } = useCartAxios();
  const [loadingTours, setLoadingTours] = useState({});
  const [showDelete, setShowDelete] = useState({});
  const { languageData } = useContext(LanguageContext);

  const handleDeleteClick = (tour) => {
    setLoadingTours((prevLoadingTours) => ({
      ...prevLoadingTours,
      [tour.id]: true,
    }));
    const activityId = tour.id;

    axiosWithInterceptor
      .delete(`v1/carts/${cartId}/activity/${activityId}`)
      .then((response) => {
        removeActivityById(activityId);
        onUpdateData();
      })
      .catch((error) => {
        console.error("Error al eliminar la actividad:", error);
      })
      .finally(() => {
        setLoadingTours({});
      });

    const updatedShowDelete = { ...showDelete };
    updatedShowDelete[tour.id] = false;
    setShowDelete(updatedShowDelete);
  };

  const toggleDelete = (tourId) => {
    const updatedShowDelete = { ...showDelete };
    updatedShowDelete[tourId] = !updatedShowDelete[tourId];
    setShowDelete(updatedShowDelete);
  };

  const handleCardClick = (tourId) => {
    const updatedShowDelete = { ...showDelete };
    updatedShowDelete[tourId] = !updatedShowDelete[tourId];
    setShowDelete(updatedShowDelete);
  };

  return (
    <>
      {tourGetCart.activities.map((tour, index) => (
        <div key={index} className="position-relative">
          <div className="cart-card" onClick={() => handleCardClick(tour.id)}>
            <div className="cart-date">
              <div>{moment(tour.date).format("DD/MM/YY")}</div>
            </div>

            <div className="cart-title-information">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="cart-title-type">
                  {languageData.cart.titleTour}
                </span>
                <span>
                  <span
                    className="cart-card-delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDelete(tour.id);
                    }}
                  >
                    x
                  </span>
                </span>{" "}
              </div>
              <div className="cart-destination">{tour.destination}</div>
            </div>

            <div className="cart-type-element">
              <Image src={IconTour} alt="icon tour" />
              {languageData.cart.titleTour}
            </div>

            <div className="cart-information-reservation">
              {tour.name && (
                <div className="cart-subtitle-type">
                  {tour.name.length > 25
                    ? `${tour.name.substring(0, 25)}...`
                    : tour.name}
                </div>
              )}

              <div className="cart-detail-information">
                <span className="cart-text-content">
                  <Image src={IconDate} alt="icon date"/>{" "}
                  <span className="cart-text-detail">
                    {moment(tour.date).format("DD/MM/YY")}
                  </span>
                </span>

                <span className="cart-text-content">
                  <Image src={IconPerson} alt="icon person"/>{" "}
                  <span className="cart-text-detail">{tour.tourists}</span>
                </span>
              </div>
            </div>
            {showDelete[tour.id] && (
              <div
                className="delete-card-new"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteClick(tour);
                }}
              >
                {languageData.cart.remove}
              </div>
            )}
          </div>

          {loadingTours[tour.id] && (
            <Box
              className="box-container-modal-tour-cart"
              sx={{ display: "flex" }}
            >
              <CircularProgress className="louder-modal-tour-cart" />
            </Box>
          )}
        </div>
      ))}
    </>
  );
}
