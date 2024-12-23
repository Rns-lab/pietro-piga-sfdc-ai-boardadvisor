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
              <div className="flex gap-4">
                <Button 
                  onClick={() => window.open('https://open.spotify.com/show/19B6yMqV2ZdULn0XgJLGVm', '_blank')}
                  className="bg-sf-blue hover:bg-sf-navy transition-all duration-300"
                >
                  Listen Now <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 h-full">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Achievements</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 text-sf-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Salesforce World Tour 2024</h3>
                    <p className="text-gray-600">
                      Invited to the official Salesforce World Tour 2024 in Milan as featured speakers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 text-sf-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Community Impact</h3>
                    <p className="text-gray-600">
                      Building bridges between Italian Salesforce professionals and global best practices
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