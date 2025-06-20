
import { Hero } from "@/components/Hero";
import { CredibilityWall } from "@/components/CredibilityWall";
import { FeaturedDemo } from "@/components/FeaturedDemo";
import { PremiumServices } from "@/components/PremiumServices";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CredibilityWall />
      <FeaturedDemo />
      <PremiumServices />
    </div>
  );
};

export default Index;
