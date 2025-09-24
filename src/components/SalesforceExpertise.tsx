import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Video } from "lucide-react";

export const SalesforceExpertise = () => {
  const expertiseLinks = [
    {
      title: "Featured on Salesforce Ben YouTube",
      description: "Discussing AI innovations and implementation strategies in the Salesforce ecosystem",
      url: "https://www.youtube.com/watch?v=EhsPOL0WyZE",
      icon: <Video className="w-5 h-5" />,
      type: "video"
    },
    {
      title: "Salesforce Ben Article Feature",
      description: "What Salesforce Professionals Really Think About Agentforce - Expert insights and analysis",
      url: "https://www.salesforceben.com/heres-what-salesforce-professionals-really-think-about-agentforce/",
      icon: <Award className="w-5 h-5" />,
      type: "article"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Recognized Salesforce Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Featured insights and thought leadership in the Salesforce community
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {expertiseLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.type === 'video' ? 'Watch' : 'Read'}: ${item.title}`}
              className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded-lg"
            >
              <Card className="border-slate-200 group-hover:border-blue-300 transition-all hover:shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                        {item.type === 'video' ? 'Watch Video' : 'Read Article'}
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};