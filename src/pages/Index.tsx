import { Hero } from "@/components/Hero";
import { Achievements } from "@/components/Achievements";
import { PodcastSection } from "@/components/PodcastSection";
import { SocialHighlights } from "@/components/SocialHighlights";
import { LeadForm } from "@/components/LeadForm";
import { Scenarios } from "@/components/Scenarios";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Achievements />
      <Scenarios />
      <PodcastSection />
      <SocialHighlights />
      <LeadForm />
    </div>
  );
};

export default Index;