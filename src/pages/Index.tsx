
import { Hero } from "@/components/Hero";
import { CredibilityWall } from "@/components/CredibilityWall";
import { RecentMilestone } from "@/components/RecentMilestone";
import { FeaturedDemo } from "@/components/FeaturedDemo";
import { PremiumServices } from "@/components/PremiumServices";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <RecentMilestone />
      <CredibilityWall />
      <FeaturedDemo />
      <PremiumServices />
    </div>
  );
};

export default Index;
