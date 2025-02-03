import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building2, Bot, BrainCircuit, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectScenarios = () => {
  const videos = [
    {
      id: 1,
      title: "AI-Powered Real Estate Assistant",
      description: "Experience how AI transforms luxury real estate operations with personalized property matching",
      icon: <Building2 className="w-12 h-12 text-sf-blue mb-4" />,
      url: "/scenarios/real-estate",
      embedUrl: "https://www.loom.com/embed/f59567f25401489aa6a794507b328e69"
    },
    {
      id: 2,
      title: "Smart Contract Management",
      description: "See how AI streamlines contract review and management processes",
      icon: <Briefcase className="w-12 h-12 text-sf-blue mb-4" />,
      embedUrl: "https://www.loom.com/embed/16880e17ad9c45c8a66cb5b4536dfd12"
    },
    {
      id: 3,
      title: "Intelligent Data Analysis",
      description: "Watch AI transform complex data into actionable insights",
      icon: <BrainCircuit className="w-12 h-12 text-sf-blue mb-4" />,
      embedUrl: "https://www.loom.com/embed/f513a9fbab8e4622b7bfa6873d910124"
    },
    {
      id: 4,
      title: "AI Customer Service Enhancement",
      description: "Discover how AI revolutionizes customer service interactions",
      icon: <Bot className="w-12 h-12 text-sf-blue mb-4" />,
      embedUrl: "https://share.descript.com/embed/d6odQh44Z6n"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">
          AI Use Case Demo
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Explore detailed AI implementation scenarios across different industries
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="transform transition-all hover:scale-105">
              {video.url ? (
                <Link to={video.url}>
                  <Card className="h-full">
                    <CardHeader>
                      {video.icon}
                      <CardTitle>{video.title}</CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <iframe
                          src={video.embedUrl}
                          frameBorder="0"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <Card className="h-full">
                  <CardHeader>
                    {video.icon}
                    <CardTitle>{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={video.embedUrl}
                        frameBorder="0"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectScenarios;