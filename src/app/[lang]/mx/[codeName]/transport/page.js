import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import Page404 from "@/components/General/Page404";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import ListingTransport from "@/services/Transport/components/listing/ListingTransport";
import { ListingTransportProvider } from "@/services/Transport/context/ListingTransportContext";

export async function generateMetadata({ searchParams }) {
  try {
    const response = await axiosWithInterceptor.get(
      `v1/transports/destinations/${searchParams.destinationId}/zones/${searchParams.zoneFromId}/${searchParams.zoneToId}/vehicles`
    );
    const transportData = response.data;

    return {
      title: `Transporte - StayWuw`,
    };
  } catch (error) {
    console.error("Error fetching hotel metadata:", error);
    return null;
  }
}

export default async function DetailPageHotel({ searchParams }) {
  try {
    const roundQueryParam =
      searchParams.type === "round"
        ? 1
        : searchParams.type === "simple"
        ? 0
        : "";

    const response = await axiosWithInterceptor.get(
      `v1/transports/destinations/${searchParams.destinationId}/zones/${searchParams.zoneFromId}/${searchParams.zoneToId}/vehicles?round=${roundQueryParam}`
    );

    const transportData = response.data;

    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <ListingTransportProvider>
              <Token />
              <Navigation />
              <ListingTransport data={transportData.vehicles} />
              <Footer />
            </ListingTransportProvider>
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
            <Navigation />
            <Page404 />
            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  }
}
