import Image from "next/image";
import { Form } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import {
  ProcessDataHB,
  processItineraryData,
} from "../config/processData";
import { PaymentContext } from "../context/PaymentContext";
import LanguageContext from "../../language/LanguageContext";

import HotelBlackIcon from "../../assets/icons/utils/payment/hotel-black.svg";
import HotelOrangeIcon from "../../assets/icons/utils/payment/hotel-orange.svg";

export function FormClientRH(props) {
  const {
     setRoomsRH
  } = useContext(PaymentContext);
  const { dataItinerary } = props;
  const { languageData } = useContext(LanguageContext);

  const [formData, setFormData] = useState([]);
  const processedDataRH = processItineraryData(dataItinerary);
  const processedDataHB = ProcessDataHB(dataItinerary);
  const [activeHotelIndex, setActiveHotelIndex] = useState(0);

  // VALIDATE INPUTS TYPE TEXT
  const handleKeyPress = (event) => {
    if (!/[A-Za-z ]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleKeyPressAge = (event) => {
    if (!/[0-9]/.test(event.key) || event.target.value.length >= 2) {
      event.preventDefault();
    }
  };

  // FORM INPUTS MAP
  const handleChange = (event, hotelId, roomId, occupantType, index) => {
    const { name, value } = event.target;
    const occupantKey = `${hotelId}-${roomId}-${occupantType}-${index}`;

    if (name === "age") {
      const age = Number(value);
      if (isNaN(age) || age < 0 || age > 12) {
        event.target.value = age > 12 ? 12 : age;
        return;
      }
    }

    setFormData((prevFormData) => {
      const existingIndex = prevFormData.findIndex(
        (entry) => entry.key === occupantKey
      );

      let updatedFormData = [...prevFormData];

      if (existingIndex > -1) {
        updatedFormData[existingIndex] = {
          ...updatedFormData[existingIndex],
          [name]: value,
          roomId: roomId,
        };
      } else {
        updatedFormData.push({
          key: occupantKey,
          [name]: value,
          roomId: roomId,
        });
      }

      return updatedFormData;
    });
  };

  useEffect(() => {
    handleSubmit();
  }, [formData]);

  // SEND INFO PAYMENT
  const handleSubmit = () => {
    const submissionData = formData.map(({ key, ...rest }) => rest);
    setRoomsRH(submissionData);
  };

  // NEXT ROOM
  const handleContinue = () => {
    if (activeHotelIndex < processedDataRH.length - 1) {
      setActiveHotelIndex(activeHotelIndex + 1);
    }
  };

  const getValue = (hotelId, roomId, occupantType, index, fieldName) => {
    const occupantKey = `${hotelId}-${roomId}-${occupantType}-${index}`;
    const entry = formData.find((entry) => entry.key === occupantKey);
    return entry ? entry[fieldName] || "" : "";
  };

  return (
    <>
      {processedDataRH && processedDataRH.length > 0 ? (
        // <div className="">
        <div className="form-client accordion-form">
          <h3 className="title-data">Datos de reservación</h3>

          <div className="d-flex flex-column gap-3">
            {processedDataRH.map((hotel, index) => (
              <div key={index}>
                {/* TITLE HOTEL */}
                <div
                  className={`title-rh d-flex align-items-center gap-2`}
                  onClick={() => setActiveHotelIndex(index)}
                >
                  {index === activeHotelIndex ? (
                    <Image src={HotelOrangeIcon} alt="HotelOrangeIcon" className="hotel-icon-from-o" />
                  ) : (
                    <Image src={HotelBlackIcon} alt="HotelBlackIcon" className="hotel-icon-form" />
                  )}
                  <h3>{hotel.name}</h3>
                </div>

                {/* SHOW ROOM INDEX */}
                {index === activeHotelIndex ? (
                  <>
                    <>
                      <div className="container-inputs-form">
                        {hotel.roomDetails.map((room, roomIndex) => (
                          <div key={roomIndex}>
                            {/* NAME ROOM INDEX */}
                            <span className="room-number-form">
                              {room.roomName}{" "}
                            </span>

                            {/* ADULT ARRAY INPUTS */}
                            {Array.from({ length: room.adults }).map(
                              (_, adultIndex) => (
                                <div
                                  key={`adult-${adultIndex}`}
                                  className="container-input-rh"
                                >
                                  <div className="width100">
                                    <Form.Label
                                      htmlFor="firstName"
                                      className="subtitle-form"
                                    >
                                      {languageData.booking.adult}{" "}
                                      {adultIndex + 1}
                                    </Form.Label>

                                    <input
                                      type="text"
                                      name="firstName"
                                      className="enter-data-client"
                                      placeholder={
                                        languageData.booking.clientData
                                          .placeholderName
                                      }
                                      onChange={(e) =>
                                        handleChange(
                                          e,
                                          hotel.id,
                                          room.code,
                                          "adult",
                                          adultIndex
                                        )
                                      }
                                      onKeyPress={handleKeyPress}
                                      value={getValue(
                                        hotel.id,
                                        room.code,
                                        "adult",
                                        adultIndex,
                                        "firstName"
                                      )}
                                    />
                                  </div>

                                  <div className="width100">
                                    <input
                                      type="text"
                                      name="lastName"
                                      className="enter-data-client"
                                      placeholder={
                                        languageData.booking.clientData
                                          .placeholderLastName
                                      }
                                      onChange={(e) =>
                                        handleChange(
                                          e,
                                          hotel.id,
                                          room.code,
                                          "adult",
                                          adultIndex
                                        )
                                      }
                                      onKeyPress={handleKeyPress}
                                      value={getValue(
                                        hotel.id,
                                        room.code,
                                        "adult",
                                        adultIndex,
                                        "lastName"
                                      )}
                                    />
                                  </div>
                                </div>
                              )
                            )}

                            {/* CHILDREN INPUTS */}
                            {Array.from({ length: room.children }).map(
                              (_, childIndex) => (
                                <div
                                  key={`child-${childIndex}`}
                                  className="container-input-rh"
                                >
                                  <div className="width100">
                                    {/* NAME CHILDREN INDEX */}
                                    <Form.Label
                                      htmlFor="firstName"
                                      className="subtitle-form"
                                    >
                                      {languageData.booking.children}{" "}
                                      {childIndex + 1}
                                    </Form.Label>

                                    {/* FIRST NAME CHILDREN */}
                                    <input
                                      type="text"
                                      name="firstName"
                                      className="enter-data-client"
                                      placeholder={
                                        languageData.booking.clientData
                                          .placeholderName
                                      }
                                      onChange={(e) =>
                                        handleChange(
                                          e,
                                          hotel.id,
                                          room.code,
                                          "child",
                                          childIndex
                                        )
                                      }
                                      onKeyPress={handleKeyPress}
                                      value={getValue(
                                        hotel.id,
                                        room.code,
                                        "child",
                                        childIndex,
                                        "firstName"
                                      )}
                                    />
                                  </div>

                                  {/* CHILDREN LAST NAME */}
                                  <div className="width100">
                                    <input
                                      type="text"
                                      name="lastName"
                                      className="enter-data-client"
                                      placeholder={
                                        languageData.booking.clientData
                                          .placeholderLastName
                                      }
                                      onChange={(e) =>
                                        handleChange(
                                          e,
                                          hotel.id,
                                          room.code,
                                          "child",
                                          childIndex
                                        )
                                      }
                                      onKeyPress={handleKeyPress}
                                      value={getValue(
                                        hotel.id,
                                        room.code,
                                        "child",
                                        childIndex,
                                        "lastName"
                                      )}
                                    />
                                  </div>

                                  {/* CHILDREN AGE */}
                                  <div className="width100">
                                    <input
                                      type="number"
                                      name="age"
                                      className="enter-data-client"
                                      placeholder={
                                        languageData.SearchBox.tabTour
                                          .personsActivities.age
                                      }
                                      onChange={(e) =>
                                        handleChange(
                                          e,
                                          hotel.id,
                                          room.code,
                                          "child",
                                          childIndex
                                        )
                                      }
                                      onKeyPress={handleKeyPressAge}
                                      value={getValue(
                                        hotel.id,
                                        room.code,
                                        "child",
                                        childIndex,
                                        "age"
                                      )}
                                      max={12}
                                      min={0}
                                    />
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        ))}
                      </div>

                      {/* BUTTON NEXT ROOM  */}
                      <div className="d-flex justify-content-end">
                        {activeHotelIndex < processedDataRH.length - 1 && (
                          <button
                            onClick={handleContinue}
                            className="next-form"
                          >
                            Continuar
                          </button>
                        )}
                      </div>
                    </>
                  </>
                ) : (
                  <div className="close-accordion-booking">
                    {hotel.roomDetails &&
                      hotel.roomDetails.map((value, item) => (
                        <h3 className="room-number-form" key={item}>
                          {value.roomName}
                        </h3>
                      ))}
                  </div>
                )}
              </div>
            ))}
            {
              <>
                {processedDataHB &&
                  processedDataHB.map((room, item) => (
                    <div key={item}>
                      <div className="title-rh d-flex align-items-center gap-2">
                        <Image src={HotelBlackIcon} alt="HotelBlackIcon" className="hotel-icon-from-o" />
                        <h3>
                          {room.name}{" "}
                        </h3>
                      </div>

                      <div className="close-accordion-booking">
                        <h3 className="form-not-required-rh">
                          No es necesario especificar nombre.
                        </h3>
                      </div>
                    </div>
                  ))}
              </>
            }
          </div>
        </div>
      ) : null}
    </>
  );
}
