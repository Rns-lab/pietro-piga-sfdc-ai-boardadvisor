import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building2, Bot, BrainCircuit, Briefcase, Network, Search, Users, Zap, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectScenarios = () => {
  const videos = [
    {
      id: 9,
      title: "AI-Powered Sales Automation",
      description: "Comprehensive AI sales solution demonstrating advanced automation capabilities",
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 mb-2" />,
      embedUrl: "https://share.descript.com/embed/pQYEh4a2NxR"
    },
    {
      id: 8,
      title: "Salesforce AI Innovation",
      description: "Latest insights and innovations in Salesforce AI technology",
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 mb-2" />,
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7249394123458105344"
    },
    {
      id: 7,
      title: "HR People Finder",
      description: "Find the perfect person for any task with AI-powered talent matching",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 mb-2" />,
      embedUrl: "https://share.descript.com/embed/2F96vlge5Rm"
    },
    {
      id: 6,
      title: "News-Based Lead Discovery",
      description: "Agent searching for leads by analyzing daily news sources",
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 mb-2" />,
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297585359138250753?compact=1"
    },
    {
      id: 5,
      title: "AI Lead Generation & Enrichment",
      description: "Extract leads from news sources and enrich them with LinkedIn data",
      icon: <Network className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 mb-2" />,
      embedUrl: "https://share.descript.com/embed/O2gC7FoeSzO"
    },
    {
      id: 4,
      title: "AI Customer Service Enhancement",
      description: "Discover how AI revolutionizes customer service interactions",
      icon: <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 mb-2" />,
      embedUrl: "https://share.descript.com/embed/d6odQh44Z6n"
    },
    {
      id: 3,
      title: "Intelligent Data Analysis",
      description: "Watch AI transform complex data into actionable insights",
      icon: <BrainCircuit className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 mb-2" />,
      embedUrl: "https://www.loom.com/embed/f513a9fbab8e4622b7bfa6873d910124"
    },
    {
      id: 2,
      title: "Smart Contract Management",
      description: "See how AI streamlines contract review and management processes",
      icon: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 mb-2" />,
      embedUrl: "https://www.loom.com/embed/16880e17ad9c45c8a66cb5b4536dfd12"
    },
    {
      id: 1,
      title: "AI-Powered Real Estate Assistant",
      description: "Experience how AI transforms luxury real estate operations with personalized property matching",
      icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 mb-2" />,
      url: "/scenarios/real-estate",
      embedUrl: "https://www.loom.com/embed/f59567f25401489aa6a794507b328e69"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-8">
            AI Demos
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Explore detailed AI implementation scenarios across different industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {videos.map((video) => (
            <div key={video.id} className="transform transition-all hover:scale-105">
              {video.url ? (
                <Link to={video.url}>
                  <Card className="h-full border-slate-200 hover:border-slate-300 transition-colors bg-slate-50">
                    <CardHeader className="space-y-2 pb-4 p-4 sm:p-6">
                      {video.icon}
                      <CardTitle className="text-base sm:text-lg text-slate-900">{video.title}</CardTitle>
                      <CardDescription className="text-sm text-slate-600">{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <div className="aspect-video rounded-lg overflow-hidden border border-slate-200">
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
                <Card className="h-full border-slate-200 hover:border-slate-300 transition-colors bg-slate-50">
                  <CardHeader className="space-y-2 pb-4 p-4 sm:p-6">
                    {video.icon}
                    <CardTitle className="text-base sm:text-lg text-slate-900">{video.title}</CardTitle>
                    <CardDescription className="text-sm text-slate-600">{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="aspect-video rounded-lg overflow-hidden border border-slate-200">
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
