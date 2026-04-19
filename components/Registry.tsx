import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

export default function Registry() {
  return (
    <section
      id="registry"
      style={{
        padding: "80px 24px",
        backgroundColor: "#F5EBD6",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <SectionLabel text="Gifts" />
        <h2
          style={{
            fontSize: 42,
            fontWeight: 400,
            color: "#3D2514",
            marginBottom: 16,
          }}
        >
          Honeymoon Fund
        </h2>
        <Divider icon="✦" />

        <div
          style={{
            backgroundColor: "#FAF6EF",
            padding: "40px 32px",
            borderTop: "2px solid #B8935A",
          }}
        >
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.8,
              color: "#5C3A1E",
              marginBottom: 24,
            }}
          >
            Your presence at our wedding is the greatest gift of all. However,
            if you wish to give something, we would love a contribution towards
            our honeymoon.
          </p>

          <p
            style={{
              fontFamily: "var(--font-karla), sans-serif",
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#8A6A3D",
              marginBottom: 24,
            }}
          >
            [Honeymoon fund link or details will go here]
          </p>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              fontFamily: "var(--font-karla), sans-serif",
              fontSize: 14,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#5C3A1E",
              padding: "14px 40px",
              border: "1px solid #5C3A1E",
              textDecoration: "none",
              display: "inline-block",
              transition: "background-color 0.2s, color 0.2s",
            }}
          >
            View Honeymoon Fund
          </a>
        </div>
      </div>
    </section>
  );
}
