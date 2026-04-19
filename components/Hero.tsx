"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEDDING_DATE = new Date("2026-09-12T14:00:00");

function calculateTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: 48,
          fontWeight: 400,
          lineHeight: 1.1,
          color: "#3D2514",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        style={{
          fontFamily: "var(--font-karla), sans-serif",
          fontSize: 11,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#8A6A3D",
          marginTop: 4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const update = () => setTimeLeft(calculateTimeLeft());
    const timer = setInterval(update, 1000);
    const initial = requestAnimationFrame(() => update());
    return () => {
      clearInterval(timer);
      cancelAnimationFrame(initial);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 24px",
        backgroundColor: "#F5EBD6",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-karla), sans-serif",
          fontSize: 11,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#8A6A3D",
          marginBottom: 24,
        }}
      >
        Together with their families
      </p>

      <h1
        style={{
          fontSize: "clamp(48px, 8vw, 80px)",
          fontWeight: 400,
          color: "#3D2514",
          lineHeight: 1.1,
          marginBottom: 16,
        }}
      >
        Tom <span style={{ fontStyle: "italic" }}>&amp;</span> Jane
      </h1>

      <p
        style={{
          fontFamily: "var(--font-karla), sans-serif",
          fontSize: 11,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#8A6A3D",
          marginBottom: 8,
        }}
      >
        Request the pleasure of your company
      </p>

      <p
        style={{
          fontSize: 22,
          color: "#5C3A1E",
          marginBottom: 8,
        }}
      >
        Saturday, the twelfth of September
      </p>

      <p
        style={{
          fontSize: 22,
          color: "#5C3A1E",
          marginBottom: 8,
        }}
      >
        Two thousand and twenty-six
      </p>

      <p
        style={{
          fontSize: 18,
          color: "#8A6A3D",
          marginBottom: 48,
        }}
      >
        Cotswolds, Oxfordshire
      </p>

      {timeLeft && (
        <div
          style={{
            display: "flex",
            gap: "clamp(24px, 5vw, 48px)",
            marginBottom: 48,
          }}
        >
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      )}

      <a
        href="#rsvp"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#rsvp")?.scrollIntoView({ behavior: "smooth" });
        }}
        style={{
          fontFamily: "var(--font-karla), sans-serif",
          fontSize: 12,
          letterSpacing: 2,
          textTransform: "uppercase",
          backgroundColor: "#5C3A1E",
          color: "#F5EBD6",
          padding: "14px 40px",
          textDecoration: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        RSVP
      </a>
    </section>
  );
}
