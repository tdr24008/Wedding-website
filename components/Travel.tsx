import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

interface TravelCardProps {
  title: string;
  children: React.ReactNode;
}

function TravelCard({ title, children }: TravelCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#FAF6EF",
        padding: 32,
        flex: 1,
        minWidth: 280,
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

export default function Travel() {
  return (
    <section
      id="travel"
      style={{
        padding: "80px 24px",
        backgroundColor: "#F5EBD6",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <SectionLabel text="Getting There" />
          <h2
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: "#3D2514",
              marginBottom: 16,
            }}
          >
            Travel &amp; Stay
          </h2>
          <Divider icon="✧" />
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <TravelCard title="Accommodation">
            <p>[HOTEL NAME]</p>
            <p style={{ color: "#8A6A3D", marginTop: 8 }}>
              [We have arranged a block booking / details about nearby places to stay]
            </p>
          </TravelCard>

          <TravelCard title="Getting There">
            <p style={{ marginBottom: 8 }}>
              <strong>By car:</strong> [Directions / postcode for sat nav]
            </p>
            <p>
              <strong>By train:</strong> [Nearest station and taxi details]
            </p>
          </TravelCard>
        </div>
      </div>
    </section>
  );
}
