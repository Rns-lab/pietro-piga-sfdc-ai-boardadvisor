
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative">
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 lg:pr-12">
              {/* Authority Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                Independent • Senior • Strategic
              </div>
              
              {/* Main Headlines */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight">
                  Global AI &<br />
                  Salesforce<br />
                  Strategist
                </h1>
                <div className="w-16 h-1 bg-slate-900"></div>
                <h2 className="text-2xl lg:text-3xl text-slate-600 font-normal leading-relaxed">
                  For Enterprise Transformation
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  Independent advisor specializing in enterprise transformation through 
                  <span className="text-slate-900 font-medium"> AI-native strategies </span> 
                  and sophisticated Salesforce architecture.
                </p>
              </div>
              
              {/* Trust Metrics - Simplified and Verified */}
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-b border-slate-200">
                <div className="space-y-1">
                  <div className="text-3xl lg:text-4xl font-semibold text-slate-900">Enterprise</div>
                  <div className="text-sm text-slate-500 font-medium">Transformation Focus</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl lg:text-4xl font-semibold text-slate-900">12x</div>
                  <div className="text-sm text-slate-500 font-medium">Certified Expert</div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
            <a 
              href="http://linkedin.com/in/pietro-piga-tech" 
              target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-base font-medium rounded-lg btn-hover"
                  >
                    View Professional Profile <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Right Content - Professional Photo */}
            <div className="relative lg:pl-8">
              <div className="relative">
                <div className="w-full max-w-96 h-[480px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50">
                  <img 
                    src="/lovable-uploads/76dc5bdd-db62-41a3-8777-1e3a7bcb34ee.png" 
                    alt="Pietro Piga - Global AI & Salesforce Strategist" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Floating Achievement Card */}
                <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 text-slate-900 rounded-xl p-6 shadow-lg max-w-xs">
                  <div className="space-y-2">
                    <div className="font-bold text-sm">Enterprise Transformation Leader</div>
                    <div className="text-slate-600 text-xs">Relevance AI Sales Solutions Expert</div>
                    <div className="text-slate-500 text-xs">Strategic Architecture Specialist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
