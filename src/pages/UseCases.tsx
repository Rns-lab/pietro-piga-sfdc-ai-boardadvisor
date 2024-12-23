import { Brain, Lightbulb, Timer, Search } from "lucide-react";
import { Card } from "@/components/ui/card";

const UseCases = () => {
  const cases = [
    {
      title: "Dynamic Metadata Interface",
      context: "Users needed to view and interact with metadata records stored in a custom object. The requirement was to provide an intuitive way to access and search metadata without overloading the Salesforce interface with additional custom objects.",
      painPoint: "Creating a separate custom UI for metadata display would add unnecessary complexity. Users required dynamic, searchable tables to interact with metadata directly in Salesforce.",
      innovation: "Instead of building a new UI, I added a table directly to the utility bar using Flow. This table dynamically displays records based on the user accessing the component. Additionally, users can perform custom searches to find metadata not linked directly to their profile (e.g., outside their country).",
      effort: "3 weeks",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Boosting User Adoption Through Micro-Learning",
      context: "The end users struggled to keep up with new features and changes during each sprint release. Despite regular training sessions, the material (PDFs, PowerPoints, and long videos) was often overlooked, resulting in poor adoption of the updates.",
      painPoint: "Users found traditional training methods time-consuming and hard to retain. Sprint releases often introduced features that went underutilized due to a lack of real-time understanding.",
      innovation: "I implemented interactive tutorials using micro-learning techniques. Instead of delivering lengthy documents or videos, users now receive small, interactive learning modules at the moment of need. These quick, digestible tutorials guide them directly within Salesforce, reinforcing understanding on the spot.",
      effort: "2 weeks",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Enhancing Forecasting Without Customization",
      context: "The sales and delivery teams faced challenges in forecasting revenues and deliveries. Manual processes created bottlenecks and inconsistencies in opportunity tracking, which impacted strategic planning.",
      painPoint: "Forecasting was inconsistent and heavily reliant on manual data entry. There was a growing demand for a scalable, automated solution without heavy customization.",
      innovation: "I leveraged the Product Schedule feature native to Salesforce. By activating this standard feature, the team could forecast deliveries and revenues automatically for each closed opportunity. No custom development was necessary, providing a robust and scalable forecasting tool.",
      effort: "1 week",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
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

        <div className="space-y-8">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;