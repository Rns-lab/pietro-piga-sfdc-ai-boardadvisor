
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { ExecutiveServices } from "@/components/ExecutiveServices";
import { PodcastSection } from "@/components/PodcastSection";
import { AgentforceArticle } from "@/components/AgentforceArticle";
import { SalesforceGPT } from "@/components/SalesforceGPT";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <ExecutiveServices />
      <AgentforceArticle />
      <SalesforceGPT />
      <PodcastSection />
    </div>
  );
};

export default Index;
