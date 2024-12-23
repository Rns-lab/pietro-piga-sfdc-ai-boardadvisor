import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Trophy } from "lucide-react";

const PodcastPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
          Salesforce Sidekicks Podcast
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Welcome to Salesforce Sidekicks – the first Italian podcast dedicated to Salesforce. 
          Co-hosted with Enrico Murru (Salesforce MVP), we explore the latest trends, host 
          industry experts, and conduct live demos, bringing the entire community closer to 
          the evolving Salesforce ecosystem.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <Card className="p-6 h-full">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Latest Episode</h2>
              <iframe 
                src="https://open.spotify.com/embed/show/19B6yMqV2ZdULn0XgJLGVm" 
                width="100%" 
                height="352" 
                allow="encrypted-media"
                className="rounded-lg mb-6"
              ></iframe>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open('https://www.linkedin.com/company/salesforce-sidekicks-podcast/', '_blank')}
                  className="bg-sf-blue hover:bg-sf-navy transition-all duration-300"
                >
                  Follow us on LinkedIn <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  onClick={() => window.open('https://open.spotify.com/show/19B6yMqV2ZdULn0XgJLGVm', '_blank')}
                  variant="outline"
                  className="border-sf-blue text-sf-blue hover:bg-sf-blue hover:text-white transition-all duration-300"
                >
                  Listen on Spotify <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 h-full">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Latest Achievement</h2>
              <div className="space-y-6">
                <img 
                  src="/lovable-uploads/509439d2-3a21-43c8-9681-b16c20f2a827.png"
                  alt="Salesforce Radio at World Tour 2024"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-600">
                  Featured on Salesforce Radio during the Salesforce World Tour 2024, discussing 
                  innovation and the future of the Salesforce ecosystem.
                </p>
                <div className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 text-sf-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Salesforce World Tour 2024</h3>
                    <p className="text-gray-600">
                      Invited as a featured speaker to share insights and experiences with the 
                      global Salesforce community.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;