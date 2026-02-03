import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionTimeline from "@/components/landing/SolutionTimeline";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <SolutionTimeline />
      <FeaturesGrid />
      <Testimonials />
      <Pricing />
    </div>
  );
}
