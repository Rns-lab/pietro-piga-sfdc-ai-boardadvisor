import { Hero } from "@/components/Hero";
import { Achievements } from "@/components/Achievements";
import { PodcastSection } from "@/components/PodcastSection";
import { SocialHighlights } from "@/components/SocialHighlights";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Achievements />
      <PodcastSection />
      <SocialHighlights />
      <ContactForm />
    </div>
  );
};

export default Index;