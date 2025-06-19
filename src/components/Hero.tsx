
import { ArrowRight, Star, Award, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
      {/* Spotlight effect behind portrait */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-radial from-amber-200/20 via-amber-100/10 to-transparent rounded-full blur-3xl transform -translate-y-1/2"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8 text-white">
              {/* Authority Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-100/10 border border-amber-200/20 text-amber-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                <Shield className="w-4 h-4 fill-current" />
                Independent • Senior • Strategic
              </div>
              
              {/* Main Headlines */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight">
                  <span className="block font-serif">Global AI &</span>
                  <span className="block font-serif font-medium">Salesforce</span>
                  <span className="block font-serif font-medium">Strategist</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                <h2 className="text-2xl lg:text-3xl text-neutral-300 font-light leading-relaxed">
                  For Enterprise Transformation
                </h2>
                <p className="text-lg lg:text-xl text-neutral-400 font-light leading-relaxed max-w-xl">
                  Independent advisor with 20+ years transforming Fortune 500 enterprises through 
                  <span className="text-white font-medium"> AI-native strategies</span> 
                  and sophisticated Salesforce architecture.
                </p>
              </div>
              
              {/* Trust Metrics */}
              <div className="grid grid-cols-3 gap-8 py-6 border-y border-neutral-700/50">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-light text-white">20+</div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wide">Years<br/>Enterprise Focus</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-light text-white">€50M+</div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wide">Client Value<br/>Generated</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-light text-white">12x</div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wide">Certified<br/>Expert</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-900 px-8 py-4 text-base font-medium rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Let's Talk Results <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-neutral-400 text-neutral-300 hover:bg-neutral-700 hover:text-white px-8 py-4 text-base font-medium rounded-lg transition-all duration-300 backdrop-blur-sm"
                >
                  View Case Studies
                </Button>
              </div>
              
              {/* Scarcity Indicator */}
              <div className="pt-6">
                <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-sm text-amber-400 font-medium mb-1">Exclusive Access</div>
                  <div className="text-sm text-neutral-300">3 clients per quarter maximum • Currently booking Q3 2025</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Professional Photo */}
            <div className="relative lg:pl-8">
              {/* Main Portrait */}
              <div className="relative">
                <div className="w-80 h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-neutral-700/50">
                  <img 
                    src="/lovable-uploads/76dc5bdd-db62-41a3-8777-1e3a7bcb34ee.png" 
                    alt="Pietro Piga - Global AI & Salesforce Strategist" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Floating Achievement Card */}
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 rounded-2xl p-6 shadow-2xl max-w-xs">
                  <div className="space-y-2">
                    <div className="font-semibold text-sm">Ex-Salesforce Advisor</div>
                    <div className="text-neutral-800 text-xs">AI-Native Strategist</div>
                    <div className="text-neutral-700 text-xs">Enterprise Transformation Leader</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -left-12 w-16 h-16 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
