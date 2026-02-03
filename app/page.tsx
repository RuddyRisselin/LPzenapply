import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionTimeline from "@/components/landing/SolutionTimeline";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionTimeline />
      <FeaturesGrid />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
