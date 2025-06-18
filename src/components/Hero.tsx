
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-stone-50 to-neutral-100 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Executive Profile Section */}
        <div className="text-center mb-16">
          {/* Large, Prominent Profile Image */}
          <div className="relative mx-auto mb-12 w-48 h-64 rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/53cf92eb-10a9-43dd-b824-95d3892af632.png" 
              alt="Pietro Piga - Senior Salesforce Executive" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          </div>
          
          {/* Executive Credentials */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="bg-neutral-900 text-stone-100 px-4 py-2 text-sm font-medium tracking-wide uppercase">
                12+ Years Experience
              </span>
              <span className="bg-stone-800 text-stone-100 px-4 py-2 text-sm font-medium tracking-wide uppercase">
                12x Certified Expert
              </span>
              <span className="bg-neutral-700 text-stone-100 px-4 py-2 text-sm font-medium tracking-wide uppercase">
                AI Strategic Advisor
              </span>
            </div>
          </div>

          {/* Executive Headlines */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-light text-neutral-900 leading-none tracking-tight">
              Pietro Piga
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-normal text-neutral-700 mb-4 leading-relaxed">
                Senior Salesforce Architect & AI Innovation Leader
              </h2>
              
              <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-3xl mx-auto">
                Driving digital transformation for Fortune 500 enterprises through strategic Salesforce implementations and cutting-edge AI integration
              </p>
            </div>
          </div>

          {/* Executive Action */}
          <div className="mt-12">
            <Button
              size="lg"
              className="bg-neutral-900 hover:bg-black text-stone-100 px-12 py-4 text-base font-medium tracking-wide uppercase shadow-xl hover:shadow-2xl transition-all duration-300 rounded-none"
              onClick={() => window.open('https://www.salesforce.com/trailblazer/pietropiga', '_blank')}
            >
              View Executive Profile <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Podcast Authority Section */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-neutral-900 overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/6ebe36cf-d201-4bf5-87fc-838b82308018.png" 
              alt="Salesforce Sidekicks Podcast - Industry Authority" 
              className="w-full h-72 md:h-96 object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-start p-12 md:p-16">
              <div className="max-w-2xl">
                <div className="mb-4">
                  <span className="text-stone-300 text-sm font-medium tracking-widest uppercase">
                    Industry Pioneer
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-light text-stone-100 mb-4 leading-tight">
                  Salesforce Sidekicks
                </h3>
                <p className="text-lg text-stone-300 font-light leading-relaxed mb-2">
                  The First Italian Salesforce Podcast
                </p>
                <p className="text-stone-400 text-base leading-relaxed">
                  Leading strategic conversations with C-level executives and Salesforce innovators across Europe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
