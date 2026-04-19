import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

export default function Story() {
  return (
    <section
      id="story"
      style={{
        padding: "80px 24px",
        backgroundColor: "#F2E8D5",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <SectionLabel text="Our Story" />
        <h2
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: "#3D2514",
            marginBottom: 24,
          }}
        >
          How We Met
        </h2>

        <Divider icon="♥" />

        {/* TODO: real story content */}
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: "#5C3A1E",
            marginBottom: 24,
          }}
        >
          [Our story will go here — how we met, the journey so far, and why
          we&rsquo;re so excited to celebrate with you.]
        </p>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: "#5C3A1E",
          }}
        >
          [More story content — the proposal, our favourite memories together,
          what this day means to us.]
        </p>
      </div>
    </section>
  );
}
