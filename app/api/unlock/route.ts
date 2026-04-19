import { NextRequest, NextResponse } from "next/server";
import { createUnlockCookie } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? request.headers.get("x-real-ip")
    ?? "unknown";

  const { allowed, retryAfterSeconds } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again later." },
      {
        status: 429,
        headers: retryAfterSeconds
          ? { "Retry-After": String(retryAfterSeconds) }
          : undefined,
      },
    );
  }

  const body = await request.json().catch(() => null);
  const password = typeof body?.password === "string" ? body.password : "";

  const correctPassword = process.env.WEDDING_PASSWORD;
  if (!correctPassword) {
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 },
    );
  }

  if (password !== correctPassword) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const cookie = await createUnlockCookie();
  const response = NextResponse.json({ success: true });
  response.cookies.set(cookie);
  return response;
}
