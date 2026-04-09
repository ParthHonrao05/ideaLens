"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" className="grad-text-main font-syne text-[22px] font-extrabold no-underline">
        IdeaLens ✦
      </Link>

      {/* Desktop Nav Links */}
      <div className="nav-links-desktop flex items-center gap-8">
        <Link
          href="/#features"
          className="text-[var(--muted)] hover:text-white text-sm font-medium transition-colors no-underline"
        >
          Features
        </Link>
        <Link
          href="/#how"
          className="text-[var(--muted)] hover:text-white text-sm font-medium transition-colors no-underline"
        >
          How it Works
        </Link>
        <Link
          href="/analyze"
          className="text-[var(--muted)] hover:text-white text-sm font-medium transition-colors no-underline"
        >
          Analyzer
        </Link>
      </div>

      {/* CTA */}
      <Link href="/analyze">
        <button
          className="btn-primary"
          style={{ padding: "10px 24px", fontSize: "14px" }}
        >
          {pathname === "/analyze" ? "New Analysis" : "Try Free →"}
        </button>
      </Link>
    </nav>
  );
}
