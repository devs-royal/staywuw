import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import ContactUs from "@/components/General/ContactUs";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import OurHistory from "@/components/About/OurHistory/OurHistory";

export async function generateMetadata() {
  return {
    title: "Nuestra Historia - StayWuw",
    description:
      "StayWuw: Experiencias de viaje inolvidables en México y el mundo. Desde 2017, facilitamos la reserva de hoteles, transportes y tours, con un crecimiento destacado en Cancún. Descubre nuestra evolución y compromiso con una plataforma intuitiva y confiable.",
    keywords:
      "StayWuw, reservas de viaje, experiencias de viaje, hoteles en México, tours en México, reserva de hoteles, viajar a México",
    author: "StayWuw",
  };
}

export default function ourHistory() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <Token />
          <Navigation />
          <OurHistory />
          <ContactUs />
          <Footer />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
