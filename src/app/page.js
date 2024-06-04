import BannersHeaderHome, {
  BannersHomeExclusiveDiscounts,
  BannersHomeOffers,
  BannersHomeOffersNow,
} from "@/components/Home/BannersHome";
import SearchBox from "@/hooks/SearchBox";
import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import WaveLine from "@/components/Home/WaveHome";
import ChainsHome from "@/components/Home/ChainsHome";
import { Container } from "@/config/Others/Container";
import LanguageProvider from "@/language/LanguageProvider";
import EnjoyStayHome from "@/components/Home/EnjoyStayHome";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import ExploreActivitiesHome from "@/components/Home/ExploreActivitiesHome";
import PopularDestinationsHome from "@/components/Home/PopularDestinationsHome";
import { TransportBanner } from "@/services/Hotels/components/home/TransportBanner";
import BannerDiscoverPossibilities from "@/components/bannerJsx/bannerDiscoverPossibilities";

export default function Home() {
  
  return (
    <>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation />            
            
            <div className="relative flex justify-center align-center mb-[256px] lg:mb-[118px]">
              <BannersHeaderHome />
              <div className="absolute top-[67%] sm:top-[60%] md:top-[63%] lg:top-[73%] xl:top-[80%] 2xl:top-[81%] w-full flex flex-col items-center z-[1]">
                <SearchBox />
              </div>
            </div>

            <Container>
              <div className="max-md:overflow-x-hidden">
                <BannersHomeOffers />
                <BannersHomeExclusiveDiscounts />
                <BannersHomeOffersNow />
                <ExploreActivitiesHome />
                <PopularDestinationsHome />
                <ChainsHome />
                <EnjoyStayHome />
                <TransportBanner />

                <WaveLine />
                <BannerDiscoverPossibilities />
              </div>
            </Container>

            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
