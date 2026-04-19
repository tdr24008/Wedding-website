import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

interface ScheduleItemProps {
  time: string;
  title: string;
  description: string;
  isLast?: boolean;
}

function ScheduleItem({ time, title, description, isLast }: ScheduleItemProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 28,
        padding: "28px 0",
        borderBottom: isLast ? "none" : "1px dashed #D9C9A8",
        alignItems: "baseline",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-karla), sans-serif",
          fontSize: 15,
          letterSpacing: 1,
          color: "#8A6A3D",
          minWidth: 72,
          textAlign: "right",
          fontWeight: 500,
        }}
      >
        {time}
      </div>
      <div style={{ position: "relative", paddingLeft: 20 }}>
        <span
          style={{
            position: "absolute",
            left: 0,
            top: 8,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#B8935A",
          }}
        />
        <h3
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "#3D2514",
            marginBottom: 4,
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: 18, color: "#8A6A3D", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

const SCHEDULE_ITEMS: Omit<ScheduleItemProps, "isLast">[] = [
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
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <SectionLabel text="Order of the Day" />
          <h2
            style={{
              fontSize: 42,
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
          {SCHEDULE_ITEMS.map((item, i) => (
            <ScheduleItem
              key={item.title}
              {...item}
              isLast={i === SCHEDULE_ITEMS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
