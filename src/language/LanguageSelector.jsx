"use client";

import { useState, useContext, useEffect } from "react";

import LanguageContext from "./LanguageContext";

function getLanguageFromPath(path) {
  const match = path.match(/^\/([a-z]{2})\//);
  return match ? match[1] : null;
}

export function LanguageSelector() {
  const { setLanguage } = useContext(LanguageContext);
  const [actualLanguage, setActualLanguage] = useState();

  useEffect(() => {
    const storedLanguage =
      localStorage.getItem("language") ||
      getLanguageFromPath(window.location.pathname) ||
      "en";
    setActualLanguage(storedLanguage);
    setLanguage(storedLanguage);
  }, [setLanguage]);

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    localStorage.setItem("language", newLanguage);
    setActualLanguage(newLanguage);

    if (currentPath === "/") {
      window.location.reload();
    } else {
      const newPath = `/${newLanguage}${currentPath.replace(
        /^\/[a-z]{2}(\/|$)/,
        "/"
      )}${currentSearch}`;
      window.location.href = newPath;
    }
    setLanguage(newLanguage);
  };

  return (
    <>
      <div className="flex">
        {actualLanguage === "es" ? (
          <img
            src={`${process.env.NEXT_PUBLIC_URL}icons/leng/es.svg`}
            alt="spanish"
            className="icon-spanish"
          />
        ) : (
          <img
            src={`${process.env.NEXT_PUBLIC_URL}icons/leng/en.svg`}
            alt="spanish"
            className="icon-spanish"
          />
        )}
        <select
          className=""
          name="select"
          onChange={handleChange}
          value={actualLanguage}
        >
          <option className="" value="es">
            ESP
          </option>
          <option className="" value="en">
            ENG
          </option>
        </select>
      </div>
      {/* <div className="m-language">
      <Suspense fallback={null}>
        <SelectLanguage />
      </Suspense>
    </div> */}
    </>
  );
}
