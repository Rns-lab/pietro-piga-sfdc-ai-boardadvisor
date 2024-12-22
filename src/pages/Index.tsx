import { Hero } from "@/components/Hero";
import { Achievements } from "@/components/Achievements";
import { PodcastSection } from "@/components/PodcastSection";
import { SocialHighlights } from "@/components/SocialHighlights";
import { ContactForm } from "@/components/ContactForm";
import { FloatingChat } from "@/components/FloatingChat";
import { LeadForm } from "@/components/LeadForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Achievements />
      <PodcastSection />
      <SocialHighlights />
      <ContactForm />
      <LeadForm />
      <FloatingChat />
    </div>
  );
};

export default Index;