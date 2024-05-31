import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import { TyC } from "@/components/About/TyC/TyC";
import ContactUs from "@/components/General/ContactUs";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";

export async function generateMetadata() {
  return {
    title: "Términos y Condiciones - StayWuw",
    description:
      "Reserva con Confianza - Nuestros Términos y Condiciones Definen Nuestro Compromiso con la Excelencia en el Servicio",
    keywords:
      "Términos y Condiciones de StayWuw, Política de Reservas, Uso del sitio Web, Responsabilidades del cliente",
    author: "StayWuw",
  };
}

export default function TyCPage() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <Token />
          <Navigation />
          <TyC />
          <ContactUs />
          <Footer />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
