"use client";

import { useContext } from "react";

import { PrivacyPolicyEs } from "./PrivacyPolicyEs";
import { PrivacyPolicyEn } from "./PrivacyPolicyEn";
import { Container } from "@/config/Others/Container";
import LanguageContext from "@/language/LanguageContext";
import { ScrollButton } from "@/utils/pageConfig/scrollToTop";

export function PrivacyPolicy() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Container>
        {language === "es" ? <PrivacyPolicyEs /> : <PrivacyPolicyEn />}
      </Container>
      <ScrollButton />
    </>
  );
}
