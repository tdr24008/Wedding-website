"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div style={{ borderBottom: "1px solid #D9C9A8" }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          padding: "24px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
          gap: 16,
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontFamily: "var(--font-cormorant), serif",
            color: "#3D2514",
          }}
        >
          {question}
        </span>
        <span
          style={{
            fontFamily: "var(--font-karla), sans-serif",
            fontSize: 20,
            color: "#B8935A",
            transition: "transform 0.2s",
            transform: isOpen ? "rotate(45deg)" : "none",
            flexShrink: 0,
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            padding: "0 0 24px",
            fontSize: 18,
            lineHeight: 1.8,
            color: "#5C3A1E",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

const FAQ_DATA = [
  {
    question: "What time should I arrive?",
    answer: "[Arrival time and any details about parking or meeting points]",
  },
  {
    question: "Is there parking available?",
    answer: "[Parking details and any alternative transport options]",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "We have limited space, so please only bring those named on your invitation. If you\u2019re unsure, please get in touch.",
  },
  {
    question: "Are children welcome?",
    answer: "[Policy on children attending]",
  },
  {
    question: "What should I wear?",
    answer: "[Dress code details and any helpful guidance]",
  },
  {
    question: "Will there be vegetarian/vegan options?",
    answer:
      "Absolutely! Please let us know your dietary requirements when you RSVP and we\u2019ll make sure you are well fed.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        padding: "80px 24px",
        backgroundColor: "#F2E8D5",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <SectionLabel text="Questions" />
          <h2
            style={{
              fontSize: 42,
              fontWeight: 400,
              color: "#3D2514",
              marginBottom: 16,
            }}
          >
            FAQs
          </h2>
          <Divider icon="?" />
        </div>

        <div style={{ borderTop: "1px solid #D9C9A8" }}>
          {FAQ_DATA.map((item, i) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
