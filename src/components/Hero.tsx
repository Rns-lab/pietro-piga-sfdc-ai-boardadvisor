import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Avatar className="w-32 h-32 mx-auto mb-6">
            <AvatarImage src="/lovable-uploads/1c1877c4-9a43-499b-970f-693c8a881779.png" alt="Profile" />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-float">
          Driving Innovation in Salesforce Projects
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Salesforce AI Strategic Advisor • 12x Certified • Italian Salesforce Podcast Host
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <Button
            className="text-lg px-8 py-6 bg-sf-blue hover:bg-sf-navy transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect <ArrowRight className="ml-2" />
          </Button>
          <Button
            variant="outline"
            className="text-lg px-8 py-6 border-sf-blue text-sf-blue hover:bg-sf-blue hover:text-white transition-all duration-300"
            onClick={() => window.open('https://www.salesforce.com/trailblazer/pietropiga', '_blank')}
          >
            View Trailblazer Profile <ArrowRight className="ml-2" />
          </Button>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <img 
            src="/lovable-uploads/6ebe36cf-d201-4bf5-87fc-838b82308018.png" 
            alt="Podcast Setup" 
            className="w-full rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-black/10 backdrop-blur-sm px-8 py-4 rounded-lg">
              <h3 className="text-white font-bold text-xl md:text-2xl tracking-wider">
                <span className="font-bold">Salesforce</span> 
                <span className="font-bold italic ml-2">Sidekicks</span>
              </h3>
              <p className="text-white/80 text-sm mt-1 font-light">
                The First Italian Salesforce Podcast
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};