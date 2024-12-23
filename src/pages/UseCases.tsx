import { Brain, Lightbulb, Timer } from "lucide-react";
import { Card } from "@/components/ui/card";

const UseCases = () => {
  const cases = [
    {
      title: "AI-Powered Sales Optimization",
      context: "Global sales team struggling with lead prioritization",
      painPoint: "Manual lead scoring causing missed opportunities",
      innovation: "Implemented Einstein Lead Scoring with custom ML models",
      effort: "3 months",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Process Automation Revolution",
      context: "Manufacturing client with complex approval chains",
      painPoint: "Delayed decisions impacting production timeline",
      innovation: "Custom Flow builder with predictive approvals",
      effort: "4 months",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
          From Problems to Innovation
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Each use case isn't just a hurdle to overcome – it's an opportunity to unlock 
          innovation and drive business transformation. I approach every project with fresh eyes, 
          focusing on redefining strategies rather than just resolving issues.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={case_.image}
                alt={case_.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">{case_.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Brain className="w-6 h-6 text-sf-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Context</p>
                      <p className="text-gray-600">{case_.context}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-sf-purple flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Innovation</p>
                      <p className="text-gray-600">{case_.innovation}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Timer className="w-6 h-6 text-sf-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Effort</p>
                      <p className="text-gray-600">{case_.effort}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;