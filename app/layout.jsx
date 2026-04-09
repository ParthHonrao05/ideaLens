import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
});

export const metadata = {
  title: "IdeaLens – Validate Your Startup Idea with AI",
  description:
    "Get instant AI-powered analysis of your startup idea. Discover pros, cons, target audience, improvements, and monetization strategies in seconds.",
  openGraph: {
    title: "IdeaLens – Startup Idea Validator",
    description: "Validate your startup idea instantly with AI",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dm.variable}`}>
      <body className="bg-bg text-white font-dm antialiased">{children}</body>
    </html>
  );
}
