"use client"

import { useContext } from "react";

import { CancelPolicyEn } from "./CancelPolicyEn";
import { CancelPolicyEs } from "./CancelPolicyEs";
import { Container } from "@/config/Others/Container";
import LanguageContext from "@/language/LanguageContext";
import { ScrollButton } from "@/utils/pageConfig/scrollToTop";

export function CancelPolicy() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Container>{language === "es" ? <CancelPolicyEs/> : <CancelPolicyEn/>}</Container>

      <ScrollButton />
    </>
  );
}
