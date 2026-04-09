const features = [
  {
    icon: "✅",
    iconBg: "rgba(124,106,255,0.15)",
    title: "Pros & Strengths",
    desc: "Discover what makes your idea compelling — unique angles, market timing, and competitive advantages.",
    span: 1,
  },
  {
    icon: "⚠️",
    iconBg: "rgba(56,217,245,0.12)",
    title: "Cons & Risks",
    desc: "Uncover hidden pitfalls, market challenges, and execution risks before you invest resources.",
    span: 1,
  },
  {
    icon: "🎯",
    iconBg: "rgba(236,72,153,0.12)",
    title: "Target Audience",
    desc: "Identify your ideal customer profile and understand exactly who would pay for your solution.",
    span: 1,
  },
  {
    icon: "💡",
    iconBg: "rgba(251,191,36,0.12)",
    title: "Improvement Ideas",
    desc: "Get actionable suggestions to strengthen your concept and differentiate from competitors.",
    span: 1,
  },
  {
    icon: "💰",
    iconBg: "rgba(124,106,255,0.15)",
    title: "Monetization Strategies",
    desc: "Explore revenue models tailored to your idea — from SaaS subscriptions to marketplace fees and beyond.",
    span: 2,
    highlight: true,
  },
];

export default function FeaturesSection() {
  return (
    <section className="max-w-6xl mx-auto px-12 py-24" id="features">
      <p
        className="text-[13px] font-semibold tracking-widest uppercase mb-3"
        style={{ color: "var(--accent1)" }}
      >
        What You Get
      </p>
      <h2
        className="font-syne font-extrabold leading-[1.12] tracking-tight mb-4 max-w-xl"
        style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
      >
        Everything you need to{" "}
        <span className="grad-text">validate faster</span>
      </h2>
      <p
        className="font-light text-[17px] leading-relaxed mb-14 max-w-lg"
        style={{ color: "var(--muted)" }}
      >
        Our AI analyzes your idea across 5 critical dimensions that investors
        and founders care about.
      </p>

      <div className="grid grid-cols-2 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="glass-card p-7"
            style={{
              gridColumn: f.span === 2 ? "1 / -1" : undefined,
              background: f.highlight
                ? "linear-gradient(135deg, rgba(124,106,255,0.10) 0%, rgba(56,217,245,0.07) 100%)"
                : "var(--surface)",
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
              style={{ background: f.iconBg }}
            >
              {f.icon}
            </div>
            <h3 className="font-syne font-bold text-[17px] mb-2">{f.title}</h3>
            <p className="text-[14px] leading-relaxed" style={{ color: "var(--muted)" }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
