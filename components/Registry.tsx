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
            fontSize: 36,
            fontWeight: 400,
            color: "#3D2514",
            marginBottom: 16,
          }}
        >
          Honeymoon Fund
        </h2>
        <Divider icon="✦" />

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: "#5C3A1E",
            marginBottom: 24,
          }}
        >
          Your presence at our wedding is the greatest gift of all. However, if
          you wish to give something, we would love a contribution towards our
          honeymoon.
        </p>

        <p
          style={{
            fontSize: 16,
            color: "#8A6A3D",
          }}
        >
          [Honeymoon fund link or details will go here]
        </p>
      </div>
    </section>
  );
}
