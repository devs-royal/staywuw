import { useContext, useState, useEffect, useRef } from "react";
import { Button, Typography, TextField } from "@mui/material";
import { Add, Remove } from "@mui/icons-material/";

import LanguageContext from "../../../language/LanguageContext";
import { useIsMobile } from "@/config/Mobile/isMobile";

export default function RoomMenu(props) {
  const isMobile = useIsMobile();
  const {
    showRoom,
    showDrop,
    roomsTotal,
    children,
    adults,
    people,
    isModal = false,
    onClose,
  } = props;
  const [rooms, setRooms] = useState([{ adult: 2, child: 0, ages: [] }]);
  const [totalPeople, setTotalPeople] = useState(
    localStorage.getItem(isModal ? "totalPeopleSecondary" : "totalPeople") || 2
  );

  const { languageData } = useContext(LanguageContext);

  const [ageError, setAgeError] = useState(false);

  useEffect(() => {
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
      newRooms[roomIndex].ages[childIndex] = value;
      setRooms(newRooms);
    } else if (value === "") {
      // Permite borrar
      setAgeError(false);
      const newRooms = [...rooms];
      newRooms[roomIndex].ages[childIndex] = ""; // Borra el valor
      setRooms(newRooms);
    } else {
      setAgeError(true);
    }
  };

  const addRoom = () => {
    if (rooms.length < 10) {
      setRooms([...rooms, { adult: 1, child: 0, ages: [] }]);
      // setTimeout(scrollToBottom, 100);
      setTimeout(() => {
        const roomsContainer = document.getElementById('roomsContainer');
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
      newRooms[roomIndex].ages.push("");
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

  return (
    <div className="overflow-y-scroll scroll-page-blue max-h-80 relative flex flex-col justify-center-between bg-white border border-2 rounded-lg" id="roomsContainer">
      <div className="pt-4 pl-3 pr-3 z-10">
        {rooms.map((room, index) => (
          <div
            key={index}
            className=" pb-2 mb-3 flex flex-col border-b-1 border-gry-50 "
          >
            <div className="flex justify-between mb-4">
              <div className="col-padding">
                <div className="m-s-b text-fs-14 text-gray-500">
                  {languageData.SearchBox.tabHotel.roomBox.roomNum} {index + 1}
                </div>
              </div>

              <div className="text-red-100 m-m text-fs-10 cursor-pointer">
                {index >= 1 && (
                  <div>
                    <p onClick={() => removeRoom(index)}>
                      {languageData.SearchBox.tabHotel.roomBox.buttonDelete}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <div className="m-b text-fs-14 text-gray-700">
                  {languageData.SearchBox.tabHotel.roomBox.adult}
                </div>

                <div className="flex">
                  <Button
                    disabled={room.adult === 1}
                    onClick={() => handleNumAdultChange(room.adult - 1, index)}
                    aria-label="Reduce el número de Adultos"
                  >
                    <Remove />
                  </Button>
                  <Typography variant="subtitle1" style={{ margin: "0 0" }}>
                    {room.adult}
                  </Typography>
                  <Button
                    disabled={room.adult === 8}
                    onClick={() => handleNumAdultChange(room.adult + 1, index)}
                    aria-label="Aumenta el número de Adultos"
                  >
                    <Add />
                  </Button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="m-b text-fs-14 text-gray-700">
                  {languageData.SearchBox.tabHotel.roomBox.children}
                </div>

                <div className="flex">
                  <Button
                    disabled={room.child === 0}
                    onClick={() => removeChild(index)}
                    aria-label="Reduce el número de Niños"
                  >
                    <Remove />
                  </Button>

                  <Typography variant="subtitle1" style={{ margin: "0 0" }}>
                    {room.child}
                  </Typography>
                  <Button
                    disabled={room.child === 4}
                    onClick={() => addChild(index)}
                    aria-label="Aumenta el número de Niños"
                  >
                    <Add />
                  </Button>
                </div>
              </div>
            </div>

            {[...Array(room.child)].map((_, childIndex) => (
              <div
                key={childIndex}
                className="flex justify-between items-center mt-4"
              >
                <div className="m-m text-fs-12 text-gray-400 ">
                  {languageData.SearchBox.tabHotel.roomBox.ageChildren}{" "}
                  {childIndex + 1}
                </div>

                <TextField
                  // id="outlined-number"
                  className="m-s-b text-fs-20"
                  label={languageData.SearchBox.tabHotel.roomBox.age}
                  value={room.ages[childIndex]}
                  onChange={(event) =>
                    handleAgeChange(event.target.value, childIndex, index)
                  }
                  type="number"
                  required
                  variant="outlined"
                  size="small"
                  style={{ width: 80 }}
                  inputProps={{
                    maxLength: 2,
                    max: 12,
                    min: 0,
                    onKeyPress: (event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    },
                  }}
                  error={ageError}
                  helperText={ageError ? "0-12 años" : ""}
                />
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
          className="rounded-full bg-or-100 w-max py-1.5 px-4 m-s-b text-fs-15 text-white"
          onClick={printRoomData}
        >
          {languageData.SearchBox.tabHotel.roomBox.buttonApply}
        </button>
      </div>
    </div>
  );
}
