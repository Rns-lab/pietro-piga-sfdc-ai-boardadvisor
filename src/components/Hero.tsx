
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      <div className="max-w-5xl mx-auto">
        {/* Profile Section with Enhanced Visibility */}
        <div className="mb-10">
          <div className="relative mx-auto mb-8 w-40 h-56 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-slate-200/50">
            <img 
              src="/lovable-uploads/53cf92eb-10a9-43dd-b824-95d3892af632.png" 
              alt="Pietro Piga - Senior Salesforce Expert" 
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle overlay for warmth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-3 text-sm text-slate-600 mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">12+ Years Experience</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">12x Certified</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">AI Strategic Advisor</span>
          </div>
        </div>

        {/* Headlines optimized for psychological impact */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="block text-slate-800 mb-2">Senior Salesforce Expert</span>
          <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-slate-700 bg-clip-text text-transparent">
            Driving Enterprise Innovation
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium max-w-4xl mx-auto leading-relaxed">
          Proven track record of delivering complex Salesforce transformations for Fortune 500 companies
        </p>
        
        <p className="text-lg text-slate-500 mb-10 max-w-3xl mx-auto">
          Strategic AI Advisor • Industry Pioneer • Podcast Host • Thought Leader
        </p>

        {/* Authority-building CTA */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="text-lg px-10 py-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
            onClick={() => window.open('https://www.salesforce.com/trailblazer/pietropiga', '_blank')}
          >
            View My Expert Profile <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Enhanced Podcast Section with Authority */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/6ebe36cf-d201-4bf5-87fc-838b82308018.png" 
              alt="Salesforce Sidekicks Podcast - Industry Leadership" 
              className="w-full h-64 md:h-80 object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="bg-white/10 backdrop-blur-md px-8 py-6 rounded-xl border border-white/20">
                <h3 className="text-white font-bold text-2xl md:text-3xl tracking-wide mb-2">
                  <span className="text-blue-300">Salesforce</span> 
                  <span className="text-white ml-2">Sidekicks</span>
                </h3>
                <p className="text-blue-100 text-base font-medium mb-3">
                  The First Italian Salesforce Podcast
                </p>
                <p className="text-white/80 text-sm max-w-md">
                  Leading industry conversations with top Salesforce professionals and innovators
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
