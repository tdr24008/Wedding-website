import Divider from "@/components/ui/Divider";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "56px 24px 48px",
        textAlign: "center",
        backgroundColor: "#F5EBD6",
        borderTop: "1px solid #D9C9A8",
      }}
    >
      <Divider icon="♥" />
      <p
        style={{
          fontSize: 32,
          fontWeight: 400,
          color: "#3D2514",
          marginBottom: 8,
        }}
      >
        Tom <span style={{ fontStyle: "italic" }}>&amp;</span> Morgan
      </p>
      <p
        style={{
          fontFamily: "var(--font-karla), sans-serif",
          fontSize: 13,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#8A6A3D",
          marginBottom: 24,
        }}
      >
        26 September 2026 &middot; Somerton, Somerset
      </p>
    </footer>
  );
}
