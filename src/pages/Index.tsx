
import { Hero } from "@/components/Hero";
import { CredibilityWall } from "@/components/CredibilityWall";
import { RecentMilestone } from "@/components/RecentMilestone";
import { FeaturedDemo } from "@/components/FeaturedDemo";
import { PremiumServices } from "@/components/PremiumServices";
import { SalesforceExpertise } from "@/components/SalesforceExpertise";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <RecentMilestone />
      <CredibilityWall />
      <SalesforceExpertise />
      <FeaturedDemo />
      <PremiumServices />
    </div>
  );
};

export default Index;
