import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Image from "next/image";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import { BannerConfig } from "../../config/BannersConfigH";
import LanguageContext from "../../../../language/LanguageContext";

export function BannerHomeHotelTop() {
  return (
    <>
      <Swiper
        className="h-[442px] md:h-72 2xl:h-[480px] w-full"
        slidesPerView={1}
        id="swiper-banner-home"
        navigation
        modules={[Navigation,Autoplay]}
        loop={true}
        cssMode={true}
        autoplay={{
          delay: 6000,
        }}
      >

        <SwiperSlide>
          <img
            className="object-cover	w-full h-full object-center select-none"
            src={BannerConfig.bannerTop.img}
            alt="banner-top"
            width="100%"
            height="100%"
          />
        </SwiperSlide>

        <SwiperSlide >
          <img
            className="object-cover	w-full h-full object-center select-none"
            src="https://www.royalvacationsmexico.com/static/media/banner_hotel.353834a1.webp"
            alt="banner-top-second"
            width="100%"
            height="100%"
          />
        </SwiperSlide>

      </Swiper>


      {/* <div className="h-[442px] md:h-72 2xl:h-[480px] w-full">
        <video
          className="object-cover w-full h-full object-center select-none"
          src="https://sandboxmexico.com/assets/test/aEvkEmejemplo.mp4"
          autoPlay
          loop
          muted
          playsInline
        >
          Tu navegador no soporta videos.
        </video>
        </div> */}
    </>
  );
}

export function BannerHomeHotelUp() {
  const Random =
    BannerConfig.bannerUp.text[
    Math.floor(Math.random() * BannerConfig.bannerUp.text.length)
    ];

  return (
    <div className="relative flex items-center my-10">
      <img src={BannerConfig.bannerUp.img} width="100%" />

      <div className="absolute pl-10 w-3/5 ">
        <h2 className="m-b text-yw-70 text-fsw-28 leading-6 max-md:leading-5">
          {Random.title}
        </h2>
        <p className="m-s-b text-or-50 text-fsw-18">{Random.subtitle}</p>
      </div>
    </div>
  );
}

export function BannerIcons() {
  return (
    <div className="flex m-b my-6 overflow-x-auto">
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img
          src="https://sandboxmexico.com/assets/icons/beach/beach-b.svg"
          alt="icon-beach-b"
          width={16}
          height={16}
        />
        <span>Playa</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img
          src="https://sandboxmexico.com/assets/icons/family/family-b.svg"
          alt="icon-family-b"
          width={16}
          height={16}
        />
        <span>Familia</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img
          src="https://sandboxmexico.com/assets/icons/romantic/romantic-b.svg"
          alt="icon-romantic-b"
          width={16}
          height={16}
        />
        <span>Romántico</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img
          src="https://sandboxmexico.com/assets/icons/business/business-b.svg"
          alt="icon-business-b"
          width={16}
          height={16}
        />
        <span>Negocios</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img
          src="https://sandboxmexico.com/assets/icons/adults/adults-b.svg"
          alt="icon-adults-b"
          width={16}
          height={16}
        />
        <span>Adultos</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img
          src="https://sandboxmexico.com/assets/icons/pet/pet-b.svg"
          alt="icon-pet-b"
          width={16}
          height={16}
        />
        <span>Pet Friendly</span>
      </div>
    </div>
  );
}

