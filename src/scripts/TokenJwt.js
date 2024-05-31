"use client";

import axios from "axios";
import bcrypt from "bcryptjs";
import { KJUR } from "jsrsasign";
import { v4 as uuidv4 } from "uuid";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

const obtenerFingerprintYUID = async () => {
  const fpPromise = FingerprintJS.load();
  const fp = await fpPromise;
  const resultData = await fp.get();
  const fingerprint = resultData.visitorId;
  const newuid = uuidv4();
  const uid = newuid;
  return { fingerprint, uid };
};

const createJWT = async () => {
  const { fingerprint, uid } = await obtenerFingerprintYUID();
  const saltRounds = 10;
  const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  };

  const key = process.env.NEXT_PUBLIC_KEYS.split(',');

  const indexRandom = Math.floor(Math.random() * key.length);
  const keyRamdom = key[indexRandom];
  const password = hashPassword(fingerprint + keyRamdom + uid);
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET;

  // Obtener el timestamp del servidor con axios
  try {
    const response = await axios.get('https://api.royalvacationsmexico.com/server-time');
    const serverTimestamp = response.data.server_timestamp;

    const iat = Math.floor(serverTimestamp);
    const exp = iat + 50 * 60;

    const header = { alg: "HS256", typ: "JWT" };
    const payload = {
      fingerprint,
      uid,
      password,
      iat,
      exp,
    };

    const token = KJUR.jws.JWS.sign(
      header.alg,
      JSON.stringify(header),
      JSON.stringify(payload),
      secret
    );

    localStorage.setItem("token", token);
    localStorage.setItem("iat", iat * 1000); 
    localStorage.setItem("exp", exp * 1000);

    return token;
  } catch (error) {
    console.error('Error al obtener el timestamp del servidor:', error);
  }
};


export const checkJwt = async () => {
  return await createJWT();
};