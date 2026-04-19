import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

interface ScheduleItemProps {
  time: string;
  title: string;
  description: string;
}

function ScheduleItem({ time, title, description }: ScheduleItemProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 24,
        padding: "24px 0",
        borderBottom: "1px dashed #D9C9A8",
        alignItems: "baseline",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-karla), sans-serif",
          fontSize: 13,
          letterSpacing: 1,
          color: "#8A6A3D",
          minWidth: 80,
          textAlign: "right",
        }}
      >
        {time}
      </div>
      <div>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 400,
            color: "#3D2514",
            marginBottom: 4,
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: 16, color: "#5C3A1E" }}>{description}</p>
      </div>
    </div>
  );
}

const SCHEDULE_ITEMS: ScheduleItemProps[] = [
  { time: "[TIME]", title: "Guest Arrival", description: "Welcome drinks and canapés" },
  { time: "[TIME]", title: "Ceremony", description: "[Ceremony details]" },
  { time: "[TIME]", title: "Drinks Reception", description: "Cocktails and photographs" },
  { time: "[TIME]", title: "Wedding Breakfast", description: "Dinner and speeches" },
  { time: "[TIME]", title: "First Dance", description: "Evening celebrations begin" },
  { time: "[TIME]", title: "Evening", description: "Dancing and festivities" },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      style={{
        padding: "80px 24px",
        backgroundColor: "#F2E8D5",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <SectionLabel text="Order of the Day" />
          <h2
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: "#3D2514",
              marginBottom: 16,
            }}
          >
            Schedule
          </h2>
          <Divider icon="◷" />
        </div>

        <div>
          {SCHEDULE_ITEMS.map((item) => (
            <ScheduleItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
