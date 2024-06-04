import { useState, useContext } from "react";


import Image from "next/image";

import LodgingHotel from "./LodgingLogic";
import LanguageContext from "../../../../language/LanguageContext";

const listOptions = [
  {
    id:1,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/beach/beach-w.svg`,
    iconActive: `${process.env.NEXT_PUBLIC_URL}icons/beach/beach-b.svg`,
    name: "beach",
  },

  {
    id:2,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/family/family-w.svg`,
    iconActive: `${process.env.NEXT_PUBLIC_URL}icons/family/family-b.svg`,
    name: "family",
  },

  {
    id:3,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/romantic/romantic-w.svg`,
    iconActive: `${process.env.NEXT_PUBLIC_URL}icons/romantic/romantic-b.svg`,
    name: "romantic",
  },

  {
    id:4,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/business/business-w.svg`,
    iconActive: `${process.env.NEXT_PUBLIC_URL}icons/business/business-b.svg`,
    name: "business",
  },

  {
    id:5,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/adults/adults-w.svg`,
    iconActive: `${process.env.NEXT_PUBLIC_URL}icons/adults/adults-b.svg`,
    name: "adults",
  },

  {
    id:6,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/pet/pet-w.svg`,
    iconActive: `${process.env.NEXT_PUBLIC_URL}icons/pet/pet-b.svg`,
    name: "petFriendly",
  },
];

export default function ShuffleHotel() {
  const { languageData } = useContext(LanguageContext);

  const [menuShuffleHotel, setMenuShuffleHotel] = useState(0);
  const [categorySelected, setCategorySelected] = useState(1);

  const handleCategory = (index, category) =>{
    setMenuShuffleHotel(index)
    setCategorySelected(category)
  }

  return (
    <div>
      {/* TITLE */}
      <h2 className="m-b text-fs-24 mb-8 ">
        {languageData.homeDestinations[1].titleType}
      </h2>

      {/* MENU  */}
      <div className="flex overflow-y-hidden gap-10 bg-gry-50 py-[8px] px-[12px] rounded-3xl mb-8 w-fit max-lg:w-full h-max">
        {listOptions.map((option, index) => (
          <button key={index}
            onClick={() => handleCategory(index, option.id)}
            className={`${
              menuShuffleHotel === index
                ? "bg-or-100 rounded-3xl text-white"
                : "text-gry-100"
            } flex gap-2 py-2 px-4 justify-center items-center h-max`}
          >
            {menuShuffleHotel === index ? (
              <Image
                src={option.icon}
                alt={option.name}
                width={16}
                height={16}
              />
            ) : (
              <Image
                src={option.iconActive}
                alt={option.name}
                width={16}
                height={16}
              />
            )}

            <span className={`text-nowrap text-fs-12 m-m`}>
              {languageData.hotelTypes[option.name]}
            </span>
          </button>
        ))}
      </div>
      
      <LodgingHotel selectionId={categorySelected}/>
    </div>
  );
}