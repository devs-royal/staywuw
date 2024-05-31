import BannerTourH from "../../assets/images/banners/tour/safe_travel.webp";
// import BannerTourH from "../../assets/images/banners/tour/tour_banner.webp";
import BannerHotelH from "../../assets/images/banners/hotel/banner_hotel.webp";
import BannerHotelHMobile from "../../assets/images/banners/hotel/banner-hotel-movil.webp";
import BannerTourP from "../../assets/images/banners/tour/tour_royal_banner.webp";
// import BannerFaqHelp from "../../assets/images/banners/others/banner-faq-help.webp";
import BannerHotelC from "../../assets/images/banners/hotel/banner-card-hotel.webp";
import MBannerHotelC from "../../assets/images/banners/hotel/m-banner-card-hotel.webp";
// import BannerAboutUs from "../../assets/images/banners/others/banner-about-us.webp";
import BannerHotelP from "../../assets/images/banners/hotel/hotel_royal_banner.webp";
import BannerHotelPMobile from "../../assets/images/banners/hotel/hotel_royal_banner_mobile.webp";
import BannerContact from "../../assets/images/banners/others/contact_reservation.webp";
import BannerCallCenter from "../../assets/images/banners/hotel/call_center_agent.webp";
import BannerCallCenterMobile from "../../assets/images/banners/hotel/call_center_agent_mobile.webp";
import BannerHotelL from "../../assets/images/banners/hotel/banner_search_contact.webp";
import BannerHotelLMobile from "../../assets/images/banners/hotel/banner_search_contact_mobile.webp";
import BannerTourTraveling from "../../assets/images/banners/tour/traveling_banner.webp";
import BannerTransferH from "../../assets/images/banners/transportation/safe_travel.webp";
import BannerTourFamily from "../../assets/images/banners/tour/traveling_family_banner.webp";
import BannerTourMexico from "../../assets/images/banners/tour/traveling_mexico_banner.webp";
import BannerTransferP from "../../assets/images/banners/transportation/safe_private_transfer.webp";
import BannerTransferSafe from "../../assets/images/banners/transportation/private_transfer_safe.webp";
import BannerTransferBest from "../../assets/images/banners/transportation/private_transfer_best.webp";
import BannerTransferTravel from "../../assets/images/banners/transportation/private_transfer_travel.webp";
import ContactReservation from "../../assets/images/banners/others/contact_reservation.webp";

export const hotel = {
  bannerHome: {
    imageW: BannerHotelH,
    alt: "altHotelH",
    title: "titleHotelH",
    data:[
      {title:"title1"},
      {title:"title2"},
      {title:"title3"}
    ],
    imageM: BannerHotelHMobile,
  },
  bannerPrincipal: {
    imageW: BannerHotelP,
    alt: "altHotelP",
    // title: "titleHotelP",
    // paragraph: "subtitleHotelP",
    imageM: BannerHotelPMobile,
    data: [
      { title: "title1", description: "subtitle1"},
      { title: "title2", description: "subtitle2"},
      { title: "title3", description: "subtitle3"}
  ],
  },
  bannerListing: {
    image: BannerHotelL,
    alt: "altListing",
    // title: "titleListing",
    paragraph: "subtitleListing",
    imageMobile: BannerHotelLMobile,
    data:[
      {title:"titleListing1"},
      {title:"titleListing2"},
      {title:"titleListing3"},
      {title:"titleListing4"},
      {title:"titleListing5"},
    ]
  },
  bannerCallCenter: {
    image: BannerCallCenter,
    alt: "altCallCenter",
    title: "titleCallCenter",
    paragraph1: "subtitleCallCenter1",
    paragraph2: "subtitleCallCenter2",
    imageMobile: BannerCallCenterMobile,
  },
};

