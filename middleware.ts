import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_PATHS = ["/unlock", "/api/unlock"];

function isPublicPath(pathname: string): boolean {
  if (PUBLIC_PATHS.includes(pathname)) return true;
  if (pathname.startsWith("/_next/")) return true;
  if (pathname === "/favicon.ico") return true;
  // Allow static assets in /public
  if (pathname.match(/\.\w+$/)) return true;
  return false;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("tm-unlocked");
  if (!cookie) {
    return NextResponse.redirect(new URL("/unlock", request.url));
  }

  const secret = process.env.COOKIE_SECRET;
  if (!secret) {
    return NextResponse.redirect(new URL("/unlock", request.url));
  }

  try {
    await jwtVerify(cookie.value, new TextEncoder().encode(secret));
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/unlock", request.url));
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
