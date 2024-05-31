import React, { useContext } from "react";

import RoomsHotelContext from "../../context/RoomsHotelContext";
import LanguageContext from "@/language/LanguageContext";
export default function AddPreCartHotel(props) {
  const { languageData } = useContext(LanguageContext);
  const { room } = props;
  const { selectedRooms, setSelectedRooms } = useContext(RoomsHotelContext);

  const handleAddDetailHotelMaxPrice = (room) => {
    const persons = parseInt(room.adultChildren.split(".")[0]);
    const data = {
      code: room.code,
      idRoom: room.idRoom,
      name: room.name,
      eatingPlan: room.eatingPlan,
      persons: room.adultChildren,
      adults: persons,
      children: room.childrenAges,
      price: room.price,
      netPrice: room.netPrice,
      rateKey: room.rateKey,
      facilities: (room.facilities && room.facilities[0]) || null,
      rateIndex: room.rateIndex,
      boardCode: room.boardCode,
      hash: room.hash,
      image: room.image,
    };

    const updatedSelectedRooms = [...selectedRooms, data];
    setSelectedRooms(updatedSelectedRooms);
  };


  return (
    <button
      className=" cursor-pointer border-0 rounded-full bg-bl-100 text-white text-fs-12 m-s-b py-3.5 px-4 hover:bg-bl-110"
      onClick={() => handleAddDetailHotelMaxPrice(room)}
      disabled={selectedRooms.some(
        (selectedRoom) => selectedRoom.idRoom === room.idRoom
      )}
    >
      {languageData.containerModalHotel.buttonModal}
    </button>
  );
}
