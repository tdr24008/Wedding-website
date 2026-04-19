interface DividerProps {
  icon?: string;
}

export default function Divider({ icon = "·" }: DividerProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        margin: "40px auto",
        maxWidth: 300,
      }}
    >
      <span
        style={{
          flex: 1,
          height: 1,
          backgroundColor: "#B8935A",
        }}
      />
      <span
        style={{
          color: "#B8935A",
          fontSize: 18,
          lineHeight: 1,
        }}
      >
        {icon}
      </span>
      <span
        style={{
          flex: 1,
          height: 1,
          backgroundColor: "#B8935A",
        }}
      />
    </div>
  );
}
