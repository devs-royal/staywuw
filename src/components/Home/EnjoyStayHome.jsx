"use client";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

import { useContext } from "react";
import CardHotelHome from "./CardHotelHome";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LanguageContext from "@/language/LanguageContext";

export default function EnjoyStayHome() {
  const { languageData } = useContext(LanguageContext);

  const hotelsEnjoy = [
    {
      code: 3982,
      name: "Loreto Bay Golf Resort and Spa",
      codeName: "loreto-bay-golf-resort-and-spa",
      image:
        "https://api.sandboxmexico.com/assets/images/hotels/606/057753a_hb_a_007.webp",
      destinationCodeName: "loreto",
      price: 131.84,
      stars: 4,
      address: "Mision de Loreto S/N, Colonia Nopolo",
      es: {
        destination: "Loreto",
        country: "mexico",
      },
      en: {
        destination: "Loreto",
        country: "mexico",
      },
    },
    {
      code: 4017,
      name: "Fiesta Americana Cancún Villas",
      codeName: "fiesta-americana-cancun-villas",
      image:
        "https://cdn.worldota.net/t/x500/content/38/a1/38a18a45099c88639a78240fcc23a280cb8aa568.jpeg",
      destinationCodeName: "cancun",
      price: 292.08,
      stars: 4,
      address: "Sección A, Lote 3 Km. 8.5 Boulevard Kukulkan",
      es: {
        destination: "Cancún",
        country: "mexico",
      },
      en: {
        destination: "Cancun",
        country: "mexico",
      },
    },
    {
      code: 4028,
      name: "Moon Palace Cancún All Inclusive",
      codeName: "moon-palace-cancun-all-inclusive",
      image:
        "https://api.sandboxmexico.com/assets/images/hotels/78/005186a_hb_a_027.webp",
      destinationCodeName: "riviera-maya-playa-del-carmen",
      price: 502.34,
      stars: 5,
      address: "Carretera Cancun-Chetumal km. 340",
      es: {
        destination: "Riviera Maya / Playa del Carmen",
        country: "mexico",
      },
      en: {
        destination: "Playa del Carmen",
        country: "mexico",
      },
    },
    {
      code: 4035,
      name: "Occidental Costa Cancún",
      codeName: "occidental-costa-cancun",
      image:
        "https://api.sandboxmexico.com/assets/images/hotels/230/007894a_hb_a_002.webp",
      destinationCodeName: "cancun",
      price: 270.49,
      stars: 4,
      address: "Boulevard Kukulcan Km 45, Lote D75",
      es: {
        destination: "Cancún",
        country: "mexico",
      },
      en: {
        destination: "Cancun",
        country: "mexico",
      },
    },
    {
      code: 4040,
      name: "Hotel Tesoro Los Cabos",
      codeName: "hotel-tesoro-los-cabos",
      image:
        "https://api.sandboxmexico.com/assets/images/hotels/130/005443a_hb_a_002.webp",
      destinationCodeName: "los-cabos",
      price: 167.07,
      stars: 3,
      address: "Boulevard Paseo De La Marina S N Lote 9 10",
      es: {
        destination: "Los Cabos",
        country: "mexico",
      },
      en: {
        destination: "Los Cabos",
        country: "mexico",
      },
    },
    {
      code: 4084,
      name: "Ramada Plaza by Wyndham Veracruz Boca Del Rio",
      codeName: "ramada-plaza-by-wyndham-veracruz-boca-del-rio",
      image:
        "https://api.sandboxmexico.com/assets/images/hotels/965/103514a_hb_a_007.webp",
      destinationCodeName: "veracruz",
      price: 100.01,
      stars: 5,
      address: "241 Las Americas Av",
      es: {
        destination: "Veracruz",
        country: "mexico",
      },
      en: {
        destination: "Veracruz",
        country: "mexico",
      },
    },
    {
      code: 4089,
      name: "Fiesta Mexicana",
      codeName: "fiesta-mexicana",
      image:
        "https://api.sandboxmexico.com/assets/images/hotels/1300/152655a_hb_a_005.webp",
      destinationCodeName: "manzanillo",
      price: 167.07,
      stars: 4,
      address: "Blvd. Miguel de la Madrid Km 8.5",
      es: {
        destination: "Manzanillo",
        country: "mexico",
      },
      en: {
        destination: "Manzanillo",
        country: "mexico",
      },
    },
    {
      code: 4117,
      name: "DoubleTree By Hilton Veracruz",
      codeName: "doubletree-by-hilton-veracruz",
      image:
        "https://api.sandboxmexico.com/assets/images/hotels/2042/490921a_hb_a_001.webp",
      destinationCodeName: "veracruz",
      price: 77.28,
      stars: 4,
      address: "Blvd. Manuel Avila Camacho 707, 7",
      es: {
        destination: "Veracruz",
        country: "mexico",
      },
      en: {
        destination: "Veracruz",
        country: "mexico",
      },
    },
    {
      code: 4154,
      name: "City Express Junior Veracruz Aeropuerto",
      codeName: "city-express-junior-veracruz-aeropuerto",
      image:
        "https://api.sandboxmexico.com/assets/images/hotels/1486/187909a_hb_a_001.webp",
      destinationCodeName: "veracruz",
      price: 67.05,
      stars: 3,
      address: "Calzada Manuel de Jesús Clouthier 6241",
      es: {
        destination: "Veracruz",
        country: "mexico",
      },
      en: {
        destination: "Veracruz",
        country: "mexico",
      },
    },
  ];

  return (
    <div className="flex h-[448px] w-full rounded-lg max-lg:flex-col max-lg:h-auto">
      {/* TEXT AND BTN SEE OFFERS */}
      <div className="w-[40%] relative max-lg:w-full max-lg:h-[448px] max-lg:rounded-t-lg max-lg:bg-bl-100">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}banners/home/Frame-1693.jpg`}
          alt="fondo azul con palmeras"
          className="h-full w-full rounded-l-lg max-lg:rounded-t-lg max-lg:rounded-l-0"
        />

        <div className="absolute bottom-0 flex flex-col gap-[16px] pb-[90px] pl-[49px] w-[80%] max-2xl:pb-[65px] max-md:pb-[45px] max-xl:pb-[55px] max-lg:pb-[81px]">
          <h2 className="text-white m-s-b text-fs-32 max-xl:text-fs-28 max-lg:text-fs-32 max-md:text-fs-28 leading-[1.13]">
            {languageData.enjoyStayHome.titleEnjoy}
          </h2>

          <span className="text-white m-m text-fs-14">
            {languageData.enjoyStayHome.offersDates}:{" "}
            <b>del 29 de abril al 14 de mayo.</b>
          </span>

          <span className="text-white m-m text-fs-16">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            consectetur adipisicing elit.{" "}
          </span>

          <button className="px-[16px] py-[14px] bg-or-100 text-white text-fs-14 m-s-b rounded-full w-fit hover:!bg-or-110 mt-[20px]">
            {languageData.enjoyStayHome.btnViewOffers}
          </button>
        </div>
      </div>

      {/* SWIPER CARDS HOTEL */}
      <div className="w-[60%] relative max-lg:w-full max-lg:h-[448px] max-lg:rounded-b-lg max-lg:bg-bl-100">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}banners/home/Pool_view_4.tmedium.jpg`}
          alt="alberca con palmeras alrededor"
          className="h-full w-full pt-[1px] rounded-r-lg brightness-75 max-lg:rounded-b-lg"
        />

        <div className="absolute top-0 w-full h-full pl-[70px] pr-[83px] max-md:px-[40px] pt-[54.2px]">
          <Swiper
            slidesPerView={1}
            className="h-full rounded-lg !static"
            id="swiper-home-enjoy-stay"
            initialSlide={0}
            spaceBetween={12}
            navigation
            modules={[Navigation]}
            breakpoints={{
              489: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {hotelsEnjoy.map((hotel, index) => (
              <SwiperSlide className="!rounded-lg shadow-3xl" key={index}>
                {/* CARDS HOTEL */}
                <CardHotelHome hotel={hotel} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
