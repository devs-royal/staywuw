import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { Dialog, DialogContent, Rating, Slide } from "@mui/material";
import React, { forwardRef, useContext, useEffect, useState } from "react";

import TypeRoom from "../../../ModalHotel/TypeRoom";
import SearchRoom from "../../../Search/SearchRoom";
import { ShortInfoHotelModal } from "./ShortInfoHotelModal";
import ModalHotelOptions from "../../../Modal/ModalHotelOptions";
import LanguageContext from "../../../../language/LanguageContext";
import { transformDistance } from "../../../../utils/hotel/helpers";
import SkeletonModal from "../../../../utils/skeleton/SkeletonModal";
import { GalleryHotelMobile } from "../../../ModalHotel/GalleryHotel";
import { SkeletonRooms } from "../../../../utils/skeleton/SkeletonRoom";
import { SelectedRoomsContext } from "../../../../pages/Modal/ModalHotel";

import "../../../../assets/styles/mobile/DialogSearchHotel.css";
import Line from "../../../../assets/images/others/group 75.jpg";
import CloseIcon from "../../../../assets/icons/hotel/modal/close_active.svg";

// TRANSITION DIALOG
const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function DialogModalHotel(props) {
  const {
    show,
    onHide,
    showContent,
    hotelModal,
    handleDataUpdate,
    setChangeDate,
    changeDate,
    selectedRooms,
    setSelectedRooms,
    handleAddDetail,
    newRequestBody,
    handleShowContentChange,
    showTooltip,
    loading,
  } = props;

  const { languageData } = useContext(LanguageContext);

  const [isRoomSelected, setIsRoomSelected] = useState(false);
  useEffect(() => {
    if (selectedRooms.length > 0) {
      setIsRoomSelected(true);
    } else {
      setIsRoomSelected(false);
    }
  }, [selectedRooms]);

  const [totalRoomsSelected, setTotalRoomsSelected] = useState(null);
  useEffect(() => {
    if (newRequestBody !== null) {
      setTotalRoomsSelected(newRequestBody.occupancies.length);
    }
  }, [newRequestBody]);

  return (
    <Dialog
      open={show}
      TransitionComponent={Transition}
      keepMounted
      onClose={onHide}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent className="custom-dialog-content">
        <div className="m-component-info modal-hotel">
          <>
            {showContent === 1 ? (
              <div>
                {hotelModal && hotelModal.hotel ? (
                  <>
                    <div className="header-dialog-modal">
                      <div className="line-principal-home position-relative">
                        <img
                          src={Line}
                          alt={languageData.allAlt.altBannerNavigation}
                          height="9px"
                          width="100%"
                          loading="lazy"
                        />
                      </div>

                      {/* INFO HEADER DIALOG */}
                      <div className="container">
                        <div className="close-icon-title-hotel-modal d-flex flex-column">
                          <div className="d-flex justify-content-end">
                            <button
                              className="bg-transparent border border-0 pe-auto"
                              onClick={onHide}
                            >
                              <Image src={CloseIcon} alt="Close Icon" />
                            </button>
                          </div>

                          <h1
                            className="modal-hotel-title"
                            data-aos="fade-right"
                          >
                            {hotelModal.hotel.name}
                          </h1>
                        </div>

                        <div className="container-start-modal">
                          <span>
                            <Rating
                              name="size-small"
                              style={{ padding: "5px 0px" }}
                              defaultValue={0}
                              value={hotelModal.hotel.stars}
                              size="small"
                              max={hotelModal.hotel.stars}
                              readOnly
                            />
                          </span>

                          <span className="modal-hotel-destination">
                            {`${hotelModal.hotel.destination}, México.`}{" "}
                            {hotelModal.hotel.address}{" "}
                          </span>

                          {hotelModal.hotel.closestInterestPointDistance && (
                            <span
                              className="modal-hotel-subtext"
                              style={{ padding: "1px 0px" }}
                            >
                              {`${
                                languageData.cardHotel.to
                              } ${transformDistance(
                                hotelModal.hotel.closestInterestPointDistance
                              )} ${languageData.cardHotel.from} ${
                                hotelModal.hotel.closestInterestPointName
                              }`}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <>
                        <div className="m-container-carousel-modal-hotel">
                          <GalleryHotelMobile hotelModal={hotelModal.hotel} />
                        </div>

                        {showTooltip === true && (
                          <>
                            <div className="dialog-box-modal-tooltip">
                              {languageData.modalHotel.showTooltip}
                            </div>
                          </>
                        )}

                        <SearchRoom
                          onDataUpdate={handleDataUpdate}
                          setChangeDate={setChangeDate}
                          changeDate={changeDate}
                        />

                        <Row>
                          <SelectedRoomsContext.Provider
                            value={[selectedRooms, setSelectedRooms]}
                          >
                            {loading ? (
                              <Col sm={8}>
                                <SkeletonRooms />
                              </Col>
                            ) : (
                              <Col
                                className="width100"
                                style={{ marginBottom: "9em" }}
                                sm={8}
                              >
                                <TypeRoom
                                  isRoomSelected={isRoomSelected}
                                  hotelModal={hotelModal.hotel}
                                  onAddDetail={handleAddDetail}
                                />
                              </Col>
                            )}

                            <Col className="content-bottom-open-dialog" sm={4}>
                              <>
                                <ShortInfoHotelModal
                                  requestBody={newRequestBody}
                                  selectedRooms={selectedRooms}
                                  handleShowContentChange={
                                    handleShowContentChange
                                  }
                                  setSelectedRooms={setSelectedRooms}
                                  isRoomSelected={isRoomSelected}
                                  totalRoomsSelected={totalRoomsSelected}
                                />
                              </>
                            </Col>
                          </SelectedRoomsContext.Provider>
                        </Row>
                      </>
                    </div>
                  </>
                ) : (
                  <SkeletonModal />
                )}
              </div>
            ) : showContent === 2 ? (
              <div className="modal-hotel-h">
                {hotelModal && (
                  <div>
                    <SelectedRoomsContext.Provider
                      value={[selectedRooms, setSelectedRooms]}
                    >
                      <ModalHotelOptions
                        hotelModal={hotelModal.hotel}
                        dataBody={newRequestBody}
                        room={selectedRooms}
                      />
                    </SelectedRoomsContext.Provider>
                  </div>
                )}
              </div>
            ) : null}
          </>
        </div>
      </DialogContent>
    </Dialog>
  );
}
