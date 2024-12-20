import { MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

export const SocialHighlights = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Featured LinkedIn Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-4">
              <MessageSquare className="w-6 h-6 text-sf-blue flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Latest Insights</h3>
                <p className="text-gray-600 text-sm">
                  "Excited to share my latest thoughts on Salesforce project management best practices 
                  and how to drive innovation in enterprise implementations..."
                </p>
                <a 
                  href="https://www.linkedin.com/in/pietro-piga-pm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sf-blue hover:text-sf-navy mt-4 inline-block text-sm font-medium"
                >
                  Read more on LinkedIn →
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};