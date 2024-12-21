import { MessageSquare, TrendingUp, Brain, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

export const SocialHighlights = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Data-Driven Innovation & AI Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-4">
              <Brain className="w-6 h-6 text-sf-blue flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Salesforce Innovation</h3>
                <p className="text-gray-600 text-sm">
                  "Exploring the future of Salesforce with AI integration at #AgenforceworldTour. 
                  Discover how artificial intelligence and machine learning are transforming enterprise 
                  CRM implementations and driving business value..."
                </p>
                <a 
                  href="https://www.linkedin.com/posts/pietro-piga-pm_agenforceworldtour-salesforce-dreamforce2024-activity-7265659914784555010-3TVx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sf-blue hover:text-sf-navy mt-4 inline-block text-sm font-medium"
                >
                  Read about AI Innovation →
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-4">
              <Database className="w-6 h-6 text-sf-blue flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Data-Driven Process Optimization</h3>
                <p className="text-gray-600 text-sm">
                  "Revolutionizing Salesforce training with interactive tutorials and data-driven 
                  learning paths. See how structured processes and AI-enhanced documentation are 
                  transforming enterprise adoption..."
                </p>
                <a 
                  href="https://www.linkedin.com/posts/pietro-piga-pm_salesforcetips-interactivetutorials-iorad-activity-7264562812339802112-wCUy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sf-blue hover:text-sf-navy mt-4 inline-block text-sm font-medium"
                >
                  Explore Process Innovation →
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-4">
              <TrendingUp className="w-6 h-6 text-sf-blue flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Enhanced Sales Performance</h3>
                <p className="text-gray-600 text-sm">
                  "Leveraging artificial intelligence and machine learning to optimize sales 
                  incentives (SPIFF). Discover how data analytics and AI are driving measurable 
                  improvements in sales performance..."
                </p>
                <a 
                  href="https://www.linkedin.com/posts/pietro-piga-pm_salesforce-spiff-sales-activity-7256924241604841472-iKRM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sf-blue hover:text-sf-navy mt-4 inline-block text-sm font-medium"
                >
                  Learn About AI in Sales →
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};