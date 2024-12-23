import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Rocket } from "lucide-react";

const Learning = () => {
  const sidelearns = [
    {
      title: "AI-Driven Process Optimization",
      discovery: "Through collaboration with Einstein Analytics team",
      pursuit: "To enhance decision-making in complex Salesforce implementations",
      application: "Developing AI-powered workflow recommendations for enterprise clients",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Advanced Flow Automation",
      discovery: "During a challenging multi-org integration project",
      pursuit: "To streamline cross-org data synchronization",
      application: "Creating reusable flow templates for common integration patterns",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="w-full bg-sf-blue text-white py-3 text-center font-semibold">
        Building...
      </div>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
          SideLearn: Where Curiosity Meets Expertise
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Learning is not just a task – it's an exercise for the soul. I dive into new topics 
          that intrigue me, pushing boundaries to continuously evolve my skills. Every new tool 
          or concept I explore becomes a SideLearn – a journey into curiosity and growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sidelearns.map((learn, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={learn.image}
                alt={learn.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">{learn.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-sf-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Discovery</p>
                      <p className="text-gray-600">{learn.discovery}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-sf-purple flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Why I Pursued It</p>
                      <p className="text-gray-600">{learn.pursuit}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Rocket className="w-6 h-6 text-sf-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Application</p>
                      <p className="text-gray-600">{learn.application}</p>
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

export default Learning;