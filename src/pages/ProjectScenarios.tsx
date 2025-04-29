
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building2, Bot, BrainCircuit, Briefcase, Network, Search, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectScenarios = () => {
  const videos = [
    {
      id: 1,
      title: "AI-Powered Real Estate Assistant",
      description: "Experience how AI transforms luxury real estate operations with personalized property matching",
      icon: <Building2 className="w-8 h-8 text-sf-blue mb-2" />,
      url: "/scenarios/real-estate",
      embedUrl: "https://www.loom.com/embed/f59567f25401489aa6a794507b328e69"
    },
    {
      id: 2,
      title: "Smart Contract Management",
      description: "See how AI streamlines contract review and management processes",
      icon: <Briefcase className="w-8 h-8 text-sf-blue mb-2" />,
      embedUrl: "https://www.loom.com/embed/16880e17ad9c45c8a66cb5b4536dfd12"
    },
    {
      id: 3,
      title: "Intelligent Data Analysis",
      description: "Watch AI transform complex data into actionable insights",
      icon: <BrainCircuit className="w-8 h-8 text-sf-blue mb-2" />,
      embedUrl: "https://www.loom.com/embed/f513a9fbab8e4622b7bfa6873d910124"
    },
    {
      id: 4,
      title: "AI Customer Service Enhancement",
      description: "Discover how AI revolutionizes customer service interactions",
      icon: <Bot className="w-8 h-8 text-sf-blue mb-2" />,
      embedUrl: "https://share.descript.com/embed/d6odQh44Z6n"
    },
    {
      id: 5,
      title: "AI Lead Generation & Enrichment",
      description: "Extract leads from news sources and enrich them with LinkedIn data",
      icon: <Network className="w-8 h-8 text-sf-blue mb-2" />,
      embedUrl: "https://share.descript.com/embed/O2gC7FoeSzO"
    },
    {
      id: 6,
      title: "News-Based Lead Discovery",
      description: "Agent searching for leads by analyzing daily news sources",
      icon: <Search className="w-8 h-8 text-sf-blue mb-2" />,
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297585359138250753?compact=1"
    },
    {
      id: 7,
      title: "HR People Finder",
      description: "Find the perfect person for any task with AI-powered talent matching",
      icon: <Users className="w-8 h-8 text-sf-blue mb-2" />,
      embedUrl: "https://share.descript.com/embed/2F96vlge5Rm"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">
          AI Demos
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Explore detailed AI implementation scenarios across different industries
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="transform transition-all hover:scale-105">
              {video.url ? (
                <Link to={video.url}>
                  <Card className="h-full">
                    <CardHeader className="space-y-2 pb-4">
                      {video.icon}
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <CardDescription className="text-sm">{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <iframe
                          src={video.embedUrl}
                          frameBorder="0"
                          allowFullScreen
                          className="w-full h-full"
                          title={video.title}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <Card className="h-full">
                  <CardHeader className="space-y-2 pb-4">
                    {video.icon}
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <CardDescription className="text-sm">{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={video.embedUrl}
                        frameBorder="0"
                        allowFullScreen
                        className="w-full h-full"
                        title={video.title}
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
