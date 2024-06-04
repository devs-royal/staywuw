import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import { Container } from "@/config/Others/Container";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import KeepExploring from "@/components/Recommended/KeepExploring";
import DestinationReady from "@/components/Recommended/DestinationReady";
import OrderRecommendation from "@/components/Recommended/OrderRecommendation";

export default function Home({ params, searchParams }) {
  return (
    <>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <div className="bg-[#f6f6f6]">
              <Navigation />

              <Container>
                {searchParams.name && searchParams.cartUid && (
                  <DestinationReady
                    type={params.type}
                    reservationDetails={searchParams}
                  />
                )}

                <OrderRecommendation type={params.type} />

                <KeepExploring />
              </Container>

              <Footer />
            </div>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
