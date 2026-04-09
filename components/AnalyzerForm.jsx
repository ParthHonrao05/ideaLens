"use client";

import { useState } from "react";
import Link from "next/link";
import ResultCards from "./ResultCards";
import SkeletonLoader from "./SkeletonLoader";

export default function AnalyzerForm() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const charLimit = 1000;
  const minChars = 20;

  async function handleSubmit() {
    if (!idea.trim() || idea.length < minChars) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setResult(data);
    } catch (err) {
      setError(err.message || "Failed to analyze. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
  }

  const score = Math.floor(Math.random() * 3) + 7;

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm mb-7 transition-colors no-underline"
        style={{ color: "var(--muted)" }}
      >
        ← Back to home
      </Link>

      {/* Header */}
      <div className="mb-10">
        <h2
          className="font-syne font-extrabold tracking-tight leading-[1.12] mb-3"
          style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
        >
          Analyze Your <span className="grad-text">Startup Idea</span>
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "16px" }}>
          Describe your idea in detail for the most accurate analysis. Include
          the problem it solves, how it works, and who it helps.
        </p>
      </div>

      {/* Input Area */}
      <div className="idea-input-wrap mb-4">
        <textarea
          className="idea-textarea"
          placeholder="e.g. An app that connects local freelance chefs with busy professionals who want healthy homemade meals delivered on-demand. Chefs set their own menus and availability, customers subscribe to weekly meal plans..."
          rows={6}
          maxLength={charLimit}
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span className="text-[13px]" style={{ color: "var(--muted)" }}>
            {idea.length} / {charLimit} characters
            <span className="ml-3 opacity-60 hidden sm:inline">Cmd/Ctrl + Enter to submit</span>
          </span>
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={loading || idea.length < minChars}
          >
            {loading ? (
              <>
                <span className="spinner" />
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <span>Analyze Idea</span>
                <span>✦</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Hint */}
      {idea.length > 0 && idea.length < minChars && (
        <p className="text-[13px] mb-2" style={{ color: "var(--muted)" }}>
          Add a bit more detail ({minChars - idea.length} more characters needed)
        </p>
      )}

      {/* Error */}
      {error && (
        <div
          className="rounded-[14px] px-6 py-5 mt-8 text-[14px]"
          style={{
            background: "rgba(248,113,113,0.08)",
            border: "1px solid rgba(248,113,113,0.22)",
            color: "#f87171",
          }}
        >
          <strong>Analysis failed:</strong> {error}
        </div>
      )}

      {/* Skeleton Loader */}
      {loading && <SkeletonLoader />}

      {/* Results */}
      {result && !loading && <ResultCards result={result} idea={idea} />}
    </div>
  );
}
