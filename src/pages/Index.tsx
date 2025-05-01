
import { Hero } from "@/components/Hero";
import { Achievements } from "@/components/Achievements";
import { PodcastSection } from "@/components/PodcastSection";
import { SocialHighlights } from "@/components/SocialHighlights";
import { AgentforceArticle } from "@/components/AgentforceArticle";
import { SalesforceGPT } from "@/components/SalesforceGPT";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-100 py-2 px-4 text-center text-blue-800 font-medium">
        Site updated: {new Date().toLocaleString()}
      </div>
      <Hero />
      <Achievements />
      <AgentforceArticle />
      <SalesforceGPT />
      <PodcastSection />
      <SocialHighlights />
    </div>
  );
};

export default Index;
