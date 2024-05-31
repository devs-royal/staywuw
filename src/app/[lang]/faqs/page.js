import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/styles/web/App.css";

import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import ContactUs from "@/components/General/ContactUs";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import FrequentQuestions from "@/components/About/Faqs/FrequentQuestions";

export async function generateMetadata() {
  return {
    title: "Preguntas Frecuentes -  StayWuw",
    description:
      "Tus Consultas, Nuestras Respuestas - StayWuw se Compromete a Brindarte Asistencia en Cada Paso de tu Viaje",
    keywords:
      "Preguntas frecuentes, Asistencia al cliente, Ayuda y Soporte, Sobre StayWuw, FAQs, Servicios",
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
          <FrequentQuestions />
          <ContactUs />
          <Footer />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
