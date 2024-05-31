"use client";
import React, { useEffect, useState } from "react";

import "../../assets/styles/web/About.css";
import SkeletonPolicy from "../../utils/skeleton/SkeletonPolicy";
import { scrollToTop, ScrollButton } from "../../utils/pageConfig/scrollToTop";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
import Test2 from "@/hooks/Test2";
import { Container } from "@/config/Others/Container";

export default function Policy() {
  const [htmlContent, setHtmlContent] = useState("");
  // const language = localStorage.getItem("language") || "es";
  const language = typeof window !== 'undefined' && localStorage.getItem("language") ? localStorage.getItem("language") : "es";


  useEffect(() => {
    scrollToTop();
    const loadFromCache = async () => {
      try {
        const cache = await caches.open(`cache-pcc-${language}`);
        const response = await cache.match(`v1/views/pcc-${language}`);

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
        const response = await axiosWithInterceptor.get(`v1/views/pcc`);
        const text = response.data.content;

        const cache = await caches.open(`cache-pcc-${language}`);
        const newResponse = new Response(text, {
          headers: { "Content-Type": "text/html" },
        });
        await cache.put(`v1/views/pcc-${language}`, newResponse);

        setHtmlContent(text);
      } catch (error) {
        console.error(error);
      }
    };

    loadFromCache();
  }, [language]);

  // const handleScrollTop = async () => {
  //   scrollToTop();
  // };

  return (
    <>
      {/* <MetaPolicy /> */}
      <Container>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        {/* <Test2 /> */}
      </Container>

      <ScrollButton />

      {!htmlContent && <SkeletonPolicy />}
    </>
  );
}
