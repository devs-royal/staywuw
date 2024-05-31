import Image from "next/image";
import { Accordion } from "react-bootstrap";
import React, { useContext, useState } from "react";

import LanguageContext from "../../language/LanguageContext";

import IconAdd from "../../assets/icons/utils/payment/show_more.svg";
import IconRemove from "../../assets/icons/utils/payment/show_less.svg";
import BedSharpIcon from "../../assets/icons/utils/searchBox/room-autocomplete.svg";

export function AccordionCP(props) {
  const { itemHotel, roomItem } = props;
  const { languageData } = useContext(LanguageContext);

  const [activeIndex, setActiveIndex] = useState(null);
  const handleAccordionChange = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <Accordion>
      {itemHotel.rooms &&
        itemHotel.rooms.map((roomArray, indexR) =>
          roomArray.map(
            (room, index) =>
              room.name !== "NA" &&
              indexR === roomItem && (
                <div key={index}>
                  <span className="occupancies-text">
                    {languageData.confirmation.cardHotel.typeRoom}
                  </span>

                  <Accordion.Item
                    eventKey={index.toString()}
                    id="accordion-rooms"
                    style={{ border: "none" }}
                  >
                    <Accordion.Header
                      onClick={() => handleAccordionChange(index)}
                    >
                      <div className="header-accordion-itinerary">
                        x{room.quantity} {room.name}{" "}
                      </div>

                      <div style={{ width: "0" }}>
                        {activeIndex === index ? (
                          <Image
                            src={IconRemove}
                            alt="IconRemove"
                            className="margin-icon-accordion"
                          />
                        ) : (
                          <Image
                            src={IconAdd}
                            alt="IconAdd"
                            className="margin-icon-accordion"
                          />
                        )}
                      </div>
                    </Accordion.Header>

                    <Accordion.Body className="m-pd-0">
                      <>
                        {room.occupancies && (
                          <div className="d-flex gap-3 align-items-baseline">
                            <div className="d-flex flex-column gap1">
                              {room.occupancies.map((roomBed, index) => (
                                <div className="ps-3" key={index}>
                                  <div className="m-text-room-number">
                                    {languageData.modalHotel.roomTitle}{" "}
                                    {roomBed.number}
                                  </div>

                                  <div className="d-flex">
                                    <div>
                                      {roomBed.beds &&
                                        roomBed.beds.map((typeBed, index) => (
                                          <div key={index}>
                                            <Image
                                              src={BedSharpIcon}
                                              alt="BedSharpIcon"
                                              className="m-icon-bed"
                                            />
                                            <span className="info-bed-card-itinerary m-pd-0">
                                              x {typeBed.number} {typeBed.type}
                                            </span>
                                          </div>
                                        ))}
                                    </div>

                                    <div className="people-card-itinerary">
                                      <div className="info-people-card-itinerary confirmation-pay-hotel">
                                        {roomBed.adults}{" "}
                                        {roomBed.adults > 1
                                          ? languageData.itinerary
                                              .hotelItinerary.textAdults
                                          : languageData.itinerary
                                              .hotelItinerary.textAdult}
                                        {roomBed.children !== 0 ? (
                                          <>
                                            , {roomBed.children}{" "}
                                            {roomBed.children > 1
                                              ? languageData.itinerary
                                                  .hotelItinerary.textChildren
                                              : languageData.itinerary
                                                  .hotelItinerary
                                                  .textChild}{" "}
                                          </>
                                        ) : null}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/* <div> */}
                            <span className="m-text-room-number d-flex flex-column">
                              {languageData.confirmation.cardHotel.typeFood}
                              {room.occupancies.map((roomBed, item) => (
                                <span
                                  key={item}
                                  className="info-people-card-itinerary confirmation-pay-hotel mb-3"
                                >
                                  {roomBed.food
                                    ? roomBed.food
                                    : languageData.cardMoving.textTypeInf}
                                </span>
                              ))}
                            </span>
                            {/* </div> */}
                          </div>
                        )}
                      </>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              )
          )
        )}
    </Accordion>
  );
}
