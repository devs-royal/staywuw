import { useRouter } from "next/navigation";

import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import Hotels from "@/services/Hotels/components/Listing/Hotels";
import ContactUs from "@/components/General/ContactUs";

// region LISTING HOTEL
export async function generateMetadata({ searchParams }) {
  const destination = searchParams.destination || "México";
  const checkIn = searchParams.checkIn;
  const checkOut = searchParams.checkOut;

  return {
    title: `Discover ${destination}: Find the Best hotels with ${process.env.NEXT_PUBLIC_NAME_COMPANY}.com`,
    description: `Find the best hotels in ${destination} from ${checkIn} to ${checkOut}. Explore with ${process.env.NEXT_PUBLIC_NAME_COMPANY}`,
    keywords: `hotels in ${destination}, best hotels ${destination}, hotel booking ${destination}, hotel deals in ${destination}, all inclusive hotels ${destination}`,
    author: `${process.env.NEXT_PUBLIC_NAME_COMPANY}`,
  };
}

export default function Home() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <Token />
          <Navigation />
          <Hotels />
          <ContactUs />
          <Footer />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
