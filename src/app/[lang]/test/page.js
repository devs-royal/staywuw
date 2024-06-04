import SearchBox from "@/hooks/SearchBox";
import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import { Container } from "@/config/Others/Container";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import PaginationT from "@/components/General/PaginationT";

// import ActivityFormT from "@/payment/Booking/ActivityFormT";
export default function Home() {
  return (
    <>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <div className="bg-[#f6f6f6]">
              <Navigation />

              <Container>

               <div className="my-[50px]">

                <PaginationT
                pageChange={2}
                count={6}
                onChange={3}
                />
               </div>

              </Container>

              <Footer />
            </div>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
