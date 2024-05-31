import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import ContactUs from "@/components/General/ContactUs";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import { CancelPolicy } from "@/components/About/CancelPolicy/CancelPolicy";


export async function generateMetadata() {
  return {
    title: "Políticas de Cancelaciones - StayWuw",
    description:
      "Entiende tus Opciones - Nuestra Sección de Políticas de Cambios y Cancelaciones te Ayuda a Tomar Decisiones Informadas",
    keywords:
      "Políticas de cancelaciones, Procedimiento de cambios, Proteccion de Datos Personales",
    author: "StayWuw",
  };
}

export default function Home() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <Token />
          <Navigation />
          <CancelPolicy />
          <ContactUs />
          <Footer />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
