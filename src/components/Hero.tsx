
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
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
                Executive • Senior • Strategic
              </div>
              
              {/* Main Headlines */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight">
                  AI Transformation<br />
                  Leader
                </h1>
                <div className="w-16 h-1 bg-slate-900"></div>
                <h2 className="text-2xl lg:text-3xl text-slate-600 font-normal leading-relaxed">
                  Enterprise Strategy · Salesforce · Cross-Vendor AI
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  Driving enterprise transformation across 
                  <span className="text-slate-900 font-medium"> 50+ countries</span>, 
                  leading cross-vendor teams with IBM and delivering 
                  <span className="text-slate-900 font-medium"> measurable business outcomes </span> 
                  through AI-native strategies and advanced platform architecture.
                </p>
              </div>
              
              {/* Trust Metrics */}
              <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-slate-200">
                <div className="space-y-1">
                  <div className="text-3xl lg:text-4xl font-semibold text-slate-900">50+</div>
                  <div className="text-sm text-slate-500 font-medium">Countries Impacted</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl lg:text-4xl font-semibold text-slate-900">12x</div>
                  <div className="text-sm text-slate-500 font-medium">Certified Expert</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl lg:text-4xl font-semibold text-slate-900">30%+</div>
                  <div className="text-sm text-slate-500 font-medium">Support Reduction</div>
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
            
            {/* Right Content - Photo + Case Study */}
            <div className="relative lg:pl-8 space-y-6">
              <div className="relative">
                <div className="w-full max-w-96 h-[420px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50">
                  <img 
                    src="/lovable-uploads/76dc5bdd-db62-41a3-8777-1e3a7bcb34ee.png" 
                    alt="Pietro Piga - AI Transformation Leader" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Floating Achievement Card */}
                <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 text-slate-900 rounded-xl p-6 shadow-lg max-w-xs">
                  <div className="space-y-2">
                    <div className="font-bold text-sm">Enterprise Transformation Leader</div>
                    <div className="text-slate-600 text-xs">Cross-vendor AI · IBM · ABB</div>
                    <div className="text-slate-500 text-xs">Strategic Architecture Specialist</div>
                  </div>
                </div>
              </div>

              {/* Case Study Cards */}
              <div className="space-y-4 max-w-96 mx-auto">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Case Study #1</div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-medium text-slate-500">Problem</div>
                        <div className="text-sm text-slate-700">High volume of internal support requests draining team productivity</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-medium text-slate-500">Solution</div>
                        <div className="text-sm text-slate-700">Designed & deployed a Teams/SharePoint AI Agent available everywhere — including directly inside Microsoft Teams chat, so users get answers without leaving their calls</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-medium text-slate-500">Result</div>
                        <div className="text-sm text-slate-900 font-semibold">30%+ reduction in internal support requests with zero-cost automation</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Case Study #2</div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-medium text-slate-500">Problem</div>
                        <div className="text-sm text-slate-700">No visibility on feature adoption — releases shipped without measurable impact tracking</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-medium text-slate-500">Solution</div>
                        <div className="text-sm text-slate-700">Built a highly detailed analytics dashboard based on event logs to measure adoption of every feature released on the system</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-medium text-slate-500">Result</div>
                        <div className="text-sm text-slate-900 font-semibold">Data-driven release strategy with full feature adoption visibility across the enterprise</div>
                      </div>
                    </div>
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
