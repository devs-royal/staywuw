"use client";

import { useEffect } from "react";
import { checkJwt } from "@/scripts/TokenJwt";
import { useToken } from "@/config/context/AuthContext";
import axios from "axios";

export const useStarToken = () => {
  const { setToken } = useToken();

  useEffect(() => {
    obtainTokenIfNecessary();

    const interval = setInterval(() => {
      obtainTokenIfNecessary();
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  const obtainTokenIfNecessary = async () => {
    if (!localStorage.getItem("token")) {
      try {
        const newToken = await renewToken();
        setToken(newToken);
      } catch (error) {
        console.error("Error al renovar el token:", error);
      }
    } else {
      try {
        const serverTimeResponse = await axios.get(
          "https://api.royalvacationsmexico.com/server-time"
        );
        const serverTimestamp = serverTimeResponse.data.server_timestamp * 1000;

        if (tokenExpired(serverTimestamp)) {
          const newToken = await renewToken();
          setToken(newToken);
        }
      } catch (error) {
        console.error("Error al obtener el tiempo del servidor:", error);
      }
    }
  };

  const tokenExpired = (serverTime) => {
    const exp = parseInt(localStorage.getItem("exp"), 10);
    return serverTime >= exp;
  };

  const renewToken = async () => {
    const newToken = await checkJwt();
    return newToken;
  };
};
