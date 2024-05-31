import React, { useContext, useEffect, useRef } from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import SearchBox from "../../hooks/SearchBox";
import { Tour } from "../../config/Others/imagesBanners";
import LanguageContext from "../../language/LanguageContext";

export function BannerHomeTop() {
  const { languageData } = useContext(LanguageContext);
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="container content-image-search">
      <img
        // src={Tour.bannerHome.image}  //LP 01-03-24
        src="https://sandboxmexico.com/assets/banners/tours/Feb2024/BannerHomeTour.webp"
        alt={Tour.bannerHome.alt}
        width="100%"
        effect="blur"
        className="banner-home-tour"
      />
      {/* <video
        width="100%"
        height="76%"
        loop={true}
        className="object-fit-cover"
        muted={true}
        ref={videoRef}
        controls={false}
        onContextMenu={(e) => e.preventDefault()}
      >
        <source
          src="https://sandboxmexico.com/assets/banners/tours/Feb2024/video-cancun-home.mp4"
          alt="tour-video-home/mp4"
        />
      </video> */}

      <h1 className="text-image-new-h1">
        {languageData.titleBanners[Tour.bannerHome.title]}
      </h1>

      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <div className="Element-tabTour container">
          <SearchBox />
        </div>
      </div>
    </div>
  );
}

export function BannerHomeDown() {
  const { languageData } = useContext(LanguageContext);

  return (
    <article className="container-principal-tour container">
      <div className="position-image-new">
        <img
          src={Tour.bannerPrincipal.image}
          alt={Tour.bannerPrincipal.alt}
          width="100%"
        />
        <div className="position-text-new-titles">
          <h2 className="text-image-new-h2-tour">
            {languageData.titleBanners[Tour.bannerPrincipal.title]}
          </h2>
          <h4 className="text-image-nex-h4-tour">
            {languageData.titleBanners[Tour.bannerPrincipal.paragraph]}
          </h4>
        </div>
      </div>
    </article>
  );
}

export function BannersFooterTour() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="container banner-Footer-tour">
      {/*CARD ONE // MODIFY LP */}
      <div className="position-image-col-tour-banner">
        <div className="position-new-titles-tour">
          <h2 className="text-image-col-h2-tour">
            {languageData.bannersFooter.destination}
            {/* {languageData.titleBanners[Tour.bannerTraveling.title]} */}
          </h2>

          {/* <h5 className="text-image-new-h5-tour">
            {languageData.titleBanners[Tour.bannerTraveling.paragraph]}
          </h5> */}
        </div>

        <div className="position-new-titles-tour-sub">
          <span className="text-position-new-titles-tour-sub">
            {languageData.bannersFooter.descriptionOfTheDestination}
          </span>
        </div>

        <div className="image-right-home-tour">
          <img
            className="image-radius"
            src="https://sandboxmexico.com/assets/banners/tours/Feb2024/cenote-san-antonio.webp"
            alt="cenote-san-antonio"
            width="100%"
            height={"100%"}
          />
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=529981342286&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!"
          target="_blank"
          rel="noopener noreferrer" className="btn-image-right-home-tour">
          {languageData.cartTour.youWantMore}
        </a>
        {/* <button className="btn-image-right-home-tour">
          {languageData.cartTour.youWantMore}
        </button> */}
      </div>
      {/*END CARD ONE // MODIFY LP */}

      {/*CARD TWO*/}
      <div className="banner-description-tour">
        <div className="position-image-col-tour">
          <img
            className="image-radius"
            src={Tour.bannerMexico.image}
            alt={Tour.bannerMexico.alt}
            width="100%"
          />

          <div className="position-new-titles-tour-col">
            <h3 className="text-image-col-h3-tour">
              {languageData.titleBanners[Tour.bannerMexico.title]}
            </h3>

            <h5 className="text-image-col2-h5-tour">
              {languageData.titleBanners[Tour.bannerMexico.paragraph]}
            </h5>
          </div>
        </div>

        {/*END CARD TWO*/}

        {/*CARD THREE // MODIFY LP */}
        <div className="position-image-col-tour">
          <img
            className="image-radius"
            src={Tour.bannerFamily.image}
            alt={Tour.bannerFamily.alt}
            width="100%"
          />

          <div className="position-new-titles-tour-col-img">
            <img
              className="image-radius"
              src="https://sandboxmexico.com/assets/banners/tours/Feb2024/xplor-feb24.webp"
              alt="Banner-tour-feb2024"
              width="100%"
              height="100%"
            ></img>

            {/* <h3 className="text-image-col-h3-tour">
              {languageData.titleBanners[Tour.bannerFamily.title]}
            </h3>

            <h5 className="text-image-col2-h5-tour">
              {languageData.titleBanners[Tour.bannerFamily.paragraph]}
            </h5> */}
          </div>
        </div>
      </div>
    </div>
  );
}
// export function BannersFooterTour() {
//   const { languageData } = useContext(LanguageContext);

//   return (
//     <div className="container banner-Footer-tour">
//       <Row>
//         <Col xs={2} md={6} className="position-image-col-tour">
//           <img
//             className="image-radius"
//             src={Tour.bannerTraveling.image}
//             alt={Tour.bannerTraveling.alt}
//             width="100%"
//           />

//           <div className="position-new-titles-tour">
//             <h2 className="text-image-col-h2-tour">
//               {languageData.titleBanners[Tour.bannerTraveling.title]}
//             </h2>

//             <h5 className="text-image-new-h5-tour">
//               {languageData.titleBanners[Tour.bannerTraveling.paragraph]}
//             </h5>
//           </div>
//         </Col>
//         <Col xs={3} className="position-image-col-tour">
//           <img
//             className="image-radius"
//             src={Tour.bannerMexico.image}
//             alt={Tour.bannerMexico.alt}
//             width="100%"
//           />

//           <div className="position-new-titles-tour-col">
//             <h3 className="text-image-col-h3-tour">
//               {languageData.titleBanners[Tour.bannerMexico.title]}
//             </h3>

//             <h5 className="text-image-col2-h5-tour">
//               {languageData.titleBanners[Tour.bannerMexico.paragraph]}
//             </h5>
//           </div>
//         </Col>

//         <Col xs={3} className="position-image-col-tour">
//           <img
//             className="image-radius"
//             src={Tour.bannerFamily.image}
//             alt={Tour.bannerFamily.alt}
//             width="100%"
//           />

//           <div className="position-new-titles-tour-col">
//             <h3 className="text-image-col-h3-tour">
//               {languageData.titleBanners[Tour.bannerFamily.title]}
//             </h3>

//             <h5 className="text-image-col2-h5-tour">
//               {languageData.titleBanners[Tour.bannerFamily.paragraph]}
//             </h5>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// }
