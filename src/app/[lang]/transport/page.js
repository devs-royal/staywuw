
import SearchBox from "@/hooks/SearchBox";
import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import { Container } from "@/config/Others/Container";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import TipsBooking from "@/services/Transport/Home/TipsBooking";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import PromotedRoutes from "@/services/Transport/Home/PromotedRoutes";
import CartTourOptions from "@/services/Hotels/components/home/TourRecommended";
import RecommendedTransport from "@/services/Transport/Home/RecommendedTransport";
import { BannerHeaderTransport } from "@/services/Transport/Home/BannerHeaderTransport";
import BannerDiscoverPossibilities from "@/components/bannerJsx/bannerDiscoverPossibilities";
import { BannerHomeTransport, BannerSafelyTransport } from "@/services/Transport/Home/bannerTransport";

export const metadata = {
  title: "StayWuw.com | Únete a los Tours Más Emocionantes de México",
  description:
    "Descubre México con StayWuw: desde lujosos hoteles hasta tours emocionantes y traslados cómodos. Planifica tu escapada perfecta con opciones personalizadas para explorar los destinos más emblemáticos. Todo lo que necesitas para unas vacaciones inolvidables, en un solo lugar.",
  keywords:
    "Vacaciones en México, Hoteles de Lujo, Tours Aventureros, Servicio de Traslados, Viajes Personalizados, Destinos Emblemáticos, Planificación de Viajes",
  author: "StayWuw",
  content: "width=device-width, initial-scale=1.0",
};

export default function HomeTransport() {
  return (
    <>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation />

            {/* SearchTransport */}
            <div className="relative flex justify-center align-center mb-[240px] lg:mb-[160px]">

              <BannerHeaderTransport/>
              <div className="absolute top-[67%] sm:top-[60%] md:top-[63%] lg:top-[73%] xl:top-[80%] 2xl:top-[81%] w-full flex flex-col items-center z-[1]">
                <SearchBox />
              </div>
            </div>

            <Container>
              <div className="max-md:overflow-x-hidden">
                <BannerHomeTransport />
                <TipsBooking />
                <RecommendedTransport />
                <BannerSafelyTransport />
                <PromotedRoutes />
                <BannerDiscoverPossibilities />
                <div className="mb-16">
                  <CartTourOptions />
                </div>
              </div>
            </Container>
            {/* END LP */}

            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
