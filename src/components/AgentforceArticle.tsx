import { ExternalLink, Play } from "lucide-react";
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Existing Article */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <div className="uppercase tracking-wide text-sm text-sf-blue font-semibold">Industry Interview</div>
            <h3 className="block mt-1 text-xl leading-tight font-bold text-gray-900">
              What Salesforce Professionals Really Think About Agentforce
            </h3>
            <p className="mt-4 text-gray-600 text-sm">
              I was recently interviewed by Salesforce Ben as an AI expert to share my perspective on Agentforce and how it's reshaping the Salesforce ecosystem.
            </p>
            <div className="mt-6">
              <Button 
                className="flex items-center" 
                onClick={() => window.open("https://www.salesforceben.com/heres-what-salesforce-professionals-really-think-about-agentforce/", "_blank")}
              >
                Read Article <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* New YouTube Video */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <div className="uppercase tracking-wide text-sm text-sf-purple font-semibold">Featured Quote</div>
            <h3 className="block mt-1 text-xl leading-tight font-bold text-gray-900">
              Quoted on the Ultimate Revolution in Salesforce Industry
            </h3>
            <p className="mt-4 text-gray-600 text-sm">
              I've been quoted by one of the most influential Salesforce blogs discussing the ultimate revolution happening in the Salesforce industry and its transformative impact.
            </p>
            <div className="mt-6">
              <Button 
                className="flex items-center bg-red-600 hover:bg-red-700" 
                onClick={() => window.open("https://www.youtube.com/watch?v=EhsPOL0WyZE&ab_chan", "_blank")}
              >
                Watch Video <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
