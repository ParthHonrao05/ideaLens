export default function Footer() {
  return (
    <footer
      className="text-center py-12 px-6 text-[13px]"
      style={{
        color: "var(--muted)",
        borderTop: "1px solid var(--border)",
      }}
    >
      Built with ♥ by{" "}
      <span className="text-white font-medium">IdeaLens</span> ·{" "}
      <a href="#" style={{ color: "var(--muted)" }} className="hover:text-white transition-colors">
        Privacy
      </a>{" "}
      ·{" "}
      <a href="#" style={{ color: "var(--muted)" }} className="hover:text-white transition-colors">
        Terms
      </a>
    </footer>
  );
}
