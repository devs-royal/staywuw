import Image from "next/image";
import { useContext, useState, useEffect, useRef, Fragment } from "react";

import { useIsMobile } from "@/config/Mobile/isMobile";
import { Menu, Transition } from "@headlessui/react";
import LanguageContext from "../../../language/LanguageContext";

export default function RoomMenu(props) {
  const isMobile = useIsMobile();
  const {
    showRoom,
    showDropdown,
    showDrop,
    roomsTotal,
    children,
    adults,
    people,
    isModal = false,
    onClose,
  } = props;
  const [rooms, setRooms] = useState([{ adult: 2, child: 0, ages: [] }]);
  const [totalPeople, setTotalPeople] = useState(2);

  const { languageData } = useContext(LanguageContext);

  const [ageError, setAgeError] = useState(false);

  useEffect(() => {
    const storedTotalPeople = localStorage.getItem(
      isModal ? "totalPeopleSecondary" : "totalPeople"
    );
    if (storedTotalPeople) {
      setTotalPeople(storedTotalPeople);
    }
    const roomData = JSON.parse(localStorage.getItem("roomData"));
    const roomDataModal = JSON.parse(localStorage.getItem("roomDataSecondary"));
    if (isModal) {
      if (roomDataModal) {
        setRooms(
          roomDataModal.map((room) => ({
            adult: room.adults,
            child: room.children.length,
            ages: room.children.map((age) => age.toString()),
          }))
        );
      } else {
        if (roomData) {
          setRooms(
            roomData.map((room) => ({
              adult: room.adults,
              child: room.children.length,
              ages: room.children.map((age) => age.toString()),
            }))
          );
        }
      }
    } else {
      if (roomData) {
        setRooms(
          roomData.map((room) => ({
            adult: room.adults,
            child: room.children.length,
            ages: room.children.map((age) => age.toString()),
          }))
        );
      }
    }
  }, []);

  useEffect(() => {
    isModal
      ? localStorage.setItem("totalPeopleSecondary", totalPeople)
      : localStorage.setItem("totalPeople", totalPeople);
  }, [totalPeople]);

  const handleNumAdultChange = (value, index) => {
    const newRooms = [...rooms];
    newRooms[index].adult = value;
    setRooms(newRooms);
  };

  const handleAgeChange = (value, childIndex, roomIndex) => {
    if (value === "0" || (value >= 1 && value <= 12)) {
      setAgeError(false);
      const newRooms = [...rooms];
      newRooms[roomIndex].ages[childIndex] = parseInt(value);
      setRooms(newRooms);
    } else if (value === "") {
      setAgeError(true);
      const newRooms = [...rooms];
      newRooms[roomIndex].ages[childIndex] = ""; // Borra el valor
      setRooms(newRooms);
    } else {
      setAgeError(false);
    }
  };

  const addRoom = () => {
    if (rooms.length < 10) {
      setRooms([...rooms, { adult: 1, child: 0, ages: [] }]);

      setTimeout(() => {
        const roomsContainer = document.getElementById("roomsContainer");
        roomsContainer.scrollTop = roomsContainer.scrollHeight; // scroll container
      }, 100);
    }
  };

  const removeRoom = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms.splice(index, 1);
    setRooms(updatedRooms);
  };

  const addChild = (roomIndex) => {
    const newRooms = [...rooms];
    if (newRooms[roomIndex].child < 4) {
      newRooms[roomIndex].child++;
      newRooms[roomIndex].ages.push(0);
      setRooms(newRooms);
    }
  };

  const removeChild = (roomIndex) => {
    const newRooms = [...rooms];
    if (newRooms[roomIndex].child > 0) {
      newRooms[roomIndex].child--;
      newRooms[roomIndex].ages.pop();
      setRooms(newRooms);
    }
  };

  const printRoomData = () => {
    isMobile ? onClose(false) : showDrop(false);

    const roomData = rooms.map((room) => {
      return {
        adults: room.adult,
        children: room.ages.map(Number),
      };
    });

    showRoom(roomData);

    const totalChildren = rooms.reduce((acc, room) => {
      return acc + room.child;
    }, 0);

    if (children) {
      children(totalChildren);
    }
    isModal
      ? localStorage.setItem(
          "childrenHotelSecondary",
          JSON.stringify(totalChildren)
        )
      : localStorage.setItem("childrenHotel", JSON.stringify(totalChildren));

    const totalAdults = roomData.reduce((acc, room) => {
      return acc + room.adults;
    }, 0);

    if (adults) {
      adults(totalAdults);
    }
    isModal
      ? localStorage.setItem(
          "adultsHotelSecondary",
          JSON.stringify(totalAdults)
        )
      : localStorage.setItem("adultsHotel", JSON.stringify(totalAdults));

    const sumPeople = totalAdults + totalChildren;
    setTotalPeople(sumPeople);

    if (people) {
      people({ adults: totalAdults, children: totalChildren });
    }

    isModal
      ? localStorage.setItem("totalPeopleSecondary", JSON.stringify(sumPeople))
      : localStorage.setItem("totalPeople", JSON.stringify(sumPeople));

    const totalRooms = roomData.length;
    roomsTotal(totalRooms);

    isModal
      ? localStorage.setItem("roomDataSecondary", JSON.stringify(roomData))
      : localStorage.setItem("roomData", JSON.stringify(roomData));
  };

  const endOfRoomsRef = useRef(null);

  useEffect(() => {
    setAgeError(false);
    rooms.map((room) => {
      if (room.ages.length > 0) {
        const filterAges = room.ages.filter((age) => age === "");
        if (filterAges.length > 0) {
          setAgeError(true);
        }
      }
    });
  }, [rooms]);

  return (
    <Transition
      show={showDropdown}
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-[2] mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item id="roomsContainer">
          <div className="overflow-y-scroll scroll-page-blue max-h-80 relative flex flex-col justify-center-between bg-white border border-2 rounded-lg">
            <div className="pt-4 pl-3 pr-3 z-10">
              {rooms.map((room, index) => (
                <div
                  key={index}
                  className=" pb-2 mb-3 flex flex-col border-b-1 border-gry-50 "
                >
                  <div className="flex justify-between mb-4">
                    <div className="col-padding">
                      <div className="m-s-b text-fs-14 text-gray-500">
                        {languageData.SearchBox.tabHotel.roomBox.roomNum}{" "}
                        {index + 1}
                      </div>
                    </div>

                    <div className="text-red-100 m-m text-fs-10 cursor-pointer">
                      {index >= 1 && (
                        <div>
                          <p onClick={() => removeRoom(index)}>
                            {
                              languageData.SearchBox.tabHotel.roomBox
                                .buttonDelete
                            }
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="m-b text-fs-14 text-gray-700">
                      {languageData.SearchBox.tabHotel.roomBox.adult}
                    </div>

                    <div className="flex">
                      <button
                        disabled={room.adult === 1}
                        onClick={() =>
                          handleNumAdultChange(room.adult - 1, index)
                        }
                        aria-label="Reduce el número de Adultos"
                      >
                        <Image
                          src={`${
                            room.adult === 1
                              ? `${process.env.NEXT_PUBLIC_URL}/icons/remove/remove-70.svg`
                              : `${process.env.NEXT_PUBLIC_URL}/icons/remove/remove-bl.svg`
                          }`}
                          alt="remove icon"
                          width={14}
                          height={14}
                          className="w-[14px] h-[14px]"
                        />
                      </button>

                      <p className="m-s-b text-[1rem] text-black m-0 px-[15px]">
                        {room.adult}
                      </p>

                      <button
                        disabled={room.adult === 8}
                        onClick={() =>
                          handleNumAdultChange(room.adult + 1, index)
                        }
                        aria-label="Aumenta el número de Adultos"
                      >
                        <Image
                          src={`${
                            room.adult === 8
                              ? `${process.env.NEXT_PUBLIC_URL}icons/add/add-70.svg`
                              : `${process.env.NEXT_PUBLIC_URL}icons/add/add-bl.svg`
                          }`}
                          alt="add icon"
                          width={14}
                          height={14}
                          className="w-[14px] h-[14px]"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="m-b text-fs-14 text-gray-700">
                      {languageData.SearchBox.tabHotel.roomBox.children}
                    </div>

                    <div className="flex">
                      <button
                        disabled={room.child === 0}
                        onClick={() => removeChild(index)}
                        aria-label="Reduce el número de Niños"
                      >
                        <Image
                          src={`${
                            room.child === 0
                              ? `${process.env.NEXT_PUBLIC_URL}/icons/remove/remove-70.svg`
                              : `${process.env.NEXT_PUBLIC_URL}/icons/remove/remove-bl.svg`
                          }`}
                          alt="remove icon"
                          width={14}
                          height={14}
                          className="w-[14px] h-[14px]"
                        />
                      </button>

                      <p className="m-s-b text-[1rem] text-black m-0 px-[15px]">
                        {room.child}
                      </p>

                      <button
                        disabled={room.child === 4}
                        onClick={() => addChild(index)}
                        aria-label="Aumenta el número de Niños"
                      >
                        <Image
                          src={`${
                            room.child === 4
                              ? `${process.env.NEXT_PUBLIC_URL}icons/add/add-70.svg`
                              : `${process.env.NEXT_PUBLIC_URL}icons/add/add-bl.svg`
                          }`}
                          alt="add icon"
                          width={14}
                          height={14}
                          className="w-[14px] h-[14px]"
                        />
                      </button>
                    </div>
                  </div>

                  {[...Array(room.child)].map((_, childIndex) => (
                    <div
                      key={childIndex}
                      className="flex justify-between items-center mt-[30px] relative"
                    >
                      <div className="m-m text-fs-12 text-gray-400 ">
                        {languageData.SearchBox.tabHotel.roomBox.ageChildren}{" "}
                        {childIndex + 1}
                      </div>

                      <input
                        type="number"
                        className="m-m text-fs-16 w-[44px] border border-gry-100 rounded-md focus:outline-none text-center"
                        label={languageData.SearchBox.tabHotel.roomBox.age}
                        value={room.ages[childIndex]}
                        onChange={(event) =>
                          handleAgeChange(event.target.value, childIndex, index)
                        }
                        required
                      />
                      {ageError && (
                        <p className="m-0 text-sm text-red-600 absolute bottom-[-17px] right-0">
                          0-12 {languageData.itinerary.tourItinerary.years}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
              <div ref={endOfRoomsRef} />{" "}
              {/* Coloca el ref aquí, al final de la lista de habitaciones */}
            </div>

            <div className="sticky border-t border-gry-50 z-10 items-center flex flex-col bottom-0 left-0 bg-white p-2 justify-between gap-2">
              <button
                disabled={rooms.length === 10}
                onClick={addRoom}
                aria-label="Agregar una nueva habitación"
                className="m-b text-fs-13 text-bl-100"
              >
                {languageData.SearchBox.tabHotel.roomBox.addRoom}
              </button>

              <button
                className={`rounded-full w-max py-1.5 px-4 m-s-b text-fs-15 text-white ${
                  ageError ? "bg-or-50" : "bg-or-100"
                }`}
                onClick={printRoomData}
                disabled={ageError}
              >
                {languageData.SearchBox.tabHotel.roomBox.buttonApply}
              </button>
            </div>
          </div>
        </Menu.Item>
      </Menu.Items>
    </Transition>
  );
}