export function BannerHomeKnowMore() {
  const { languageData } = useContext(LanguageContext);
  const beach = `${process.env.NEXT_PUBLIC_URL}banners/hotel/Feb2024/beach.jpg`;
  const city = `${process.env.NEXT_PUBLIC_URL}/banners/hotel/Feb2024/city.jpg`;
  const selfie = `${process.env.NEXT_PUBLIC_URL}/banners/hotel/Feb2024/selfie.png`;

  return (
    <div className="flex h-[408px] mb-10 mt-16 lg:mt-32 max-lg:flex-col max-lg:h-auto">
      <div className="flex flex-col justify-center w-[50%] lg:py-12 lg:px-12 bg-white rounded-tl-lg rounded-bl-lg max-lg:rounded-tr-lg max-lg:rounded-bl-none max-lg:w-full max-lg:items-center">
        {/* FIX BOOSTRAP mb-5 - mb-[20px */}
        <h2 className="m-s-b text-fs-28 mb-[20px]">
          {languageData.titleBanners.bannerHoteldecided.havenDecided}
        </h2>

        {/* FIX BOOSTRAP mb-5 - mb-[20px */}
        <div className="mb-[20px] w-[84%]">
          <p className="m-0 text-fs-20 mb-[20px] m-m max-lg:text-center">
            {languageData.titleBanners.bannerHoteldecided.dontWorry}
            <span className="m-m text-bl-100">
              {" "}
              {languageData.titleBanners.bannerHoteldecided.hereSimplify}{" "}
            </span>
            {languageData.titleBanners.bannerHoteldecided.planning}
          </p>
        </div>

        <a
          className="bg-or-100 w-[164px] cursor-pointer content-center h-[44px] text-center text-nowrap rounded-full text-white m-m text-fs-12 mb-[50px] hover:bg-or-110 flex justify-center items-center no-underline"
          href="https://api.whatsapp.com/send?phone=529981342286&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!"
          target="_blank"
          rel="noopener noreferrer"
        >
          {languageData.titleBanners.bannerHoteldecided.knowMore}
        </a>
      </div>

      <div className="w-full lg:w-[50%] relative lg:h-full lg:rounded-b-lg lg:rounded-t-none">
        <Swiper
          loop={true}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper h-full"
        >
          <SwiperSlide className="bg-transparent">
            <img
              src={beach}
              width={364}
              height={259}
              className="relative w-full h-[259px] lg:h-full bottom-0 select-none"
              alt="Img beach"
            />
          </SwiperSlide>

          <SwiperSlide className="bg-transparent max-lg:w-full">
            <img
              src={city}
              width={364}
              height={259}
              alt="Img city"
              className="relative w-full h-[259px] lg:h-full bottom-0 max-lg:max-w-[100%] select-none"
            />
          </SwiperSlide>
        </Swiper>

        <img
          src={selfie}
          width={364}
          height={480}
          alt="selfie"
          className="absolute right-0 bottom-[0] z-[1] w-full h-[20rem] lg:h-[426px] xl:h-[472px] object-contain max-sm:w-[99%] max-sm:h-[20rem] max-lg:w-[99%] max-lg:h-[20rem] select-none"
        />
      </div>
    </div>
  );
}

