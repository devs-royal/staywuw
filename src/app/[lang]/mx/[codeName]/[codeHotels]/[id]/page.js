// "use client";

import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import Page404 from "@/components/General/Page404";
import { Container } from "@/config/Others/Container";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import DetailsHotel from "@/services/Hotels/components/DetailHotel/DetailHotel";
import { RoomsHotelProvider } from "@/services/Hotels/context/RoomsHotelContext";
import { GalleryModal } from "@/services/Hotels/components/GalleryModal/GalleryModal";
import DetailReservation from "@/services/Hotels/components/DetailReservation/DetailReservation";
import { ReservationFailed } from "@/services/Hotels/components/AlertsHotel/HotelInformationAlerts";

export async function generateMetadata({ params }) {
  try {
    // METHOD AXIOS
    const response = await axiosWithInterceptor.get(
      `v1/hotels/${params.id}/rooms`
    );

    // METADATA DETAIL HOTEL
    const hotelMetaData = response.data;

    return {
      title: `${hotelMetaData.name} - StayWuw`,
      description: `${hotelMetaData.description}`,
      address: hotelMetaData.address,
      city: hotelMetaData.city,
      destination: hotelMetaData.destination,
      checkIn: hotelMetaData.checkIn,
      checkOut: hotelMetaData.checkOut,
      stars: hotelMetaData.stars,
      facilities: hotelMetaData.facilities.join(", "),
      breakfastIncluded: hotelMetaData.breakfast ? "Yes" : "No",
      exclusiveDeal: hotelMetaData.exclusiveDeal
        ? `Exclusive Deal: ${hotelMetaData.exclusiveDeal}`
        : "No Exclusive Deals",
      images: hotelMetaData.images.slice(0, 6),
    };
  } catch (error) {
    console.error("Error fetching hotel metadata:", error);
    // Handle error here
    return null;
  }
}

export default async function DetailPageHotel({ params }) {
  try {
    const response = await axiosWithInterceptor.get(
      `v1/hotels/${params.id}/rooms`
    );

    const hotelData = response.data;

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Hotel",
      name: hotelData.name,
      description: hotelData.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: hotelData.address,
        addressLocality: hotelData.city,
        addressRegion: hotelData.city,
        postalCode: "12345",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.712776,
        longitude: -74.005974,
      },
      url: `https://staywuw.com/en/mx/${params.codeName}/${params.codeHotels}/${params.id}`,
      telephone: "+52 998 134 2286",
      starRating: {
        "@type": "Rating",
        ratingValue: hotelData.stars,
        bestRating: "5",
      },
      checkinTime: hotelData.checkIn,
      checkoutTime: hotelData.checkOut,
      numberOfRooms: 150,
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Amenidades",
          value: hotelData.facilities.join(", "),
        },
      ],
      image: [...hotelData.images],
    };

    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <RoomsHotelProvider>
              <Token />
              <Navigation hotelDetails={true} />
              <div className="relative bg-gry-30">
                <Container>
                  <section>
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                      }}
                    />
                  </section>
                  <GalleryModal codeName={params.codeName} hotel={hotelData} />
                  <DetailsHotel codeHotel={params.id} />
                </Container>
                <ReservationFailed />
                <DetailReservation />
              </div>
              <Footer />
            </RoomsHotelProvider>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  } catch (error) {
    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation hotelDetails={true} />
            <Page404 />
            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  }
}
