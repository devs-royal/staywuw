import Image from "next/image";
import { Accordion } from "react-bootstrap";
import React, { useContext, useState } from "react";

import LanguageContext from "../../language/LanguageContext";
import { useIsMobile } from "../../config/Mobile/isMobile";

import IconAdd from "../../assets/icons/utils/payment/show_more.svg";
import IconRemove from "../../assets/icons/utils/payment/show_less.svg";
import BedSharpIcon from "../../assets/icons/utils/searchBox/room-autocomplete.svg";
import Person2OutlinedIcon from "../../assets/icons/utils/searchBox/person-autocomplete.svg";

export function AccordionIM(props) {
  const { room } = props;
  const { languageData } = useContext(LanguageContext);
  const isMobile = useIsMobile();

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
      {room.map((roomI, index) => (
        <Accordion.Item
          key={index}
          eventKey={index.toString()}
          id="accordion-rooms"
          style={{ border: "none" }}
        >
          <Accordion.Header onClick={() => handleAccordionChange(index)}>
            <div className="header-accordion-itinerary">
              x{roomI.quantity} {roomI.name}{" "}
            </div>
            <div style={{ width: "0" }}>
              {activeIndex === index ? (
                <Image src={IconRemove} alt="IconRemove" className="margin-icon-accordion" />
              ) : (
                <Image src={IconAdd} alt="IconAdd" className="margin-icon-accordion" />
              )}
            </div>
          </Accordion.Header>

          <Accordion.Body className="m-pd-0">
            <>
              {roomI.occupancies &&
                roomI.occupancies.map((roomBed, index) => (
                  <div className="pb-1" key={index}>
                    <div className="info-bed-card-itinerary">
                      {languageData.modalHotel.roomTitle} {roomBed.number}
                    </div>

                    <div className={`flex-column d-flex pdg-lft-m`}>
                      {roomBed.beds && roomBed.beds.length >= 2 ? (
                        <div className={`d-flex ${!isMobile && "flex-column"}`}>
                          <div>
                            <Image src={BedSharpIcon} alt="BedSharpIcon" className="m-icon-bed" />
                            <span className="info-bed-card-itinerary m-pd-0">
                              x {roomBed.beds[0].number} {roomBed.beds[0].type}
                            </span>
                          </div>
                          <div>
                            <Image src={BedSharpIcon} alt="BedSharpIcon" className="m-icon-bed" />
                            <span className="info-bed-card-itinerary m-pd-0">
                              x {roomBed.beds[1].number} {roomBed.beds[1].type}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <>
                          {roomBed.beds && roomBed.beds.length > 0 && (
                            <div className="d-flex">
                              <Image src={BedSharpIcon} alt="BedSharpIcon" className="m-icon-bed" />
                              <span className="info-bed-card-itinerary m-pd-0">
                                x {roomBed.beds[0].number}{" "}
                                {roomBed.beds[0].type}
                              </span>
                            </div>
                          )}
                        </>
                      )}
                      <div className="people-card-itinerary">
                        <Image src={Person2OutlinedIcon} alt="Person2OutlinedIcon" width={16} height={16} className="wdt-10" />
                        <div className="info-people-card-itinerary">
                          {roomBed.adults}{" "}
                          {roomBed.adults > 1
                            ? languageData.itinerary.hotelItinerary.textAdults
                            : languageData.itinerary.hotelItinerary.textAdult}
                          {roomBed.children !== 0 ? (
                            <>
                              , {roomBed.children}{" "}
                              {roomBed.children > 1
                                ? languageData.itinerary.hotelItinerary
                                    .textChildren
                                : languageData.itinerary.hotelItinerary
                                    .textChild}{" "}
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
