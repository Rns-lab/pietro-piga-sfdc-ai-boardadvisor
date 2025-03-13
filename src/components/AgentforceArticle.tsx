
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AgentforceArticle = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Featured Insights
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Expert opinions on the evolving Salesforce ecosystem and AI transformations
        </p>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto p-8 md:p-10">
          <div className="uppercase tracking-wide text-sm text-sf-blue font-semibold">Industry Interview</div>
          <h3 className="block mt-1 text-2xl leading-tight font-bold text-gray-900">
            What Salesforce Professionals Really Think About Agentforce
          </h3>
          <p className="mt-4 text-gray-600">
            I was recently interviewed by Salesforce Ben as an AI expert to share my perspective on Agentforce and how it's reshaping the Salesforce ecosystem. Learn about the practical implications, challenges, and opportunities that this AI advancement brings to Salesforce professionals.
          </p>
          <div className="mt-6">
            <Button 
              className="flex items-center" 
              onClick={() => window.open("https://www.salesforceben.com/heres-what-salesforce-professionals-really-think-about-agentforce/", "_blank")}
            >
              Read the Full Article <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
