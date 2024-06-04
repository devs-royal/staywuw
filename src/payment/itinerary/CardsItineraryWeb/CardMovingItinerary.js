import Image from "next/image";
import React, { useContext } from "react";

import LanguageContext from "../../../language/LanguageContext";

import IconLocationBorder from "../../../assets/icons/utils/others/location-border.svg";


export default function CardMovingItinerary(props) {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex gap-x-2 items-start">
      <Image
        className="w-4"
        src={IconLocationBorder}
        alt="IconLocationBorder"
        width={16}
      />

      <div className="flex flex-col gap-y-5">
        <span className="flex gap-x-1">
          <h3 className="m-b text-fs-16 text-or-100 m-0">Lunes</h3>{" "}
          <h3 className="m-m text-fs-16 text-gry-70 m-0">01/22/2024 | 02:00pm</h3>
        </span>

        {/* CARD TRANSPORT ITINERARY */}
        <div className="bg-white p-4 rounded-lg w-full flex gap-x-8 relative items-center">
          {/* REMOVE RESERVATION */}
          <Image
            className="w-[10px] h-[10px] absolute right-4 top-4"
            src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-100.svg`}
            alt="close card icon"
            width={10}
            height={10}
          />

          <Image
            className="object-cover w-[133px] h-[118px]"
            src={`${process.env.NEXT_PUBLIC_URL}banners/transport/transport-card.jpg`}
            alt="card transport"
            width={133}
            height={118}
          />

          <div className="flex gap-x-6 items-start">
            <div className="flex flex-col w-[227px] gap-y-1">
              <h2 className="m-b text-fs-16 text-black">Vehículo Standard</h2>

              <span className="flex items-center gap-x-1">
                <Image
                  className="w-[11px] h-[14px]"
                  src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
                  alt="location bl"
                  width={11}
                  height={14}
                />

                <p className="text-bl-100 text-fs-10 m-0 m-s-b">
                  Aeropuerto Internacional de Cancún
                </p>
              </span>

              <span className="flex items-center gap-x-1">
                <Image
                  className="w-[14px] h-[13px]"
                  src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`}
                  alt="location bl"
                  width={14}
                  height={13}
                />

                <p className="m-0 text-fs-10 text-gry-100">Modelo: KNSJKD</p>
              </span>
            </div>

            <div className="flex gap-x-[67px]">
              <div className="flex flex-col">
                <p className="text-fs-8 text-gry-100 m-m mb-1">Tipo de viaje</p>
                <p className="text-fs-12 text-black m-b mb-2">Redondo</p>

                <span className="flex items-center gap-x-1">
                  <Image
                    className="w-[12px] h-[13px]"
                    src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                    alt="adult b"
                    width={12}
                    height={13}
                  />

                  <p className="m-0 text-fs-10 text-gry-100 m-s-b">
                    4 Personas
                  </p>
                </span>
              </div>

              <div className="flex flex-col gap-y-1 items-start">
                <p className="text-fs-8 text-gry-100 m-m mb-1">
                  Impuestos incluido
                </p>

                <span className="text-black m-b flex items-center gap-x-1">
                  <p className="text-fs-12 m-0">MXN</p>
                  <p className="text-fs-16 m-0">
                    $10,000.<sup>00</sup>
                  </p>
                </span>

                <p className="text-bl-100 text-fs-8 m-s-b">
                  Políticas de cancelación
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
