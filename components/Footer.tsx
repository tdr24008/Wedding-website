export default function Footer() {
  return (
    <footer
      style={{
        padding: "48px 24px",
        textAlign: "center",
        backgroundColor: "#F5EBD6",
        borderTop: "1px solid #D9C9A8",
      }}
    >
      <p
        style={{
          fontSize: 24,
          fontWeight: 400,
          color: "#3D2514",
          marginBottom: 8,
        }}
      >
        Tom <span style={{ fontStyle: "italic" }}>&amp;</span> Jane
      </p>
      <p
        style={{
          fontFamily: "var(--font-karla), sans-serif",
          fontSize: 11,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#8A6A3D",
        }}
      >
        12 September 2026
      </p>
    </footer>
  );
}
