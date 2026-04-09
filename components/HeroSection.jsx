import Link from "next/link";
import StatsRow from "./StatsRow";

export default function HeroSection() {
  return (
    <section
      className="hero-bg min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 relative overflow-hidden"
    >
      {/* Heading */}
      <h1
        className="font-syne font-extrabold leading-[1.08] tracking-tight mb-6 max-w-3xl"
        style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
      >
        Validate Your Startup Idea{" "}
        <span className="grad-text">Instantly with AI</span>
      </h1>

      {/* Subheading */}
      <p
        className="font-light mb-11 max-w-xl leading-relaxed"
        style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "var(--muted)",
        }}
      >
        Stop second-guessing. Get a full analysis of your startup idea — pros,
        cons, target market, monetization, and improvement suggestions in
        seconds.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 justify-center mb-16">
        <Link href="/analyze">
          <button className="btn-primary" style={{ fontSize: "16px" }}>
            Analyze My Idea →
          </button>
        </Link>
        <a href="#features">
          <button className="btn-secondary" style={{ fontSize: "16px" }}>
            See How It Works
          </button>
        </a>
      </div>

      {/* Stats */}
      <StatsRow />
    </section>
  );
}
