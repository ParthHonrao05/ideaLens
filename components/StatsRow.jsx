const stats = [
  { num: "5", label: "AI Insights" },
  { num: "<10s", label: "Response Time" },
  { num: "100%", label: "Free to Try" },
  { num: "∞", label: "Ideas Supported" },
];

export default function StatsRow() {
  return (
    <div
      className="flex flex-wrap gap-8 justify-center px-8 py-6 rounded-[22px]"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div
            className="font-syne font-extrabold text-[28px] grad-text-main"
          >
            {s.num}
          </div>
          <div className="text-[13px]" style={{ color: "var(--muted)" }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
