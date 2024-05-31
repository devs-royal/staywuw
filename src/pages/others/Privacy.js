"use client"
import React, { useEffect, useState } from "react";

// import MetaPrivacy from "../../components/Meta/MetaPrivacy";
// PENDING

import { ScrollButton, scrollToTop } from "../../utils/pageConfig/scrollToTop";
import { Container } from "@/config/Others/Container";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import SkeletonText from "@/utils/skeleton/SkeletonText";

export default function Privacy() {
  const [htmlContent, setHtmlContent] = useState("");
  // const language = localStorage.getItem("language") || "es";
  const language = typeof window !== 'undefined' && localStorage.getItem("language") ? localStorage.getItem("language") : "es";


  useEffect(() => {
    scrollToTop();
    const loadFromCache = async () => {
      try {
        const cache = await caches.open(`cache-pdp-${language}`);
        const response = await cache.match(`v1/views/pdp-${language}`);

        if (response) {
          const text = await response.text();
          setHtmlContent(text);
        } else {
          fetchAndCacheData();
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAndCacheData = async () => {
      try {
        const response = await axiosWithInterceptor.get(`v1/views/pdp`);
        const text = response.data.content;

        const cache = await caches.open(`cache-pdp-${language}`);
        const newResponse = new Response(text, {
          headers: { "Content-Type": "text/html" },
        });
        await cache.put(`v1/views/pdp-${language}`, newResponse);

        setHtmlContent(text);
      } catch (error) {
        console.error(error);
      }
    };

    loadFromCache();
  }, [language]);

  return (
    <>
      {/* <MetaPrivacy /> */}
      <Container>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </Container>

      <ScrollButton />

      {!htmlContent && <SkeletonText />}
    </>
  );
}
