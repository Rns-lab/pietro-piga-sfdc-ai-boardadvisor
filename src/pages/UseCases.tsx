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
      title: "Product Schedule Feature Enhancement",
      context: "Sales teams needed a more efficient way to manage and forecast product deliveries and revenues. The challenge was to implement this without heavy customization.",
      painPoint: "Manual forecasting processes were creating bottlenecks and inconsistencies in opportunity tracking.",
      innovation: "Leveraged Salesforce's native Product Schedule feature, enabling automatic delivery and revenue forecasting for each closed opportunity. This provided a scalable solution without custom development.",
      effort: "1 week",
      images: [
        "/lovable-uploads/525710f6-1a3e-4ae9-8794-97f6fde9e191.png",
        "/lovable-uploads/706272ec-cd58-4c37-8a93-2ac9455ba562.png"
      ],
    },
    {
      title: "Interactive Tutorials with IoRad",
      context: "Users struggled to keep pace with new features and changes during sprint releases. Traditional training materials were often overlooked.",
      painPoint: "Long-format training materials (PDFs, PowerPoints, videos) weren't effective for quick feature adoption.",
      innovation: "Implemented interactive tutorials using IoRad tool, creating micro-learning experiences that guide users directly within Salesforce. This approach significantly improved feature adoption rates.",
      effort: "2 weeks",
      images: [
        "/lovable-uploads/72d115d4-41d2-4f03-9cfd-880c87b67b36.png",
        "/lovable-uploads/1d9754e4-d22a-4381-a719-79e847bfe1bf.png"
      ],
    },
    {
      title: "Dynamic Metadata Interface",
      context: "Users needed an intuitive way to view and interact with metadata records without overloading the Salesforce interface.",
      painPoint: "Accessing and searching metadata required a solution that wouldn't add unnecessary complexity to the system.",
      innovation: "Added a dynamic table to the utility bar using Flow, allowing users to view and search metadata records based on their profile, with additional search capabilities for records outside their default access.",
      effort: "3 weeks",
      images: [
        "/lovable-uploads/159d81f9-34e4-4ae6-b9b1-0210dc3cbe05.png"
      ],
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col bg-white/80 backdrop-blur-sm">
              <div className="relative h-48 overflow-hidden">
                {case_.images.length > 1 ? (
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
                    src={case_.images[0]}
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