export function BannerExcDiscounts() {
  return (
    <>
      <div className="max-lg:hidden">
        <BannerHomeHotelD />
      </div>
      <div className="lg:hidden">
        <BannerHomeHotelSwiper />
      </div>
    </>
  );
}
export function BannerHomeHotelSwiper() {
  const excDiscounts = `${process.env.NEXT_PUBLIC_URL}test/tour-banner-home.jpg`;
  const bannerTraveling = `${process.env.NEXT_PUBLIC_URL}general/Banner-Traveling.webp`;
  const bannerTour = `${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/xplor-feb24.webp`;

  const { languageData } = useContext(LanguageContext);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={15}
      className="h-[19rem]"
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
      }}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 0.5,
        },
        350: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 2.5,
        },
        1440: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide className="!w-[48%] max-lg:!w-full  !bg-white">
        <div className="w-full flex justify-center !bg-white">
          <Image
            src={excDiscounts}
            width={547}
            height={235}
            className="w-full h-[19rem] rounded-lg object-cover object-center select-none"
            alt="Banner Exc Discounts"
          />
        </div>
      </SwiperSlide>

      {/*TWO CARD TEXT */}
      <SwiperSlide className="!w-[25%] max-lg:!w-1/2 max-sm:!w-full !bg-gry-30 !flex !justify-center !bg-white">
        <div className="relative w-full flex justify-center ">
          <Image
            src={bannerTraveling}
            width={266}
            height={235}
            className="w-full rounded-lg select-none"
            alt="Banner Experimenta los mejores tours"
          />

          <div className="absolute top-[39px] left-[33px] max-xl:top-[32px] max-xl:left-[33px] max-sm:left-[12%] max-sm:top-[40px]">
            <h2 className="m-b w-9/12 text-white text-fs-28 mb-4 text-left max-2xl:text-fs-22 max-xl:text-fs-18 max-lg:text-fsw-48 max-sm:text-fs-24">
              {languageData.titleBanners.titleTourMexico}
            </h2>
            <h4 className="m-m w-9/12 text-[#BEE0EE] text-fs-22 text-left max-2xl:text-fs-18 max-xl:text-fs-16 max-lg:text-fsw-38 max-sm:text-fsw-64">
              {languageData.titleBanners.subtitleTourM}
            </h4>
          </div>
        </div>
      </SwiperSlide>
      {/*TWO CARD TEXT */}

      {/* THREE CARD IMAGE HOTEL */}
      <SwiperSlide className="!w-[25%] max-lg:!w-1/2 max-sm:!w-full !bg-gry-30 !flex !justify-center !bg-white">
        <div className="w-full flex justify-center">
          <Image
            src={bannerTour}
            width={266}
            height={235}
            className="w-full rounded-lg select-none object-cover object-bottom"
            alt="Banner tour mes de feb"
          />
        </div>
      </SwiperSlide>
      {/* THREE CARD IMAGE HOTEL */}
    </Swiper>
  );
}

export function BannerHomeHotelD() {

  const { languageData } = useContext(LanguageContext);
  const excDiscounts = `${process.env.NEXT_PUBLIC_URL}test/tour-banner-home.jpg`;
  const bannerTraveling = `${process.env.NEXT_PUBLIC_URL}general/Banner-Traveling.webp`;
  const bannerTour = `${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/xplor-feb24.webp`;

  return (
    <div className="flex gap-[16px] h-[318px] mb-[40px]">
      <div className="flex bg-white justify-center items-center shadow-3xl w-1/2">
        <div className="w-full h-full flex justify-center !bg-white overflow-hidden rounded-lg">
          <Image
            src={excDiscounts}
            width={547}
            height={235}
            className="w-full h-full rounded-lg object-cover object-center select-none transition-transform duration-500 transform scale-100 hover:scale-105"
            alt="Banner Exc Discounts"
          />
        </div>
      </div>

      <div className="relative flex justify-center w-3/12">
        <div className="relative w-full flex justify-center ">
          <Image src={bannerTraveling} width={266} height={235} className="w-full rounded-lg select-none" alt="Banner Experimenta los mejores tours" />

          <div className="absolute top-[39px] left-[33px] max-xl:top-[32px] max-xl:left-[33px] max-sm:left-[12%] max-sm:top-[40px]">
            <h2 className="m-b w-9/12 text-white text-fs-28 mb-4 text-left max-2xl:text-fs-22 max-xl:text-fs-18 max-lg:text-fsw-48 max-sm:text-fs-24">{languageData.titleBanners.titleTourMexico}</h2>
            <h4 className="m-m w-9/12 text-[#BEE0EE] text-fs-22 text-left max-2xl:text-fs-18 max-xl:text-fs-16 max-lg:text-fsw-38 max-sm:text-fsw-64" >{languageData.titleBanners.subtitleTourM}</h4>
          </div>
        </div>
      </div>

      <div className=" flex justify-center w-3/12 relative">
        <div className="w-full flex justify-center overflow-hidden rounded-lg">
          <Image
            src={bannerTour}
            width={266}
            height={235}
            className="w-full rounded-lg select-none object-cover object-bottom transition-transform duration-500 transform scale-100 hover:scale-105"
            alt="Banner tour mes de feb"
          />
        </div>
      </div>
    </div>
  );
}