import React from "react";
import { Container } from "react-bootstrap";

import Logo from "../../assets/images/logos/logo-royal-vacations.svg";

export default function NotFound() {
  const redirectToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="fullscreen-container">
      <Container>
        <div className="img-found-handle">
          <img
            src={Logo}
            alt={process.env.NEXT_PUBLIC_NAME_COMPANY}
            style={{ width: "28vw", padding: "8rem 0 0 0" }}
          />
        </div>

        <div className="text-found-handle">
          <span className="text-animation-we">
          ¡Estamos experimentando problemas,
            <br /> el equipo ya ha sido notificado!
          </span>

          <button className="button-404-home" onClick={redirectToHome}>
          Ir al inicio
          </button>
        </div>
      </Container>
    </div>
  );
}
