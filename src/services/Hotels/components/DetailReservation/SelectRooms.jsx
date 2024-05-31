"use client";

import { useContext, useEffect, useState } from "react";

import { Container } from "@/config/Others/Container";
import LanguageContext from "@/language/LanguageContext";
import RoomsHotelContext from "../../context/RoomsHotelContext";

export default function SelectRooms({close}) {
  const [isComplete, setIsComplete] = useState(false);
  const { languageData } = useContext(LanguageContext);
  const { selectedRooms, setSelectedRooms, requestBodyRooms } = useContext(RoomsHotelContext);

  useEffect(() => {
    if (selectedRooms.length === requestBodyRooms.occupancies.length) {
      setIsComplete(true);
    }else{
      setIsComplete(false);
    }
  }, [selectedRooms]);

  // DELETED PRE CART ROOM
  const deleteRoom = (index) => {
    const newRooms = selectedRooms.filter((room, i) => i !== index);
    if(newRooms.length === 0){
      close();
    }
    setSelectedRooms(newRooms);
  };

  return (
    <div
      className={`xl:max-h-[78%] bg-white w-full px-4 py-7`}
    >
        <Container>
          <div className="w-full flex flex-col gap-y-4 lg:mb-[5rem]">
            <h3 className="flex items-center text-gry-100 m-s-b text-fs-14 gap-x-1">
              {languageData. modalHotel.chosenRooms}{" "}

              <p className={`${isComplete === true && 'text-grn-100'} m-0`}>({selectedRooms.length}/{requestBodyRooms.occupancies.length})</p>{" "}
              {isComplete === true && (
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/done/done-g.svg`}
                  alt="done green"
                  height={9}
                  width={12}
                />
              )}
            </h3>

            <div
              className={`grid grid-cols-1 overflow-y-auto gap-y-2 scroll-page-blue lg:gap-x-3.5 md:justify-items-center lg:grid-cols-2 xl:grid-cols-3 max-h-[26rem] md:max-h-[30rem] lg:max-h-[25rem]`}
            >
              {/* MAP ROOMS PRE CART HOTEL */}
              {selectedRooms.map((reservation, index) => (
                <div className="p-2 flex gap-x-4 md:w-full border border-gry-30 rounded-md" key={index}>
                  <img
                    className="rounded-lg h-[80px] w-[80px] object-cover"
                    src={reservation.image}
                    alt={reservation.name}
                    width={80}
                    height={80}
                  />

                  <div className="flex items-center justify-between w-full max-md:w-[246px] md:w-full">
                    <div className="flex flex-col gap-x-1">
                      {/* EATING PLAN */}
                      <span>
                        <p className="m-0 text-fs-8 m-m text-gry-100">
                          {reservation.eatingPlan}
                        </p>

                        <h3 className="text-fs-12 text-black m-s-b">
                          {reservation.name}
                        </h3>
                      </span>

                      {/* PRICE */}
                      <h3 className="m-s-b text-fs-12 text-or-100 ">
                        MXN {reservation.price}
                      </h3>

                      {/* ADULTS HOTEL */}
                      <span className="flex text-fs-10 text-black gap-x-2 items-center">
                        <img
                          src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                          alt="occupancy"
                          width={12}
                          height={12}
                        />{" "}
                        {reservation.adults}
                      </span>
                    </div>

                    {/* DELETE */}

                    {selectedRooms && selectedRooms.length > 0 ? (
                      <>
                        <button onClick={() => deleteRoom(index)}>
                          <img
                            src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-r.svg`}
                            width={14}
                            height={16}
                            alt="delete red"
                          />
                        </button>
                      </>
                    ) : (
                      <h3 className="no-data-rooms">
                        {languageData.detailHotel.selectRoom}
                      </h3>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
    </div>
  );
}
