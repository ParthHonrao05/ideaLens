"use client";

import { useState } from "react";

const CARDS = [
  {
    key: "pros",
    icon: "✅",
    title: "Strengths & Pros",
    badge: { label: "found", color: "#34d399", bg: "rgba(52,211,153,0.12)" },
    bulletColor: "#34d399",
    type: "list",
    fullWidth: false,
  },
  {
    key: "cons",
    icon: "⚠️",
    title: "Risks & Cons",
    badge: { label: "identified", color: "#f87171", bg: "rgba(248,113,113,0.12)" },
    bulletColor: "#f87171",
    type: "list",
    fullWidth: false,
  },
  {
    key: "target_audience",
    icon: "🎯",
    title: "Target Audience",
    badge: { label: "ICP", color: "#60a5fa", bg: "rgba(96,165,250,0.12)" },
    bulletColor: "#60a5fa",
    type: "text",
    fullWidth: true,
  },
  {
    key: "improvements",
    icon: "💡",
    title: "Improvements",
    badge: { label: "suggestions", color: "#a78bfa", bg: "rgba(167,139,250,0.12)" },
    bulletColor: "#a78bfa",
    type: "list",
    fullWidth: false,
  },
  {
    key: "monetization",
    icon: "💰",
    title: "Monetization",
    badge: { label: "models", color: "#fbbf24", bg: "rgba(251,191,36,0.12)" },
    bulletColor: "#fbbf24",
    type: "list",
    fullWidth: false,
  },
];

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 11H2.5A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7A1.5 1.5 0 0 1 11 2.5V3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l4 4 6-7" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ResultCards({ result, idea }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(JSON.stringify(result, null, 2)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="mt-10 animate-fadeUp">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-7">
        <div>
          <h3 className="font-syne font-extrabold text-[22px]">✦ Analysis Complete</h3>
          <p className="text-[13px] mt-1" style={{ color: "var(--muted)" }}>
            Based on: <span className="italic" style={{ color: "#c4cadf" }}>
              "{idea.length > 80 ? idea.slice(0, 80) + "…" : idea}"
            </span>
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border2)",
            color: copied ? "#34d399" : "#f0f4ff",
            cursor: "pointer",
          }}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? "Copied!" : "Copy JSON"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CARDS.map((card) => {
          const value = result[card.key];
          const count = Array.isArray(value) ? value.length : null;
          return (
            <div
              key={card.key}
              className="result-card"
              style={{ gridColumn: card.fullWidth ? "1 / -1" : undefined }}
            >
              <div className="flex items-center gap-3 mb-4 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                <span className="text-[18px]">{card.icon}</span>
                <span className="font-syne font-bold text-[15px]">{card.title}</span>
                <span
                  className="ml-auto text-[11px] font-semibold px-3 py-1 rounded-full"
                  style={{ background: card.badge.bg, color: card.badge.color }}
                >
                  {count !== null ? `${count} ${card.badge.label}` : card.badge.label}
                </span>
              </div>
              {card.type === "list" && Array.isArray(value) ? (
                <ul className="flex flex-col gap-3 list-none">
                  {value.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-[14px] leading-snug" style={{ color: "#cdd5f0" }}>
                      <span className="mt-[8px] flex-shrink-0" style={{ color: card.bulletColor }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[14px] leading-relaxed" style={{ color: "#cdd5f0" }}>{value}</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <p className="text-[14px] mb-4" style={{ color: "var(--muted)" }}>Want to explore a different idea?</p>
        <button
          className="btn-secondary text-[14px]"
          style={{ padding: "12px 28px" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Analyze Another Idea
        </button>
      </div>
    </div>
  );
}
