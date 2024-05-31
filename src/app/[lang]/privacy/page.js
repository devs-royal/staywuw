// import Privacy from "@/pages/others/Privacy";
import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import ContactUs from "@/components/General/ContactUs";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import { PrivacyPolicy } from "@/components/About/PolicyPrivacy/PrivacyPolicy";

export async function generateMetadata() {
  return {
    title: "Política de Privacidad - StayWuw",
    description:
      "Tu Información, Tu Control - StayWuw Te Brinda Control sobre tus Datos Personales según Nuestra Política de Privacidad",
    keywords:
      "Política de Privacidad, Gestion de informacion de clientes, Confidencialidad de datos, Seguridad datos, Derechos",
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
          {/* <Privacy /> */}
          <PrivacyPolicy />
          <ContactUs />
          <Footer />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
