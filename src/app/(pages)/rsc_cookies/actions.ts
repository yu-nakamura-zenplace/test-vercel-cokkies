"use server";

import { cookies } from "next/headers";

export async function writeCookie() {
  const data = "use server cookies";
  cookies().set("authJwt", data, {
    httpOnly: false,
  });
  console.log("writeCookies.authJwt", data);
  return cookies().get("authJwt");
}

export async function readCookie() {
  const data = cookies().get("authJwt");
  console.log("readCookies.authJwt", data);
  return data;
}

export async function deleteCookie() {
  "use server";
  console.log("deleteCookies.authJwt");
  cookies().delete("authJwt");
  return cookies().get("authJwt");
}
