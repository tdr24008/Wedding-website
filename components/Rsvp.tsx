"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

type Attendance = "" | "yes" | "no";

const inputStyle: React.CSSProperties = {
  fontFamily: "var(--font-karla), sans-serif",
  fontSize: 15,
  padding: "12px 16px",
  border: "1px solid #D9C9A8",
  backgroundColor: "#FAF6EF",
  color: "#3D2514",
  width: "100%",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-karla), sans-serif",
  fontSize: 13,
  fontWeight: 500,
  color: "#5C3A1E",
  display: "block",
  marginBottom: 6,
};

export default function Rsvp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attending, setAttending] = useState<Attendance>("");
  const [mealChoice, setMealChoice] = useState("");
  const [dietary, setDietary] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="rsvp"
        style={{
          padding: "80px 24px",
          backgroundColor: "#F2E8D5",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: "#3D2514",
              marginBottom: 16,
            }}
          >
            Thank You
          </h2>
          <p style={{ fontSize: 18, color: "#5C3A1E" }}>
            {attending === "yes"
              ? "We can't wait to celebrate with you!"
              : "We're sorry you can't make it. You'll be missed!"}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="rsvp"
      style={{
        padding: "80px 24px",
        backgroundColor: "#F2E8D5",
      }}
    >
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <SectionLabel text="Respond" />
          <h2
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: "#3D2514",
              marginBottom: 8,
            }}
          >
            RSVP
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#8A6A3D",
              marginBottom: 8,
            }}
          >
            Please respond by 15 July 2026
          </p>
          <Divider icon="✉" />
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="rsvp-name" style={labelStyle}>
              Full name
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label htmlFor="rsvp-email" style={labelStyle}>
              Email address
            </label>
            <input
              id="rsvp-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <fieldset style={{ border: "none", padding: 0 }}>
              <legend style={{ ...labelStyle, marginBottom: 10 }}>
                Will you be attending?
              </legend>
              <div style={{ display: "flex", gap: 24 }}>
                <label
                  style={{
                    fontFamily: "var(--font-karla), sans-serif",
                    fontSize: 14,
                    color: "#5C3A1E",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    required
                    checked={attending === "yes"}
                    onChange={() => setAttending("yes")}
                  />
                  Joyfully accepts
                </label>
                <label
                  style={{
                    fontFamily: "var(--font-karla), sans-serif",
                    fontSize: 14,
                    color: "#5C3A1E",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={attending === "no"}
                    onChange={() => setAttending("no")}
                  />
                  Regretfully declines
                </label>
              </div>
            </fieldset>
          </div>

          {attending === "yes" && (
            <>
              <div style={{ marginBottom: 20 }}>
                <label htmlFor="rsvp-meal" style={labelStyle}>
                  Meal preference
                </label>
                <select
                  id="rsvp-meal"
                  value={mealChoice}
                  onChange={(e) => setMealChoice(e.target.value)}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="">Select an option</option>
                  <option value="meat">Meat</option>
                  <option value="fish">Fish</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                </select>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label htmlFor="rsvp-dietary" style={labelStyle}>
                  Dietary requirements
                </label>
                <textarea
                  id="rsvp-dietary"
                  rows={3}
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                  placeholder="Any allergies or dietary needs..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>
            </>
          )}

          <button
            type="submit"
            style={{
              fontFamily: "var(--font-karla), sans-serif",
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              backgroundColor: "#5C3A1E",
              color: "#F5EBD6",
              padding: "14px 40px",
              border: "none",
              cursor: "pointer",
              width: "100%",
              marginTop: 8,
            }}
          >
            Submit RSVP
          </button>
        </form>
      </div>
    </section>
  );
}
