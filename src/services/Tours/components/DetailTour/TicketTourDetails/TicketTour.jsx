"use client";

import { useContext, useState, useEffect } from "react";

import AddCartTour from "./AddCartTour";
import { PersonsButtonTour } from "./PersonsButtonTour";
// import { InfantButton } from "./InfantButton";
// import { ChildrenButton } from "./ChildrenButton";
import LanguageContext from "@/language/LanguageContext";
import DetailTourContext from "@/services/Tours/context/DetailTourContext";
import { CancelPolicyToulTip } from "./CancelPolicy";

export function TicketsTour(props) {
  const { setIsModality, isModality, tourData } = props;
  const { languageData } = useContext(LanguageContext);
  const { selectModality } = useContext(DetailTourContext);
  const [isLoader, setIsLoader] = useState(false);

  const [openPolicy, setOpenPolicy] = useState(false);

  // CATEGORIES SELECTED PERSONS
  const [categories, setCategories] = useState([]);

  const calculateTotalPrice = () => {
    return categories.reduce(
      (total, category) => total + category.count * category.price,
      0
    );
  };

  useEffect(() => {
    if (selectModality && selectModality.categories) {
      setCategories(
        selectModality.categories.map((category) => ({ ...category, count: 0 }))
      );
    }
  }, [selectModality]);

  const totalPrice = calculateTotalPrice();

  const selectionsArray = categories.map(
    (category) => `${category.id}.${category.count}`
  );

  const taxes = totalPrice * 0.16;
  const netPrice = totalPrice * 0.84;

  const handleMouseOver = () => {
    setOpenPolicy(true);
  };

  const handleMouseLeave = () => {
    setOpenPolicy(false);
  };

  return (
    isModality &&
    selectModality && (
      <div className="relative">
        {/* TITLE SELECT MODALITY TOUR */}
        <div className="flex flex-col gap-y-1 pb-4">
          <span className="m-s-b text-fs-14 text-black text-start w-max pb-1">
            {languageData.modalTour.OccupancyTours.selectYourTickets}
          </span>

          <span className="text-fs-12 m-m text-gry-100">
            {languageData.modalTour.OccupancyTours.subtitleSelectYourTickets}
          </span>
        </div>

        <div className="flex flex-col max-sm:gap-y-4 sm:flex-row items-center sm:items-start gap-x-[11px]">
          {/* CART INFO TOUR */}
          <div className="relative h-max w-[202px]">
            <img
              src={`${process.env.NEXT_PUBLIC_URL}general/ticket-tour.webp`}
              alt="ticket tour"
              className="absolute left-0 top-0 w-full h-full drop-shadow-[0_0_10px_rgba(0,0,0,.11)] z-[1]"
            />

            {/* TITLE TOUR */}
            <div className="flex flex-col pt-4 pb-[13px] pl-4 pr-[22px] relative z-[2]">
              <span className="text-fs-12 m-s-b text-black text-center mb-4">
                {selectModality.text}
              </span>

              <div className="flex flex-col gap-y-2">
                <span className="text-fs-12 m-b text-black text-start">
                  {languageData.modalTour.prices}
                </span>

                {/* PRICES INFO */}
                {selectModality.categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <p className="text-gry-100 text-fs-10 m-m m-0">
                      {category.text}
                    </p>
                    {/* text-gry-100 */}
                    <span className="text-fs-12 m-b text-black">
                      $
                      {Math.floor(category.price)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}{" "}
                      MXN
                    </span>
                  </div>
                ))}
              </div>

              <span className="px-2 border-dashed border border-gry-70 w-fulls my-4" />

              <button
                className={`${isLoader && 'bg-gry-30'} border-2 border-or-100 rounded-full px-[25px] py-[2px] text-or-100 text-fs-12 m-s-b hover:bg-gry-30`}
                onClick={() => setIsModality(false)}
                disabled={isLoader}
              >
                {languageData.modalTour.OccupancyTours.changeSelection}
              </button>

              {tourData.activity.cancelPolicies && (
                <div
                  className="relative flex justify-center"
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="text-center text-fs-10 m-s-b text-bl-100 pt-2 cursor-pointer relative">
                    {languageData.containerModalHotel.policies}
                  </span>
                  {openPolicy && <CancelPolicyToulTip policies={tourData.activity.cancelPolicies}/>}
                  {/* <CancelPolicyToulTip policies={tourData.activity.cancelPolicies}/> */}
                </div>
              )}
            </div>
          </div>

          {/* CART SELECT PEOPLE */}
          <div className="bg-bl-100 rounded-lg !p-5 flex flex-col gap-y-2 w-[229px]">
            <PersonsButtonTour
              categories={categories}
              setCategories={setCategories}
            />

            <span className="my-[7.5px] border-dashed border border-gry-70 w-fulls" />

            {/* NET PRICE */}
            <div className="flex flex-col gap-y-2 mb-2">
              <div className="flex justify-between items-center">
                <span className="text-fs-10 m-s-b text-white w-max">
                  Subtotal
                </span>
                <span className="text-white text-fs-12 m-s-b">
                  $
                  {Math.floor(netPrice)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                  .<sup>{(netPrice % 1).toFixed(2).slice(2)} </sup>
                </span>
              </div>

              {/* TAXES PRICE * 16 */}
              <div className="flex justify-between items-center">
                <span className="text-fs-10 m-s-b text-white w-max">
                  {languageData.booking.taxes}
                </span>
                <span className="text-white text-fs-12 m-s-b">
                  {" "}
                  $
                  {Math.floor(taxes)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                  .<sup>{(taxes % 1).toFixed(2).slice(2)} </sup>
                </span>
              </div>

              {/* TOTAL PRICE */}
              <div className="flex justify-between items-center">
                <span className="text-fs-12 m-s-b text-white w-max">
                  {languageData.confirmation.total}
                </span>
                <span className="text-white text-fs-16 m-s-b">
                  $
                  {Math.floor(totalPrice)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                  .<sup>{(totalPrice % 1).toFixed(2).slice(2)}</sup>
                </span>
              </div>
            </div>
            <AddCartTour tourists={selectionsArray} totalPrice={totalPrice} isLoader={isLoader} setIsLoader={setIsLoader} />
          </div>
        </div>
      </div>
    )
  );
}
