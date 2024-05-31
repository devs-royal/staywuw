import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../../assets/styles/web/App.css";
import "../../../../../assets/styles/web/Hotel.css";
import "../../../../../assets/styles/web/Tour.css";

import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import ContactUs from "@/components/General/ContactUs";
import { TokenProvider } from "@/config/context/AuthContext";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import ListTour from "@/services/Tours/components/Listing/ListTour";

export async function generateMetadata({ searchParams }) {
  const destination = searchParams.destination || "México";
  const checkIn = searchParams.dateStart;

  return {
    title: `Descubre ${destination}: Encuentra los Mejores Tours con ${process.env.NEXT_PUBLIC_NAME_COMPANY}.com`,
    description: `Encuentra los mejores tours en ${destination} del ${checkIn} . Explora con ${process.env.NEXT_PUBLIC_NAME_COMPANY}`,
    keywords: `tours en ${destination}, viajes por ${destination}, aventuras en ${destination}, excursiones en ${destination}, destinos turísticos ${destination}, guía de viaje ${destination}`,
    author: `${process.env.NEXT_PUBLIC_NAME_COMPANY}`,
  };
}

export default function Home() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <Token />
          <Navigation />
          <ListTour />
          <ContactUs />
          <Footer />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
