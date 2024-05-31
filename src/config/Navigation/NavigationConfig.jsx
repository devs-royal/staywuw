import { useEffect, useState } from "react";

export const NavigationURL = ["hotels", "tour", "tours"];

export function NavigationConfig() {
  const [activeRouter, setActiveRouter] = useState(null);
  
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

    if (actualRouter != null) {
      setActiveRouter(actualRouter[0]);
    }
  }, []);

  return activeRouter;
}
