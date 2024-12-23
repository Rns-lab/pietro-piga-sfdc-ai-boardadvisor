import { Hero } from "@/components/Hero";
import { Achievements } from "@/components/Achievements";
import { PodcastSection } from "@/components/PodcastSection";
import { SocialHighlights } from "@/components/SocialHighlights";
import { LeadForm } from "@/components/LeadForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Achievements />
      <PodcastSection />
      <SocialHighlights />
      <LeadForm />
    </div>
  );
};

export default Index;