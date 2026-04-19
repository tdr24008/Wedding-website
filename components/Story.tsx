import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
}

function Milestone({ year, title, description }: MilestoneProps) {
  return (
    <div style={{ textAlign: "center", maxWidth: 280, flex: 1 }}>
      <p
        style={{
          fontFamily: "var(--font-karla), sans-serif",
          fontSize: 13,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#B8935A",
          marginBottom: 8,
        }}
      >
        {year}
      </p>
      <h3
        style={{
          fontSize: 24,
          fontWeight: 400,
          color: "#3D2514",
          marginBottom: 8,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 18,
          lineHeight: 1.7,
          color: "#5C3A1E",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function Story() {
  return (
    <section
      id="story"
      style={{
        padding: "80px 24px",
        backgroundColor: "#F2E8D5",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <SectionLabel text="Our Story" />
        <h2
          style={{
            fontSize: 42,
            fontWeight: 400,
            color: "#3D2514",
            marginBottom: 24,
          }}
        >
          How We Met
        </h2>

        <Divider icon="♥" />

        {/* TODO: replace with real story */}
        <p
          style={{
            fontSize: 20,
            lineHeight: 1.8,
            color: "#5C3A1E",
            marginBottom: 16,
            maxWidth: 640,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          [Our story will go here — how we met, the journey so far, and why
          we&rsquo;re so excited to celebrate with all of you.]
        </p>

        <p
          style={{
            fontSize: 20,
            lineHeight: 1.8,
            color: "#5C3A1E",
            maxWidth: 640,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 56,
          }}
        >
          [More story content — the proposal, our favourite memories together,
          what this day means to us.]
        </p>

        <div
          style={{
            display: "flex",
            gap: 40,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* TODO: replace with real milestones */}
          <Milestone
            year="[YEAR]"
            title="First Meeting"
            description="[How we first met]"
          />
          <Milestone
            year="[YEAR]"
            title="The Proposal"
            description="[How the proposal happened]"
          />
          <Milestone
            year="2026"
            title="The Wedding"
            description="And the next chapter begins"
          />
        </div>
      </div>
    </section>
  );
}
