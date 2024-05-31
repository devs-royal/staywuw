
import React, { useContext } from "react";

import LanguageContext from "../../../language/LanguageContext";

export function DescriptionHotel({ hotel }) {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="info-hotel-flex-colum-border">
      <span className="text-grey-info-i">Hotel</span>

      {hotel &&
        hotel.map((info, item) => (
          <div className="d-flex flex-column mt-1" key={item}>
            <span className="text-black-info-i-s hotel-name">{info.name}</span>

            <span className="text-or-info-i-s">{languageData.itinerary.detailsPayment.rooms}</span>

            {/* ROOMS */}
            <div className="spa-bet-col">
              {info.rooms &&
                info.rooms.map((room, item) => (
                  <div className="spa-bet" key={item}>
                    <span className="text-black-info-i-s room-name">
                      {room.name}
                    </span>
                    <span className="text-black-info-i-m">
                      $
                      {Math.floor(room.currentPrice)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .<sup>{(room.currentPrice % 1).toFixed(2).slice(2)}</sup>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export function TourDescription(props) {
  const { tours } = props;

  return (
    <div className="info-hotel-flex-colum-border">
      <div>
        <span className="text-grey-info-i">Tour</span>
        {tours &&
          tours.map((tour, index) => (
            <div key={index} className="spa-bet-col">
              <div className="spa-bet">
                <span className="text-black-info-i-s hotel-name width4">
                  {tour.title}
                </span>
                <span className="text-black-info-i-m">
                  $
                  {Math.floor(tour.currentPrice)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                  .<sup>{(tour.currentPrice % 1).toFixed(2).slice(2)}</sup>
                </span>
              </div>

              {/* <div className="spa-bet">
                <span className="text-black-info-i-s room-name width4">
                  jolly roger displey de Piratas, Cena Deluxe
                </span>
                <span className="text-black-info-i-m">
                  $00,000.<sup>00</sup>
                </span>
              </div> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export function TransportDescription() {
  return (
    <div className="info-hotel-flex-colum-border">
      <span className="text-grey-info-i">Traslado</span>
      <div className="spa-bet-col">
        <div className="spa-bet">
          <span className="text-black-info-i-s hotel-name">viaje redondo</span>
          <span className="text-black-info-i-m">
            $00,000.<sup>00</sup>
          </span>
        </div>

        <div className="spa-bet">
          <span className="text-black-info-i-s room-name">viaje redondo</span>
          <span className="text-black-info-i-m">
            $00,000.<sup>00</sup>
          </span>
        </div>
      </div>
    </div>
  );
}
