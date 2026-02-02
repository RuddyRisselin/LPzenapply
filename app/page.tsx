import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
    </div>
  );
}
