import React, { useContext } from "react";
import LanguageContext from "../language/LanguageContext";
import { useIsMobile } from "../config/Mobile/isMobile";
import { hotel } from "../config/Others/imagesBanners";

export default function BannerCallTest() {
    const { languageData } = useContext(LanguageContext);
    const isMobile = useIsMobile();
    return (
        <div className='container cont-img-text-banner-call p-0'>
            <picture className="content-image-comunication-banner-call">
                <a href="tel:8009530342" target="_blank" rel="noopener noreferrer">
                <img
                    src={
                        isMobile
                            ? hotel.bannerCallCenter.imageMobile
                            : hotel.bannerCallCenter.image
                    }
                    className="img-banner-listing-tour-radius"
                    alt={hotel.bannerCallCenter.alt}
                    width="100%"
                    height="82%"
                />

                <div className="position-new-titles-listing">
                    <h2 className="text-image-call-banner">
                        {languageData.titleBanners[hotel.bannerCallCenter.title]}
                    </h2>

                    <h4 className="text-image-call-banner-h4">
                        {languageData.titleBanners[hotel.bannerCallCenter.paragraph1]}{" "}
                        <span className="span-new-text">
                            {languageData.titleBanners.titleNumber}
                        </span>
                        {languageData.titleBanners[hotel.bannerCallCenter.paragraph2]}{" "}
                    </h4>
                </div>
                </a>
            </picture>
        </div>
    )
}

