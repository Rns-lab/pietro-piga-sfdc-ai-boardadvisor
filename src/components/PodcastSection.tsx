import { Headphones, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const PodcastSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Salesforce Sidekicks Podcast
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Headphones className="w-8 h-8 text-sf-blue" />
                <h3 className="text-2xl font-semibold">Latest Episode</h3>
              </div>
              <iframe 
                src="https://open.spotify.com/embed/show/19B6yMqV2ZdULn0XgJLGVm" 
                width="100%" 
                height="352" 
                allow="encrypted-media"
                className="rounded-lg"
              ></iframe>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">About the Podcast</h3>
              <p className="text-gray-600 mb-6">
                Join me on Salesforce Sidekicks, the first Italian Salesforce podcast where we discuss best practices, 
                share experiences, and explore the latest trends in the Salesforce ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open('https://salesforcesidekicks.org/', '_blank')}
                  className="bg-sf-blue hover:bg-sf-navy transition-all duration-300"
                >
                  Visit Website <ExternalLink className="ml-2 w-4 h-4" />
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
        </div>
      </div>
    </section>
  );
};