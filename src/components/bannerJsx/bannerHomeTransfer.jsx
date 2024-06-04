import React, { useContext } from "react";

import { Transfer } from "../../config/Others/imagesBanners";
import LanguageContext from "../../language/LanguageContext";

export function BannerHomeDown() {
  const { languageData } = useContext(LanguageContext);

  return (
    <article className="container-principal-moving container">
      <img
        src={Transfer.bannerPrincipal.image}
        alt={Transfer.bannerPrincipal.alt}
        width="100%"
      />

      <div className="position-text-new-titles-transfer">
        <h2 className="text-image-new-h2-transfer">
          {languageData.titleBanners[Transfer.bannerPrincipal.title]}
        </h2>

        <h4 className="text-image-nex-h4-transfer">
          {languageData.titleBanners[Transfer.bannerPrincipal.paragraph]}
        </h4>

      </div>
    </article>
  );
}

