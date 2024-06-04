import Image from "next/image";
import { TextField } from "@mui/material";
import { Add, Remove } from "@mui/icons-material/";
import LanguageContext from "../../language/LanguageContext";
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  Fragment,
} from "react";

import Person2OutlinedIcon from "../../assets/icons/utils/searchBox/person-autocomplete.svg";
import { Menu, Transition } from "@headlessui/react";

export default function PersonsActivities({ OnApply, listing }) {
  const [rooms, setRooms] = useState([]);
  const [ageError, setAgeError] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [totalChildren, setTotalChildren] = useState(0);
  const [totalAdults, setTotalAdults] = useState(2);

  useEffect(() => {
    const personsData = localStorage.getItem("personsData");

    if (personsData) {
      const dataPerson = JSON.parse(personsData);
      setTotalAdults(dataPerson[0].adults);
      setTotalChildren(dataPerson[0].children);
    } else {
      setTotalAdults(2);
      setTotalChildren(0);
    }
  }, []);

  useEffect(() => {
    const tourData = JSON.parse(localStorage.getItem("tourData"));
    if (tourData && Array.isArray(tourData)) {
      setRooms(
        tourData.map((data) => ({
          adult: data.adults,
          child: data.children,
          ages: data.ages || [],
        }))
      );
    } else {
      setRooms([{ adult: 2, child: 0, ages: [] }]);
    }
  }, []);

  const handlenumAdultChange = (value, index) => {
    const newRooms = [...rooms];
    newRooms[index].adult = value;
    setRooms(newRooms);

    const sumAdults = newRooms.reduce((acc, room) => {
      return acc + room.adult;
    }, 0);
    setTotalAdults(sumAdults);
  };

  const handleAgeChange = (value, childIndex, roomIndex) => {
    if (value < 0 || value > 12) {
      setAgeError(true);
    } else {
      setAgeError(false);
      const newRooms = [...rooms];
      newRooms[roomIndex].ages[childIndex] = value;
      setRooms(newRooms);
    }
  };

  const addChild = (roomIndex) => {
    const newRooms = [...rooms];
    if (newRooms[roomIndex].child < 10) {
      newRooms[roomIndex].child++;
      newRooms[roomIndex].ages.push("");
      setRooms(newRooms);
      setTotalChildren(totalChildren + 1);
    }
  };

  const removeChild = (roomIndex) => {
    const newRooms = [...rooms];
    if (newRooms[roomIndex].child > 0) {
      newRooms[roomIndex].child--;
      newRooms[roomIndex].ages.pop();
      setRooms(newRooms);
      setTotalChildren(totalChildren - 1);
    }
  };

  const printTourData = () => {
    setShowDropdown(false);

    const tourData = rooms.map((room) => {
      return {
        adults: room.adult,
        children: room.child,
        ages: room.ages,
      };
    });
    OnApply(tourData);

    const sumChildren = rooms.reduce((acc, room) => {
      return acc + room.child;
    }, 0);

    const sumAdults = rooms.reduce((acc, room) => {
      return acc + room.adult;
    }, 0);

    const sumPeople = sumAdults + sumChildren;

    localStorage.setItem("totalPeopleTour", JSON.stringify(sumPeople));
    localStorage.setItem("tourData", JSON.stringify(tourData));
    localStorage.setItem("personsData", JSON.stringify(tourData));
  };

  const { languageData } = useContext(LanguageContext);

  const adultPlural = (adult) => {
    if (adult == 1) {
      return "textAdult";
    } else {
      return "textAdults";
    }
  };

  const childrenPlural = (children) => {
    if (children == 1) {
      return "textChild";
    } else {
      return "textChildren";
    }
  };

  // FUNCTION TO CLOSE MENU
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  // END FUNCTION TO CLOSE MENU

  // CLOSE DROPDOWNS
  // const menuRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setShowDropdown(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return (
    <Menu
      as="div"
      className={`${
        listing ? "w-full" : "w-full lg:w-[296px]"
      } relative inline-block`}
    >
      <div>
        <Menu.Button
          onClick={() => setShowDropdown(true)}
          className={`${
            listing ? "w-full" : "w-full lg:w-[296px]"
          } border-2 border-gray-200 rounded py-2.5 px-4 relative h-[56px] !flex gap-x-2 items-center`}
        >
          <Image
            src={Person2OutlinedIcon}
            width={16}
            height={22}
            alt="icon-person"
          />

          <span className="flex m-s-b flex-col gap-y-[3px] text-fs-12 items-start py-0 px-[10px]">
           
            <p className="m-0 m-s-b text-fs-10 text-gry-70 w-max">
              {languageData.SearchBox.tabTour.people}
            </p>

            <p className="m-0 m-s-b text-fs-12 text-gry-100">
              {`${totalAdults} ${
                languageData.itinerary.tourItinerary[adultPlural(totalAdults)]
              },`}{" "}
              {`${totalChildren} ${
                languageData.itinerary.tourItinerary[
                  childrenPlural(totalChildren)
                ]
              }`}
            </p>
          
          </span>
        </Menu.Button>
      </div>

      <Transition
        show={showDropdown}
        as={Fragment}
        // ref={menuRef}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-[2] mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <div className="overflow-y-scroll scroll-page-blue max-h-80 relative flex flex-col justify-center-between bg-white border border-2 rounded-lg">
              <div className="pt-4 pl-3 pr-3 z-10">
                {rooms.map((room, index) => (
                  <div
                    key={index}
                    className="pb-2 mb-3 flex flex-col border-b-1 border-gry-50 gap-y-3"
                  >
                    <p className="m-m m-0 text-fs-14">
                      {
                        languageData.SearchBox.tabTour.personsActivities
                          .titlePeople
                      }
                    </p>
                    <div className="flex flex-col gap-y-2">
                      <div className="flex justify-between">
                        <h3 className="m-b text-fs-16 text-gry-100">
                          {
                            languageData.SearchBox.tabTour.personsActivities
                              .adult
                          }
                        </h3>
                        <div className="flex gap-x-1 items-center">
                          <button
                            disabled={room.adult === 1}
                            onClick={() =>
                              handlenumAdultChange(room.adult - 1, index)
                            }
                            aria-label="Reduce el número de Adultos"
                            className={`${
                              room.adult === 1 ? "text-gry-70" : "text-bl-100"
                            } m-s-b`}
                          >
                            <Remove />
                          </button>
                          <span
                            className="m-m text-fs-15"
                            style={{ margin: "0px 0px" }}
                          >
                            {room.adult}
                          </span>
                          <button
                            disabled={room.adult === 20}
                            onClick={() =>
                              handlenumAdultChange(room.adult + 1, index)
                            }
                            className="text-bl-100 m-s-b"
                            aria-label="Aumenta el número de Adultos"
                          >
                            <Add />
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <h3 className="m-b text-fs-16 text-gry-100">
                          {
                            languageData.SearchBox.tabTour.personsActivities
                              .children
                          }
                        </h3>

                        <div className="flex gap-x-1 items-center">
                          <button
                            disabled={room.child === 0}
                            onClick={() => removeChild(index)}
                            aria-label="Reduce el número de Niños"
                            className={`${
                              room.child === 0 ? "text-gry-70" : "text-bl-100"
                            } m-s-b`}
                          >
                            <Remove />
                          </button>

                          <span
                            className="m-m text-fs-15"
                            variant="subtitle1"
                            style={{ margin: "0px 0px" }}
                          >
                            {room.child}
                          </span>

                          <button
                            disabled={room.child === 10}
                            onClick={() => addChild(index)}
                            aria-label="Aumenta el número de Niños"
                            className="text-bl-100 m-s-b"
                          >
                            <Add />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col gap-y-3 mt-3.5">
                        {[...Array(room.child)].map((_, childIndex) => (
                          <div
                            key={childIndex}
                            className="flex justify-between"
                          >
                            <p className="m-0 text-fs-14 m-m">
                              {
                                languageData.SearchBox.tabTour.personsActivities
                                  .ageChildren
                              }{" "}
                              {childIndex + 1}
                            </p>

                            <div
                              key={childIndex}
                              className="flex-text-children"
                            >
                              <TextField
                                id="outlined-number"
                                label={
                                  languageData.SearchBox.tabTour
                                    .personsActivities.age
                                }
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
                                helperText={ageError ? "0-17 años" : ""}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="sticky border-t border-gry-50 z-10 items-center flex flex-col bottom-0 left-0 bg-white p-2 justify-between gap-2">
                  <button
                    className="rounded-full bg-or-100 w-max py-1.5 px-4 m-s-b text-fs-15 text-white"
                    onClick={printTourData}
                  >
                    {languageData.SearchBox.tabTour.personsActivities.button}
                  </button>
                </div>
              </div>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
