"use client";

import { useState, useRef, useEffect } from "react";
import { Heart } from "lucide-react";

type RevealState = "idle" | "shaking" | "revealing" | "done";

export default function UnlockPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [state, setState] = useState<RevealState>("idle");
  const [cardVisible, setCardVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    // Stagger: curtains settle, then card fades up
    const timer = setTimeout(
      () => setCardVisible(true),
      prefersReducedMotion ? 0 : 600,
    );
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (cardVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [cardVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "shaking" || state === "revealing") return;

    setError("");

    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setState("revealing");
        const revealDuration = prefersReducedMotion ? 800 : 2400;
        setTimeout(() => {
          setState("done");
          window.location.href = "/";
        }, revealDuration);
      } else {
        const data = await res.json().catch(() => null);
        const message =
          res.status === 429
            ? "Too many attempts. Please try again later."
            : data?.error ?? "Hmm, that\u2019s not quite right. Check your invitation.";
        setError(message);
        setState("shaking");
        setTimeout(() => setState("idle"), 500);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setState("shaking");
      setTimeout(() => setState("idle"), 500);
    }
  };

  // --- Styles ---

  const curtainBase: React.CSSProperties = {
    position: "fixed",
    top: 0,
    width: "52%",
    height: "100%",
    zIndex: 10,
    background: `
      repeating-linear-gradient(
        90deg,
        rgba(107, 24, 24, 0.92) 0px,
        rgba(90, 18, 18, 1) 8px,
        rgba(107, 24, 24, 0.88) 16px,
        rgba(120, 28, 28, 0.95) 24px,
        rgba(95, 20, 20, 1) 32px
      )
    `,
    backgroundColor: "#6B1818",
    boxShadow: "inset 0 0 80px rgba(0, 0, 0, 0.5)",
    transition: prefersReducedMotion
      ? "opacity 0.8s ease"
      : "transform 2.4s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.4s ease",
  };

  const leftCurtain: React.CSSProperties = {
    ...curtainBase,
    left: 0,
    ...(state === "revealing" || state === "done"
      ? prefersReducedMotion
        ? { opacity: 0 }
        : { transform: "translateX(-110%) scaleX(1.1)", opacity: 0 }
      : {}),
  };

  const rightCurtain: React.CSSProperties = {
    ...curtainBase,
    right: 0,
    ...(state === "revealing" || state === "done"
      ? prefersReducedMotion
        ? { opacity: 0 }
        : { transform: "translateX(110%) scaleX(1.1)", opacity: 0 }
      : {}),
  };

  const tiebackBase: React.CSSProperties = {
    position: "absolute",
    top: "48%",
    width: 40,
    height: 80,
    borderRadius: "50%",
    border: "3px solid #D4AF37",
    zIndex: 1,
    transition: "opacity 0.6s ease",
    opacity: state === "revealing" || state === "done" ? 0 : 1,
  };

  const valance: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 28,
    zIndex: 20,
    background: `
      repeating-linear-gradient(
        90deg,
        #D4AF37 0px,
        #C5A030 4px,
        #D4AF37 8px,
        #B8932A 12px
      )
    `,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
    transition: prefersReducedMotion
      ? "opacity 0.8s ease"
      : "transform 2s cubic-bezier(0.77, 0, 0.175, 1)",
    ...(state === "revealing" || state === "done"
      ? prefersReducedMotion
        ? { opacity: 0 }
        : { transform: "translateY(-100%)" }
      : {}),
  };

  const fringeStyle: React.CSSProperties = {
    position: "absolute",
    bottom: -10,
    left: 0,
    right: 0,
    height: 10,
    background: `
      repeating-linear-gradient(
        90deg,
        transparent 0px,
        transparent 4px,
        #D4AF37 4px,
        #D4AF37 6px
      )
    `,
  };

  const cardOpacity = (() => {
    if (state === "revealing" || state === "done") return 0;
    if (!cardVisible) return 0;
    return 1;
  })();

  const cardScale = (() => {
    if (state === "revealing" || state === "done") return 0.95;
    if (!cardVisible) return 0.97;
    return 1;
  })();

  const card: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%) scale(${cardScale})`,
    zIndex: 30,
    backgroundColor: "rgba(60, 16, 16, 0.85)",
    border: "1px solid #D4AF37",
    padding: "48px 40px",
    maxWidth: 420,
    width: "calc(100% - 48px)",
    textAlign: "center",
    opacity: cardOpacity,
    transition: prefersReducedMotion
      ? "opacity 0.6s ease"
      : "opacity 0.6s ease, transform 0.6s ease",
  };

  const shakeKeyframes = `
    @keyframes shake {
      0%, 100% { transform: translate(-50%, -50%) scale(1) translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translate(-50%, -50%) scale(1) translateX(-6px); }
      20%, 40%, 60%, 80% { transform: translate(-50%, -50%) scale(1) translateX(6px); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
  `;

  const cardWithShake: React.CSSProperties =
    state === "shaking"
      ? { ...card, animation: "shake 0.5s ease-in-out" }
      : card;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#F5EBD6",
        overflow: "hidden",
      }}
    >
      <style>{shakeKeyframes}</style>

      {/* Valance */}
      <div style={valance}>
        <div style={fringeStyle} />
      </div>

      {/* Left curtain */}
      <div style={leftCurtain}>
        <div style={{ ...tiebackBase, right: -20 }} />
      </div>

      {/* Right curtain */}
      <div style={rightCurtain}>
        <div style={{ ...tiebackBase, left: -20 }} />
      </div>

      {/* Password card */}
      <div style={cardWithShake}>
        {/* Floating heart */}
        <div
          style={{
            marginBottom: 20,
            animation: prefersReducedMotion ? "none" : "float 3s ease-in-out infinite",
          }}
          aria-hidden="true"
        >
          <Heart
            size={28}
            color="#D4AF37"
            fill="#D4AF37"
            strokeWidth={1}
          />
        </div>

        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-karla), Karla, sans-serif",
            fontSize: 12,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#D4AF37",
            marginBottom: 16,
          }}
        >
          You&rsquo;re invited
        </p>

        {/* Names */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant), Cormorant Garamond, serif",
            fontSize: "clamp(32px, 6vw, 44px)",
            fontWeight: 400,
            color: "#FAF6EF",
            lineHeight: 1.2,
            marginBottom: 8,
          }}
        >
          Tom{" "}
          <span style={{ fontStyle: "italic", color: "#D4AF37" }}>&amp;</span>{" "}
          Morgan
        </h1>

        {/* Subhead */}
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 17,
            fontStyle: "italic",
            color: "rgba(250, 246, 239, 0.7)",
            marginBottom: 32,
          }}
        >
          Please enter the password from your invitation
        </p>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="unlock-password"
            style={{
              position: "absolute",
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: 0,
            }}
          >
            Password
          </label>
          <input
            ref={inputRef}
            id="unlock-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            style={{
              width: "100%",
              padding: "14px 16px",
              backgroundColor: "transparent",
              border: "1px solid #D4AF37",
              color: "#FAF6EF",
              fontFamily: "var(--font-karla), Karla, sans-serif",
              fontSize: 16,
              letterSpacing: 3,
              textAlign: "center",
              outline: "none",
              marginBottom: 16,
            }}
          />

          <button
            type="submit"
            disabled={state === "revealing"}
            style={{
              width: "100%",
              padding: "14px 32px",
              backgroundColor: "#D4AF37",
              color: "#3D2514",
              border: "none",
              fontFamily: "var(--font-karla), Karla, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: 3,
              textTransform: "uppercase",
              cursor: state === "revealing" ? "default" : "pointer",
              opacity: state === "revealing" ? 0.6 : 1,
              transition: "opacity 0.2s",
            }}
          >
            Enter
          </button>
        </form>

        {error && (
          <p
            role="alert"
            aria-live="polite"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 15,
              fontStyle: "italic",
              color: "rgba(250, 246, 239, 0.8)",
              marginTop: 16,
            }}
          >
            {error}
          </p>
        )}
      </div>

      {/* Focus styles for the unlock page inputs */}
      <style>{`
        #unlock-password:focus-visible {
          border-color: #FAF6EF;
          box-shadow: 0 0 0 1px #D4AF37;
        }
      `}</style>
    </div>
  );
}
