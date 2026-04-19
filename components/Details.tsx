import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

interface DetailCardProps {
  title: string;
  children: React.ReactNode;
}

function DetailCard({ title, children }: DetailCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#FAF6EF",
        padding: 32,
        flex: 1,
        minWidth: 260,
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontSize: 22,
          fontWeight: 400,
          color: "#3D2514",
          marginBottom: 16,
        }}
      >
        {title}
      </h3>
      <div
        style={{
          fontSize: 16,
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
              fontSize: 36,
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
          <DetailCard title="Ceremony">
            <p>[VENUE NAME]</p>
            <p>[TIME]</p>
            <p style={{ marginTop: 8, color: "#8A6A3D" }}>
              Cotswolds, Oxfordshire
            </p>
          </DetailCard>

          <DetailCard title="Reception">
            <p>[VENUE NAME]</p>
            <p>[TIME]</p>
            <p style={{ marginTop: 8, color: "#8A6A3D" }}>
              Dinner, dancing &amp; celebrations
            </p>
          </DetailCard>

          <DetailCard title="Dress Code">
            <p>[DRESS CODE]</p>
            <p style={{ marginTop: 8, color: "#8A6A3D" }}>
              [Additional guidance]
            </p>
          </DetailCard>
        </div>
      </div>
    </section>
  );
}