export const Tour = {
  bannerHome: {
    image: BannerTourH,
    imageM:"",
    alt: "altTourH",
    title: "titleTourH",
  },
  bannerPrincipal: {
    image: BannerTourP,
    alt: "altTourP",
    title: "titleTourP",
    paragraph: "subtitleTourP",
  },
  bannerFamily: {
    image: BannerTourFamily,
    alt: "altTourF",
    title: "titleTourFamily",
    paragraph: "subtitleTourF",
  },
  bannerMexico: {
    image: BannerTourMexico,
    alt: "altTourM",
    title: "titleTourMexico",
    paragraph: "subtitleTourM",
  },
  bannerTraveling: {
    image: BannerTourTraveling,
    alt: "altTourT",
    title: "titleTourTraveling",
    paragraph: "subtitleTourT",
  },
};

export const Transfer = {
  bannerHome: {
    image: BannerTransferH,
    alt: "altTransferH",
    title: "titleTransferH",
  },
  bannerPrincipal: {
    image: BannerTransferP,
    alt: "altTransferP",
    title: "titleTransferP",
    paragraph: "subtitleTransferP",
  },
  bannerBest: {
    image: BannerTransferBest,
    alt: "altTransferB",
    title: "titleTransferBest",
    paragraph: "subtitleTransferB",
  },
  bannerSafe: {
    image: BannerTransferSafe,
    alt: "altTransferS",
    title: "titleTransferSafe",
    paragraph: "subtitleTransferS",
  },
  bannerTravel: {
    image: BannerTransferTravel,
    alt: "altTransferT",
    title: "titleTransferTravel",
    paragraph: "subtitleTransferT",
  },
};

export const Others = {
  bannerFqs: {
    image: `${process.env.NEXT_PUBLIC_URL}banners/desktop/banner-faq.webp`,
    alt: "altFaqs",
    title: "titleFaqs",
  },
  bannerHelp: {
    image: `${process.env.NEXT_PUBLIC_URL}banners/desktop/banner-faq-help.webp`,
    alt: "altFaqHelp",
    title: "titleFaqHelp",
    paragraph: "subtitleFaqHelp",
    text: "paragraph",
  },
  bannerContact: {
    image: BannerContact,
    alt: "altContact",
    title: "titleContact",
    paragraph: "subtitleContact",
  },
  bannerAbout: {
    image: `${process.env.NEXT_PUBLIC_URL}banners/desktop/banner-about-us.webp`,
    alt: "altAboutUs",
    title: "titleAboutUs",
  },
  bannerConfirmPayment:{
    image: ContactReservation,
    alt: "confirmedPayment",
    title: "titleConfirmedPayment",
    paragraph: "subTitleConfirmedPayment"
  }
};

export const CardListing = {
  imgListing: [
    {
      id: 1,
      image: BannerHotelC,
      alt: "altCard",
      title: "titleCard1",
      paragraph: "subtitleCard1",
    },
    {
      id: 2,
      image: BannerHotelC,
      alt: "altCard",
      title: "titleCard2",
      paragraph: "subtitleCard2",
    },
    {
      id: 3,
      image: BannerHotelC,
      alt: "altCard",
      title: "titleCard3",
      paragraph: "subtitleCard3",
    },
    {
      id: 3,
      image: BannerHotelC,
      alt: "altCard",
      title: "titleCard4",
      paragraph: "subtitleCard4",
    },
  ],
};
export const MobileCardListing = {
  imgListing: [
    {
      id: 1,
      image: MBannerHotelC,
      alt: "altCard",
      title: "titleCard1",
      paragraph: "subtitleCard1",
    },
    {
      id: 2,
      image: MBannerHotelC,
      alt: "altCard",
      title: "titleCard2",
      paragraph: "subtitleCard2",
    },
    {
      id: 3,
      image: MBannerHotelC,
      alt: "altCard",
      title: "titleCard3",
      paragraph: "subtitleCard3",
    },
    {
      id: 3,
      image: MBannerHotelC,
      alt: "altCard",
      title: "titleCard4",
      paragraph: "subtitleCard4",
    },
  ],
};