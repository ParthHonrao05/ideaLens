import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div style={{ background: "var(--bg2)" }}>
          <FeaturesSection />
        </div>
        <HowItWorks />
        <div style={{ background: "var(--bg2)" }}>
          <CtaBand />
        </div>
      </main>
      <Footer />
    </>
  );
}
