import React, { useState,useContext } from "react";
import { useRouter } from "next/navigation";

// import ModalHotel from "../../../pages/Modal/ModalHotel";
import LanguageContext from "../../../language/LanguageContext";
import { useCartAxios } from "../../../components/Cart/CartAxios";
import UpdateAutocomplete from "../../../config/Others/UpdateAutocomplete";
import axiosWithInterceptor from "../../../config/Others/axiosWithInterceptor";

export default function UnavailableCardHotel(props) {
  const { languageData } = useContext(LanguageContext);
  const { destination } = props;
  const roomData = [{ adults: 2, children: [] }];
  const router = useRouter();
  const { fetchData } = useCartAxios();
  const [fetchSend, setFetchSend] = useState(false);

  const sendDataSearch = (destination) => {
    const dataLocalSend = destination;
    UpdateAutocomplete({ dataLocalSend });
  };

  //   LISTING
  const sendListingHotel = (destination) => {
    handleDeleteClick();
    const encodedRoomData = encodeURIComponent(JSON.stringify(roomData));

    const requestBody = {
      code: destination.destinationCode,
      "check-in": destination.checkIn,
      "check-out": destination.checkOut,
      occupancies: encodedRoomData,
      type: "destination",
      destination: destination.destinationName,

    };

    sendDataSearch(destination);

    // PUSH RESULT HOTEL
    const query = new URLSearchParams(requestBody).toString();

    setTimeout(() => {
      router.push(`/resultHotel?${query}`);
    }, 1200);
  };

  // MODAL
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [requestDataModal, setRequestDataModal] = useState(null);
  const [selectedHotelKey, setSelectedHotelKey] = useState(null);

  const sendOpenModal = (destination) => {
    handleDeleteClick();
    setShowTooltip(true);

    const requestBody = {
      code: destination.key,
      checkIn: destination.checkIn,
      checkOut: destination.checkOut,
      occupancies: [
        {
          adults: 2,
          children: [],
        },
      ],
      type: "destination",
    };

    setRequestDataModal(requestBody);

    const requestBodyJSON = JSON.stringify(requestBody);
    localStorage.setItem("requestBody", requestBodyJSON);

    setSelectedHotelKey(destination.code);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);

    if (fetchSend) {
      fetchData(cartUid);
    }
  };

  // DELETED CART HOTEL

  const searchParams = new URLSearchParams(window.location.search);
  const cartUid = searchParams.get("uid");
  const cartHotelId = destination.code;

  const handleDeleteClick = () => {
    axiosWithInterceptor
      .delete(`v1/carts/${cartUid}/hotel/${cartHotelId}`)
      .then((response) => {
        setFetchSend(true);

        // if (cartUid) {
        //   fetchData(cartUid);
        // }

        // handlePriceFunction();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="buttons-unavailable-hotel">
        <button
          onClick={() => sendOpenModal(destination)}
          className="btn-update-hotel"
        >
          {languageData.unavailableCardHotel.updateDate}
        </button>

        <button
          onClick={() => sendListingHotel(destination)}
          className="btn-update-hotel"
        >
          {languageData.unavailableCardHotel.changeHotel}
        </button>
      </div>

      {showModal && (
        // <ModalHotel
        //   show={showModal}
        //   onHide={handleCloseModal}
        //   hotelKey={selectedHotelKey}
        //   showTooltip={showTooltip}
        //   requestBodyHome={requestDataModal}
        // />
        <div>h</div>
      )}
    </>
  );
}
