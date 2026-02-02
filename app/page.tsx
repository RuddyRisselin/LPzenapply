import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionTimeline from "@/components/landing/SolutionTimeline";
import FeaturesGrid from "@/components/landing/FeaturesGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <SolutionTimeline />
      <FeaturesGrid />
    </div>
  );
}
