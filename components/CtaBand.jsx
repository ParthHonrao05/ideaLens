import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="text-center py-20 px-6">
      <h2
        className="font-syne font-extrabold tracking-tight mb-4 leading-[1.12]"
        style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
      >
        Ready to test your idea?
      </h2>
      <p
        className="font-light text-[17px] mb-8"
        style={{ color: "var(--muted)" }}
      >
        Join founders who validated before they built.
      </p>
      <Link href="/analyze">
        <button
          className="btn-primary"
          style={{ fontSize: "17px", padding: "18px 44px" }}
        >
          Analyze My Idea — It&apos;s Free →
        </button>
      </Link>
    </section>
  );
}
