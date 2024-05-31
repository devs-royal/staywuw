import { useEffect, useContext } from "react";

import LanguageContext from "../../language/LanguageContext";

function App() {
  const { languageData } = useContext(LanguageContext);
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = languageData.navigation.tabTitle;
        document.querySelector("title").classList.add("title-transition");
      } else {
        document.title = languageData.navigation.tabTitleRoyal;
        document.querySelector("title").classList.remove("title-transition");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [languageData]);
}

export default App;
