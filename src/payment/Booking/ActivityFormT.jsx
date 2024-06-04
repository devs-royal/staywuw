"use client";

import { useEffect, useState, useContext } from "react";

import LanguageContext from "@/language/LanguageContext";
import { PaymentContext } from "../context/PaymentContext";

export const ActivityFormT = ({ activityPreBooking }) => {
  const { setFormActivityItems } = useContext(PaymentContext);

  const { languageData } = useContext(LanguageContext);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    validateAndSetFormData();
  }, [formData]);

  const handleInputChange = (
    e,
    activityIndex,
    itemType,
    groupIndex,
    itemIndex,
    id,
    isRequired
  ) => {
    let newValue = e.target.value;

    // FOR SELECT ELEMENTS, USE THE SELECTED OPTION'S TEXT INSTEAD OF ITS VALUE
    if (e.target.tagName === "SELECT") {
      newValue = e.target.options[e.target.selectedIndex].text;
    }

    // CONSTRUCT UPDATED ITEM OBJECT WITH ID, VALUE, AND REQUIRED STATUS
    const updatedItem = { id, value: newValue, required: isRequired };

    // CREATE A COPY OF CURRENT FORM DATA TO UPDATE
    // ENSURE ACTIVITY ENTRY EXISTS
    const updatedFormData = { ...formData };
    updatedFormData[activityIndex] = updatedFormData[activityIndex] || {};

    // ENSURE ITEM TYPE ENTRY EXISTS (E.G., 'booking' OR 'passengers')
    updatedFormData[activityIndex][itemType] =
      updatedFormData[activityIndex][itemType] || [];

    // FOR PASSENGERS, UPDATE THE SPECIFIC PASSENGER ITEM IN ITS GROUP
    if (itemType === "passengers") {
      updatedFormData[activityIndex][itemType][groupIndex] =
        updatedFormData[activityIndex][itemType][groupIndex] || [];
      updatedFormData[activityIndex][itemType][groupIndex][itemIndex] =
        updatedItem;
    } else {
      updatedFormData[activityIndex][itemType][itemIndex] = updatedItem;
    }

    setFormData(updatedFormData);
  };

  const validateAndSetFormData = () => {
    let allRequiredFieldsFilled = true;
    const filteredFormData = [];

    // ITERATE OVER EACH ACTIVITY IN THE FORM DATA
    Object.entries(formData).forEach(([activityIndex, activity]) => {
      const activityData = {
        type: "activity",
        id: activityPreBooking[activityIndex].id,
        details: {
          booking: [],
          passengers: [],
        },
      };

      // PROCESS BOOKING ITEMS
      if (activity.booking) {
        activityData.details.booking = activity.booking.map((item) => ({
          id: item.id,
          value: item.value,
        }));
      }

      // PROCESS PASSENGERS
      if (activity.passengers) {
        activity.passengers.forEach((group) => {
          group.forEach((item) => {
            if (item.required && (!item.value || item.value === "")) {
              allRequiredFieldsFilled = false;
            }
            activityData.details.passengers.push({
              id: item.id,
              value: item.value,
            });
          });
        });
      }

      // ADD THE COMPLETED ACTIVITY DATA TO THE FINAL FORM DATA ARRAY
      filteredFormData.push(activityData);
    });

    // CHECK IF ALL REQUIRED FIELDS ARE FILLED BEFORE SETTING THE FINAL DATA
    if (allRequiredFieldsFilled) {
      setFormActivityItems(filteredFormData);
    } else {
      alert(
        "Por favor, complete todos los campos requeridos antes de continuar."
      );
    }
  };
  return (
    <>
      <div className="py-[32px] px-[24px] w-full rounded-[19px] bg-white mt-10">
        <h2 className="m-b text-fs-21 text-black">
          {languageData.paymentActivities.activities}
        </h2>

        {activityPreBooking.map((activity, activityIndex) => (
          <div key={activity.id}>
            {/* TITLE TOUR */}
            <div className="mt-[16px] m-b text-fs-12 mb-1 flex">
              <img
                src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-o.svg`}
                alt="icon tour orange"
                width={20}
                height={17}
                className="ml-[.25rem] mr-[.5rem] w-[20px] h-[17px]"
              />
              {activity.name}
            </div>

            {/* SECTION INPUT DYNAMIC */}
            <div className="p-[1.3rem] mb-3 bg-gry-30 rounded-[9px]">
              {activity.details.booking.map((bookingItem, bookingIndex) => (
                <div key={bookingItem.id}>
                  {/* INPUT REQUIRED */}
                  <label>
                    <p className="m-s-b text-fs-14 m-0">{bookingItem.label}</p>
                    {bookingItem.required && (
                      <span className="text-red-100">*</span>
                    )}
                  </label>

                  {/* DYNAMIC INPUTS */}
                  <input
                    type={bookingItem.type}
                    className="block w-full py-[0.375rem] px-[0.75rem] text-fs-16 leading-[1.5] appearance-none rounded-[.375rem] m-m mb-2 focus:outline-none focus:border focus:border-[#7EC2DD] focus:shadow-3xl focus:shadow-[#7EC2DD]"
                    value={
                      formData[activityIndex] &&
                      formData[activityIndex].booking &&
                      formData[activityIndex].booking[bookingIndex] &&
                      formData[activityIndex].booking[bookingIndex][
                        bookingItem.id
                      ]
                    }
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        activityIndex,
                        "booking",
                        null,
                        bookingIndex,
                        bookingItem.id,
                        bookingItem.required
                      )
                    }
                  />
                </div>
              ))}
            </div>

            {/* PASSENGERS CONTAIN */}
            {activity.details.passengers && (
              <div>
                {/* TITLE TOUR */}
                <div className="mt-[16px] m-b text-fs-12 mb-1 flex">
                  <img
                    src="https://sandboxmexico.com/assets/icons/adults/adults-o.svg"
                    alt="no found"
                    className="mr-2 ml-1"
                  />
                  Información de pasajero
                </div>

                {activity.details.passengers.map(
                  (passengerGroup, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="p-[1.3rem] bg-[#f4f4f4] rounded-[9px] mb-3"
                    >
                      <div className="m-b text-fs-16 mb-2">
                        Persona #{groupIndex + 1}
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {passengerGroup.map((passenger, passengerIndex) => (
                          <div key={passenger.id}>
                            <label>
                              <b>{passenger.label}</b>
                              {passenger.required && (
                                <span className="text-red-100">*</span>
                              )}
                            </label>
                            {passenger.type === "select" ? (
                              <select
                                className="mb-2"
                                value={
                                  formData[activityIndex] &&
                                  formData[activityIndex].passengers &&
                                  formData[activityIndex].passengers[
                                    groupIndex
                                  ] &&
                                  formData[activityIndex].passengers[
                                    groupIndex
                                  ][passengerIndex] &&
                                  formData[activityIndex].passengers[
                                    groupIndex
                                  ][passengerIndex][passenger.id]
                                }
                                onChange={(e) =>
                                  handleInputChange(
                                    e,
                                    activityIndex,
                                    "passengers",
                                    groupIndex,
                                    passengerIndex,
                                    passenger.id,
                                    passenger.required
                                  )
                                }
                              >
                                {passenger.options.map(
                                  (option, optionIndex) => (
                                    <option key={optionIndex} value={option.id}>
                                      {languageData.countries[option.text]}
                                    </option>
                                  )
                                )}
                              </select>
                            ) : (
                              <input
                                type="text"
                                className="m-0 rounded-lg m-b w-full py-[7px] px-[16px] text-fs-14 leading-[1.5] appearance-none focus:outline-none border border-[#ebebeb] placeholder:text-fs-12 placeholder:text-gry-70 mb-2"
                                value={
                                  formData[activityIndex] &&
                                  formData[activityIndex].passengers &&
                                  formData[activityIndex].passengers[
                                    groupIndex
                                  ] &&
                                  formData[activityIndex].passengers[
                                    groupIndex
                                  ][passengerIndex] &&
                                  formData[activityIndex].passengers[
                                    groupIndex
                                  ][passengerIndex][passenger.id]
                                }
                                onChange={(e) =>
                                  handleInputChange(
                                    e,
                                    activityIndex,
                                    "passengers",
                                    groupIndex,
                                    passengerIndex,
                                    passenger.id,
                                    passenger.required
                                  )
                                }
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
