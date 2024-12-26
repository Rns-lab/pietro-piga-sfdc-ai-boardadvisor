import { Brain, Lightbulb, Timer, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const UseCases = () => {
  const cases = [
    {
      title: "Dynamic Metadata Interface",
      context: "Users needed to view and interact with metadata records stored in a custom object. The requirement was to provide an intuitive way to access and search metadata without overloading the Salesforce interface with additional custom objects.",
      painPoint: "Creating a separate custom UI for metadata display would add unnecessary complexity. Users required dynamic, searchable tables to interact with metadata directly in Salesforce.",
      innovation: "Instead of building a new UI, I added a table directly to the utility bar using Flow. This table dynamically displays records based on the user accessing the component. Additionally, users can perform custom searches to find metadata not linked directly to their profile (e.g., outside their country).",
      effort: "3 weeks",
      images: ["/lovable-uploads/509439d2-3a21-43c8-9681-b16c20f2a827.png", "/lovable-uploads/1c1877c4-9a43-499b-970f-693c8a881779.png"],
    },
    {
      title: "Boosting User Adoption Through Micro-Learning",
      context: "The end users struggled to keep up with new features and changes during each sprint release. Despite regular training sessions, the material (PDFs, PowerPoints, and long videos) was often overlooked, resulting in poor adoption of the updates.",
      painPoint: "Users found traditional training methods time-consuming and hard to retain. Sprint releases often introduced features that went underutilized due to a lack of real-time understanding.",
      innovation: "I implemented interactive tutorials using micro-learning techniques. Instead of delivering lengthy documents or videos, users now receive small, interactive learning modules at the moment of need. These quick, digestible tutorials guide them directly within Salesforce, reinforcing understanding on the spot.",
      effort: "2 weeks",
      image: "/lovable-uploads/6ebe36cf-d201-4bf5-87fc-838b82308018.png",
    },
    {
      title: "Enhancing Forecasting Without Customization",
      context: "The sales and delivery teams faced challenges in forecasting revenues and deliveries. Manual processes created bottlenecks and inconsistencies in opportunity tracking, which impacted strategic planning.",
      painPoint: "Forecasting was inconsistent and heavily reliant on manual data entry. There was a growing demand for a scalable, automated solution without heavy customization.",
      innovation: "I leveraged the Product Schedule feature native to Salesforce. By activating this standard feature, the team could forecast deliveries and revenues automatically for each closed opportunity. No custom development was necessary, providing a robust and scalable forecasting tool.",
      effort: "1 week",
      images: ["/lovable-uploads/509439d2-3a21-43c8-9681-b16c20f2a827.png", "/lovable-uploads/1c1877c4-9a43-499b-970f-693c8a881779.png"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
          From Problems to Innovation
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Each use case represents a journey from challenge to solution, showcasing innovative approaches to real business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col bg-white/80 backdrop-blur-sm">
              <div className="relative h-48 overflow-hidden">
                {Array.isArray(case_.images) ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {case_.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <img
                            src={image}
                            alt={`${case_.title} - Image ${imgIndex + 1}`}
                            className="w-full h-48 object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                ) : (
                  <img
                    src={case_.image}
                    alt={case_.title}
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-4 gradient-text">{case_.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-sf-blue flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-600">{case_.context}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-sf-purple flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-600">{case_.painPoint}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-sf-purple flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-600">{case_.innovation}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Timer className="w-5 h-5 text-sf-navy flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-600">Effort: {case_.effort}</p>
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