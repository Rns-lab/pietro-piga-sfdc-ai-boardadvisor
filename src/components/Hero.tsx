import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-float">
          Driving Innovation in Salesforce Projects
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          5 years of expertise • 12 certifications • First Italian Salesforce Podcast
        </p>
        <Button
          className="text-lg px-8 py-6 bg-sf-blue hover:bg-sf-navy transition-all duration-300"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Let's Connect <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};