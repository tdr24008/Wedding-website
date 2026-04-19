import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_NAME = "tm-unlocked";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 60; // 60 days

function getSecret(): Uint8Array {
  const secret = process.env.COOKIE_SECRET;
  if (!secret) {
    throw new Error("COOKIE_SECRET environment variable is not set");
  }
  return new TextEncoder().encode(secret);
}

export async function createUnlockCookie(): Promise<{
  name: string;
  value: string;
  maxAge: number;
  httpOnly: boolean;
  secure: boolean;
  sameSite: "lax";
  path: string;
}> {
  const token = await new SignJWT({ unlocked: true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${COOKIE_MAX_AGE}s`)
    .sign(getSecret());

  return {
    name: COOKIE_NAME,
    value: token,
    maxAge: COOKIE_MAX_AGE,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  };
}

export async function verifyUnlockCookie(): Promise<boolean> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME);
  if (!cookie) return false;

  try {
    await jwtVerify(cookie.value, getSecret());
    return true;
  } catch {
    return false;
  }
}

export async function verifyUnlockToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, getSecret());
    return true;
  } catch {
    return false;
  }
}
