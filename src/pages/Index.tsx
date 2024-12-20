import { Hero } from "@/components/Hero";
import { Achievements } from "@/components/Achievements";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Achievements />
      <ContactForm />
    </div>
  );
};

export default Index;