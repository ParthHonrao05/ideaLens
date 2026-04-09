import Navbar from "../../components/Navbar";
import AnalyzerForm from "../../components/AnalyzerForm.jsx";
import Footer from "../../components/Footer.jsx";

export const metadata = {
  title: "Analyze Your Idea – IdeaLens",
  description: "Enter your startup idea and get an instant AI-powered analysis.",
};

export default function AnalyzePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <AnalyzerForm />
      </main>
      <Footer />
    </>
  );
}
