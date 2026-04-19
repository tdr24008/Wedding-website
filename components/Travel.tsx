import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

interface TravelCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

function TravelCard({ title, icon, children }: TravelCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#FAF6EF",
        padding: "40px 32px",
        flex: 1,
        minWidth: 280,
        borderTop: "2px solid #B8935A",
      }}
    >
      <p style={{ fontSize: 28, marginBottom: 12, lineHeight: 1 }}>{icon}</p>
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
              fontSize: 42,
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
          <TravelCard title="Accommodation" icon="🏡">
            <p style={{ fontWeight: 500, color: "#3D2514" }}>[HOTEL NAME]</p>
            <p style={{ marginTop: 8 }}>
              [We have arranged a block booking / details about nearby places to
              stay]
            </p>
            <p
              style={{
                marginTop: 16,
                fontFamily: "var(--font-karla), sans-serif",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#8A6A3D",
              }}
            >
              [Booking link or code]
            </p>
          </TravelCard>

          <TravelCard title="Getting There" icon="🚗">
            <p style={{ marginBottom: 16 }}>
              <span style={{ fontWeight: 500, color: "#3D2514" }}>
                By car:
              </span>{" "}
              [Directions / postcode for sat nav]
            </p>
            <p style={{ marginBottom: 16 }}>
              <span style={{ fontWeight: 500, color: "#3D2514" }}>
                By train:
              </span>{" "}
              [Nearest station and taxi details]
            </p>
            <p>
              <span style={{ fontWeight: 500, color: "#3D2514" }}>
                Taxis:
              </span>{" "}
              [Local taxi company recommendations]
            </p>
          </TravelCard>
        </div>
      </div>
    </section>
  );
}
