import LanguageContext from "@/language/LanguageContext";
import { useContext, useEffect, useState } from "react";

export const NavigationURL = ["hotels", "tour", "tours", "transport", "hotel"];

export function NavigationConfig() {
  const [activeRouter, setActiveRouter] = useState(null);
  const {language } = useContext(LanguageContext);

  
  useEffect(() => {
    const path = window.location.pathname;

    let actualRouter = null;
    let pathRouter = path.split(/[\/-]/);
    NavigationURL.map((url, index) => {
      if (pathRouter.includes(url)) {
        actualRouter = pathRouter.filter((value) => value === url);
      }
    });
    
    if (path === "/") {
      setActiveRouter("hotels");
    }

    if (path === `/${language}/hotel`) {
      setActiveRouter(`hotel`);
    }

    if (actualRouter != null) {
      setActiveRouter(actualRouter[0]);
    }
  }, []);

  return activeRouter;
}
