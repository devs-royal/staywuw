"use client";
import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";

import { TyCEs } from "./TyCEs";
import { TyCEn } from "./TyCEn";
import { Container } from "@/config/Others/Container";
import { ScrollButton } from "@/utils/pageConfig/scrollToTop";

export function TyC() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <Container>{language === "es" ? <TyCEs /> : <TyCEn />}</Container>
      <ScrollButton />
    </>
  );
}
