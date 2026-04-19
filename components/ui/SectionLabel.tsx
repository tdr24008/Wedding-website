interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <p
      style={{
        fontFamily: "var(--font-karla), Karla, sans-serif",
        fontSize: 11,
        letterSpacing: 3,
        textTransform: "uppercase",
        color: "#8A6A3D",
        marginBottom: 12,
        textAlign: "center",
      }}
    >
      {text}
    </p>
  );
}
