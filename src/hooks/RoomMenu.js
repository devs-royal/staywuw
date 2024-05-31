import React, { useContext, useState, useEffect } from "react";
import { Button, Typography, TextField } from "@mui/material";
import { Add, Remove } from "@mui/icons-material/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import LanguageContext from "../language/LanguageContext";
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
      people(sumPeople);
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

  return (
    <div className="d-flex flex-column justify-content-between height75 pt-4 ps-3 pe-3">
      <div className="m-scroll-card d-block">

        {rooms.map((room, index) => (
          <div key={index} className="divider-room">
            <Container>
              
              <Row className="row-data-room">
                <Col sm={8} className="col-padding">
                  <Typography variant="subtitle1" className="title-room-result">
                    {languageData.SearchBox.tabHotel.roomBox.roomNum}{" "}
                    {index + 1}
                  </Typography>
                </Col>

                <Col sm={4} className="icon-delete-room">
                  {index >= 1 && (
                    <div>
                      <p onClick={() => removeRoom(index)}>
                        {languageData.SearchBox.tabHotel.roomBox.buttonDelete}
                      </p>
                    </div>
                  )}
                </Col>
              </Row>
            </Container>

            <Container>
              <Row className="row-room">
                <Col className="subtitle-col-room">
                  {languageData.SearchBox.tabHotel.roomBox.adult}
                </Col>

                <Col className="col-padding">
                  <div className="rooms-center">
                    <Button
                      disabled={room.adult === 1}
                      onClick={() =>
                        handleNumAdultChange(room.adult - 1, index)
                      }
                      aria-label="Reduce el número de Adultos"
                    >
                      <Remove />
                    </Button>
                    <Typography
                      variant="subtitle1"
                      style={{ margin: "0 0" }}
                    >
                      {room.adult}
                    </Typography>
                    <Button
                      disabled={room.adult === 8}
                      onClick={() =>
                        handleNumAdultChange(room.adult + 1, index)
                      }
                      aria-label="Aumenta el número de Adultos"
                    >
                      <Add />
                    </Button>
                  </div>
                </Col>
              </Row>

              <Row className="row-room">
                <Col>
                  <div className="subtitle-col-room">
                    {languageData.SearchBox.tabHotel.roomBox.children}
                  </div>
                </Col>

                <Col className="col-padding">
                  <div className="rooms-center">
                    <Button
                      disabled={room.child === 0}
                      onClick={() => removeChild(index)}
                      aria-label="Reduce el número de Niños"
                    >
                      <Remove />
                    </Button>
                    
                    <Typography
                      variant="subtitle1"
                      style={{ margin: "0 0" }}
                    >
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
                </Col>
              </Row>
            </Container>

            <Row>
              <Col>
                {[...Array(room.child)].map((_, childIndex) => (

                  <Container key={childIndex} style={{ margin: "10px 0" }}>
                    <Row className="row-room">
                      <Col className="children-info-age">
                        {languageData.SearchBox.tabHotel.roomBox.ageChildren}{" "}
                        {childIndex + 1}
                      </Col>

                      <Col>
                        <div
                          key={childIndex}
                          className="flex-text-children"
                        >
                          <TextField
                            id="outlined-number"
                            label={languageData.SearchBox.tabHotel.roomBox.age}
                            value={room.ages[childIndex]}
                            onChange={(event) =>
                              handleAgeChange(
                                event.target.value,
                                childIndex,
                                index
                              )
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
                      </Col>
                    </Row>
                  </Container>
                ))}
              </Col>
            </Row>
          </div>
        ))}
      </div>

      <div className="button-room-page-search">
        <Button
          disabled={rooms.length === 10}
          onClick={addRoom}
          aria-label="Agregar una nueva habitación"
          className="add-button-room"
        >
          {languageData.SearchBox.tabHotel.roomBox.addRoom}
        </Button>

        <button className="button-apply-room" onClick={printRoomData}>
          {languageData.SearchBox.tabHotel.roomBox.buttonApply}
        </button>
      </div>
    </div>
  );
}
