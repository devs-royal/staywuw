import "./globals.css";
import { Inter } from "next/font/google";
import LanguageProvider from "@/language/LanguageProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "StayWuw.com | Hotels, tours, transportation, and exceptional travel experiences",
  description:
    "Discover Mexico with stayWuw: from luxurious hotels to exciting tours and comfortable transfers. Plan your perfect getaway with personalized options to explore the most iconic destinations. Everything you need for an unforgettable vacation, all in one place.",
  keywords:
    "Vacations in Mexico, Luxury Hotels, Adventurous Tours, Transfer Services, Customized Trips, Iconic Destinations, Travel Planning",
  author: "StayWuw",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    legalName: "StayWuw.com ",
    url: "http://staywuw.com",
    description:
      "Discover Mexico with StayWuw: from luxurious hotels to exciting tours and comfortable transfers. Plan your perfect getaway with personalized options to explore the most iconic destinations. Everything you need for an unforgettable vacation, all in one place.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Mexico",
      addressRegion: "Mexico",
      addressLocality:
        "Av. Tulum y Av Náder, Sm 2, Mza. 1, lte. 44, Andador VI, C.P. 77500 Cancún, Q.Roo.",
      postOfficeBoxNumber: "44",
      postalCode: "77505",
      streetAddress: "Av Náder",
    },
    faxNumber: "+52 800 953 0342",
    logo: "https://sandboxmexico.com/assets/royal/principal-logo.svg",
    founder: "Stay Wuw company",
    foundingDate: "2024",
    foundingLocation: "Mexico",
    areaServed: "Mexico",
    brand: {
      "@type": "Brand",
      name: "http://staywuw.com/",
    },
    keywords:
      "online travel agency, hotels, holiday rentals, flights, rental cars, Vacations in Mexico, Luxury Hotels, Adventurous Tours, Transfer Services, Customized Trips, Iconic Destinations, Travel Planning",
    parentOrganization: {
      "@type": "Corporation",
      name: "StayWuw",
    },
    sameAs: [
      "https://www.facebook.com/RoyalVacationsMx",
      "https://www.instagram.com/royalvacationsmx/",
      "https://www.linkedin.com/company/royal-vacations-mexico/",
      "https://www.tiktok.com/@royalvacationsmx",
    ],
  };

  const jsonWeb = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: "http://staywuw.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "http://staywuw.com/",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </section>

        <section>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonWeb) }}
          />
        </section>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
