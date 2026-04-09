const steps = [
  {
    num: "1",
    title: "Describe Your Idea",
    desc: "Type your startup concept in plain English. Be as detailed as you like.",
  },
  {
    num: "2",
    title: "AI Analysis Runs",
    desc: "Our AI evaluates feasibility, market fit, risks, and opportunities.",
  },
  {
    num: "3",
    title: "Get Your Report",
    desc: "Receive a structured breakdown across 5 key dimensions instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-12 py-24" id="how">
      <p
        className="text-[13px] font-semibold tracking-widest uppercase mb-3"
        style={{ color: "var(--accent1)" }}
      >
        How It Works
      </p>
      <h2
        className="font-syne font-extrabold leading-[1.12] tracking-tight mb-4 max-w-xl"
        style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
      >
        3 steps to <span className="grad-text">clarity</span>
      </h2>
      <p
        className="font-light text-[17px] leading-relaxed mb-14 max-w-lg"
        style={{ color: "var(--muted)" }}
      >
        No sign-up. No fluff. Just describe your idea and get actionable
        intelligence instantly.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 relative">
        {steps.map((step, i) => (
          <div key={step.num} className="relative flex flex-col items-center text-center px-8 py-8">
            {/* Arrow between steps */}
            {i < steps.length - 1 && (
              <span
                className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 text-xl z-10"
                style={{ color: "var(--border2)" }}
              >
                →
              </span>
            )}

            {/* Step number circle */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center font-syne font-extrabold text-[18px] text-white mb-4"
              style={{ background: "var(--grad)" }}
            >
              {step.num}
            </div>

            <h4 className="font-syne font-bold text-[16px] mb-2">{step.title}</h4>
            <p className="text-[13px] leading-relaxed" style={{ color: "var(--muted)" }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
