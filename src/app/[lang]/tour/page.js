// import "../../assets/styles/web/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import HomeHotel from "@/pages/Home/HomeHotel";
import SearchBox from "@/hooks/SearchBox";
import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import { Container } from "@/config/Others/Container";
import ContactUs from "@/components/General/ContactUs";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import TopActivities from "@/services/Tours/Home/TopActivities";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import { BannerHomeTour } from "@/services/Tours/Home/bannerTour";
import { PopularState } from "@/components/General/PopularEstates";
import BannerFooterTour from "@/services/Tours/Home/bannerFooterTour";
import BannerHeaderTour from "@/services/Tours/Home/bannerHeaderTour";
import BannerCallHotelT from "@/components/bannerJsx/bannerCallHotelT";

export const metadata = {
  title: "StayWuw.com | Únete a los Tours Más Emocionantes de México",
  description:
    "Descubre México con StayWuw: desde lujosos hoteles hasta tours emocionantes y traslados cómodos. Planifica tu escapada perfecta con opciones personalizadas para explorar los destinos más emblemáticos. Todo lo que necesitas para unas vacaciones inolvidables, en un solo lugar.",
  keywords:
    "Vacaciones en México, Hoteles de Lujo, Tours Aventureros, Servicio de Traslados, Viajes Personalizados, Destinos Emblemáticos, Planificación de Viajes",
  author: "StayWuw",
  content: "width=device-width, initial-scale=1.0",
};

export default function Home() {
  return (
    <>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation />
            {/* LP */}
            <div className="relative flex justify-center align-center mb-[256px] lg:mb-[118px]">
              <BannerHeaderTour />
              <div className="absolute top-[67%] sm:top-[60%] md:top-[63%] lg:top-[73%] xl:top-[80%] 2xl:top-[81%] w-full flex flex-col items-center">
                <SearchBox />
              </div>
            </div>
            <Container>
              <BannerHomeTour />
              <BannerCallHotelT />
              <PopularState tour={true} />
              <TopActivities />
              <BannerFooterTour />
            </Container>
            <ContactUs />
            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
