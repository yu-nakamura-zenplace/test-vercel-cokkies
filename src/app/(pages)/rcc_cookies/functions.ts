"use client";

import { getCookies, setCookie, deleteCookie, getCookie } from "cookies-next";

export async function writeCookie() {
  const data = "use client cookies";
  setCookie("authJwt", data, {
    httpOnly: false,
  });
  console.log("writeCookies.authJwt", data);
  return getCookie("authJwt");
}

export async function readCookie() {
  const data = getCookie("authJwt");
  console.log("readCookies.authJwt", data);
  return data;
}

export async function removeCookie() {
  console.log("deleteCookies.authJwt");
  deleteCookie("authJwt");
  return getCookie("authJwt");
}
