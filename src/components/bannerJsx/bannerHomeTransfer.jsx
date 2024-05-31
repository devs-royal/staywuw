import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchBox from "../../hooks/SearchBox";
import { Transfer } from "../../config/Others/imagesBanners";
import LanguageContext from "../../language/LanguageContext";

export function BannerHomeTop() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="container content-image-moving">
      <img
        src={Transfer.bannerHome.image}
        alt={Transfer.bannerHome.alt}
        width="100%"
      />

      <h1 className="text-image-new-h1">
        {languageData.titleBanners[Transfer.bannerHome.title]}
      </h1>

      <div className="element-tabMoving container">
        <SearchBox />
      </div>
    </div>
  );
}

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

export function BannersFooterTransfer() {
  const { languageData } = useContext(LanguageContext);

  return (
    <article className="container banner-Footer-moving">
      <Row>
        <Col xs={2} md={6} className="position-image-col-tour">
          <img
            className="image-radius"
            src={Transfer.bannerBest.image}
            alt={Transfer.bannerBest.alt}
            width="100%"
          />

          <div className="position-new-titles-tour">
            <h2 className="text-image-col-h2-tour">
              {languageData.titleBanners[Transfer.bannerBest.title]}
            </h2>

            <h5 className="text-image-new-h5-tour">
              {languageData.titleBanners[Transfer.bannerBest.paragraph]}
            </h5>
          </div>
        </Col>

        <Col xs={6} md={3} className="position-image-col-tour">
          <img
            className="image-radius"
            src={Transfer.bannerSafe.image}
            alt={Transfer.bannerSafe.alt}
            width="100%"
            height="100%"
          />

          <div className="position-titles-transfer-col">
            <h2 className="text-image-col-h3-transfer">
              {languageData.titleBanners[Transfer.bannerSafe.title]}
            </h2>

            <h5 className="text-image-col2-h5-tour">
              {languageData.titleBanners[Transfer.bannerSafe.paragraph]}
            </h5>
          </div>
        </Col>

        <Col xs={6} md={3} className="position-image-col-tour">
          <img
            className="image-radius"
            src={Transfer.bannerTravel.image}
            alt={Transfer.bannerTravel.alt}
            width="100%"
            height="100%"
          />

          <div className="position-titles-transfer-col">
            <h2 className="text-image-col-h3-transfer">
              {languageData.titleBanners[Transfer.bannerTravel.title]}
            </h2>
            
            <h5 className="text-image-col2-h5-tour">
              {languageData.titleBanners[Transfer.bannerTravel.paragraph]}
            </h5>
          </div>
        </Col>
      </Row>
    </article>
  );
}
