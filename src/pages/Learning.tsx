import { Card } from "@/components/ui/card";
import { Headphones, Book, Wrench, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Learning = () => {
  const sections = [
    {
      title: "Podcasts I Listen To",
      icon: <Headphones className="w-8 h-8 text-sf-blue" />,
      items: [
        {
          name: "Modern Wisdom",
          description: "Hosted by Chris Williamson, this podcast explores topics ranging from philosophy to fitness.",
          link: "https://open.spotify.com/show/0XrOqvxlqQI6bmdYHuIVnr"
        },
        {
          name: "The Diary of a CEO",
          description: "Steven Bartlett interviews successful entrepreneurs and thinkers, delving into their journeys and insights.",
          link: "https://open.spotify.com/show/7iQXmUT7XGuZSzAMjoNWlX"
        },
        {
          name: "The Mel Robbins Podcast",
          description: "Mel Robbins shares practical advice on mindset, productivity, and personal growth.",
          link: "https://open.spotify.com/show/7vz4RYsD5MulTCrcH478t1"
        },
      ],
    },
    {
      title: "Books I Read",
      icon: <Book className="w-8 h-8 text-sf-purple" />,
      items: [
        {
          name: "Atomic Habits by James Clear",
          description: "An insightful guide on building good habits and breaking bad ones.",
        },
        {
          name: "Thinking, Fast and Slow by Daniel Kahneman",
          description: "A deep dive into the dual systems that drive the way we think.",
        },
        {
          name: "The Lean Startup by Eric Ries",
          description: "A methodology for developing businesses and products.",
        },
      ],
      footer: "*Shortlist"
    },
    {
      title: "Tools I'm Learning",
      icon: <Wrench className="w-8 h-8 text-sf-navy" />,
      items: [
        {
          name: "Make",
          description: "A powerful platform for automating workflows across different apps and services. Create complex automations with a visual, no-code interface.",
          link: "https://www.make.com/en"
        },
        {
          name: "Relevance AI",
          description: "A tool for building and deploying AI models to automate and enhance business processes.",
        },
        {
          name: "Cursor AI",
          description: "An AI-powered coding assistant designed to streamline and accelerate software development.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          My Learning Journey
        </h1>
        
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div key={index} className="space-y-8">
              <div className="flex items-center gap-4 justify-center">
                {section.icon}
                <h2 className="text-3xl font-bold gradient-text">{section.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-semibold mb-3 text-sf-navy">{item.name}</h3>
                      <p className="text-gray-600 flex-grow">{item.description}</p>
                      {item.link && (
                        <Button 
                          variant="ghost" 
                          className="mt-4 text-sf-blue hover:text-sf-navy"
                          onClick={() => window.open(item.link, '_blank')}
                        >
                          Listen <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
              {section.footer && (
                <p className="text-center text-gray-500 italic mt-2">{section.footer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learning;