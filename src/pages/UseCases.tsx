import { Brain, Lightbulb, Timer, Search } from "lucide-react";
import { Card } from "@/components/ui/card";

const UseCases = () => {
  const case_ = {
    title: "Dynamic Metadata Interface",
    context: "Users needed to view and interact with metadata records stored in a custom object. The requirement was to provide an intuitive way to access and search metadata without overloading the Salesforce interface with additional custom objects.",
    painPoint: "Creating a separate custom UI for metadata display would add unnecessary complexity. Users required dynamic, searchable tables to interact with metadata directly in Salesforce.",
    innovation: "Instead of building a new UI, I added a table directly to the utility bar using Flow. This table dynamically displays records based on the user accessing the component. Additionally, users can perform custom searches to find metadata not linked directly to their profile (e.g., outside their country).",
    effort: "3 weeks",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  };

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

        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
                <Search className="w-6 h-6 text-sf-purple flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Pain Point</p>
                  <p className="text-gray-600">{case_.painPoint}</p>
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
      </div>
    </div>
  );
};

export default UseCases;