import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

interface DetailCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

function DetailCard({ title, icon, children }: DetailCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#FAF6EF",
        padding: "40px 32px",
        flex: 1,
        minWidth: 260,
        textAlign: "center",
        borderTop: "2px solid #B8935A",
      }}
    >
      <p
        style={{
          fontSize: 28,
          marginBottom: 12,
          lineHeight: 1,
        }}
      >
        {icon}
      </p>
      <h3
        style={{
          fontSize: 26,
          fontWeight: 400,
          color: "#3D2514",
          marginBottom: 20,
        }}
      >
        {title}
      </h3>
      <div
        style={{
          fontSize: 18,
          lineHeight: 1.8,
          color: "#5C3A1E",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function Details() {
  return (
    <section
      id="details"
      style={{
        padding: "80px 24px",
        backgroundColor: "#F5EBD6",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <SectionLabel text="The Details" />
          <h2
            style={{
              fontSize: 42,
              fontWeight: 400,
              color: "#3D2514",
              marginBottom: 16,
            }}
          >
            Ceremony &amp; Reception
          </h2>
          <Divider icon="✦" />
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <DetailCard title="Ceremony" icon="⛪">
            <p style={{ fontWeight: 500, color: "#3D2514" }}>[VENUE NAME]</p>
            <p>[TIME]</p>
            <p
              style={{
                marginTop: 12,
                fontFamily: "var(--font-karla), sans-serif",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#8A6A3D",
              }}
            >
              Somerton, Somerset
            </p>
          </DetailCard>

          <DetailCard title="Reception" icon="🥂">
            <p style={{ fontWeight: 500, color: "#3D2514" }}>[VENUE NAME]</p>
            <p>[TIME]</p>
            <p
              style={{
                marginTop: 12,
                fontFamily: "var(--font-karla), sans-serif",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#8A6A3D",
              }}
            >
              Dinner, dancing &amp; celebrations
            </p>
          </DetailCard>

          <DetailCard title="Dress Code" icon="👔">
            <p style={{ fontWeight: 500, color: "#3D2514" }}>[DRESS CODE]</p>
            <p style={{ marginTop: 8 }}>[Additional guidance]</p>
          </DetailCard>
        </div>
      </div>
    </section>
  );
}
