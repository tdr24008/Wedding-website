"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

type Attendance = "" | "yes" | "no";

const inputStyle: React.CSSProperties = {
  fontFamily: "var(--font-karla), sans-serif",
  fontSize: 17,
  padding: "14px 16px",
  border: "1px solid #D9C9A8",
  backgroundColor: "#FAF6EF",
  color: "#3D2514",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-karla), sans-serif",
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: 1,
  textTransform: "uppercase",
  color: "#8A6A3D",
  display: "block",
  marginBottom: 8,
};

const radioLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-karla), sans-serif",
  fontSize: 16,
  color: "#5C3A1E",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 8,
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
          <SectionLabel text="Thank You" />
          <h2
            style={{
              fontSize: 42,
              fontWeight: 400,
              color: "#3D2514",
              marginBottom: 16,
            }}
          >
            {attending === "yes" ? "See You There" : "We\u2019ll Miss You"}
          </h2>
          <Divider icon="♥" />
          <p style={{ fontSize: 20, color: "#5C3A1E", lineHeight: 1.7 }}>
            {attending === "yes"
              ? "Thank you for your RSVP. We can\u2019t wait to celebrate with you!"
              : "Thank you for letting us know. We\u2019re sorry you can\u2019t make it \u2014 you\u2019ll be missed!"}
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
              fontSize: 42,
              fontWeight: 400,
              color: "#3D2514",
              marginBottom: 8,
            }}
          >
            RSVP
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#8A6A3D",
              marginBottom: 8,
            }}
          >
            Please respond by 15 July 2026
          </p>
          <Divider icon="✉" />
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 24 }}>
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

          <div style={{ marginBottom: 24 }}>
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

          <div style={{ marginBottom: 24 }}>
            <fieldset style={{ border: "none", padding: 0 }}>
              <legend style={{ ...labelStyle, marginBottom: 12 }}>
                Will you be attending?
              </legend>
              <div style={{ display: "flex", gap: 32 }}>
                <label style={radioLabelStyle}>
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    required
                    checked={attending === "yes"}
                    onChange={() => setAttending("yes")}
                    style={{ accentColor: "#5C3A1E" }}
                  />
                  Joyfully accepts
                </label>
                <label style={radioLabelStyle}>
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={attending === "no"}
                    onChange={() => setAttending("no")}
                    style={{ accentColor: "#5C3A1E" }}
                  />
                  Regretfully declines
                </label>
              </div>
            </fieldset>
          </div>

          {attending === "yes" && (
            <>
              <div style={{ marginBottom: 24 }}>
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

              <div style={{ marginBottom: 24 }}>
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
              fontSize: 14,
              letterSpacing: 2,
              textTransform: "uppercase",
              backgroundColor: "#5C3A1E",
              color: "#F5EBD6",
              padding: "16px 40px",
              border: "none",
              cursor: "pointer",
              width: "100%",
              marginTop: 8,
              transition: "background-color 0.2s",
            }}
          >
            Submit RSVP
          </button>
        </form>
      </div>

      <style>{`
        #rsvp input:focus,
        #rsvp select:focus,
        #rsvp textarea:focus {
          border-color: #B8935A !important;
        }
      `}</style>
    </section>
  );
}
