
import { Hero } from "@/components/Hero";
import { CredibilityWall } from "@/components/CredibilityWall";
import { RecentMilestone } from "@/components/RecentMilestone";
import { FeaturedDemo } from "@/components/FeaturedDemo";
import { PremiumServices } from "@/components/PremiumServices";
import { SalesforceExpertise } from "@/components/SalesforceExpertise";
import { InteractiveCVSection } from "@/components/InteractiveCVSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <RecentMilestone />
      <CredibilityWall />
      <SalesforceExpertise />
      <InteractiveCVSection />
      <FeaturedDemo />
      <PremiumServices />
    </div>
  );
};

export default Index;
