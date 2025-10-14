import { ArrowRight, CheckCircle, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PrometheiaOffer = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-3 sm:px-4 lg:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            Elite PhD Research Team
          </div>
        </div>

        {/* Main Headline - Problem Aware */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mb-3 sm:mb-4 leading-tight">
          Stop Missing Hidden Opportunities <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            in Your Business
          </span>
        </h2>

        {/* Subheadline - Solution */}
        <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          5 PhD Researchers Will Find What You're Overlooking — 
          <span className="text-white font-bold"> Then Test It For FREE</span>
        </p>

        {/* Value Stack */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
          {[
            "Uncover hidden revenue opportunities your competitors miss",
            "Get research-backed strategies (PhD-level analysis)",
            "Test solutions risk-free before you invest a single dollar",
            "No commitment, no credit card, no catch"
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-200 text-sm sm:text-base leading-relaxed">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center px-2 sm:px-0">
          <a 
            href="https://prometheia.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm sm:text-base lg:text-lg px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 h-auto shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">Discover Your Hidden Opportunities (100% Free)</span>
              <span className="sm:hidden">Get Free Analysis Now</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </a>
          
          {/* Trust Line */}
          <p className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
            Takes 2 minutes <span className="hidden xs:inline">•</span><span className="xs:hidden"><br /></span> No signup required <span className="hidden xs:inline">•</span><span className="xs:hidden"><br /></span> Instant insights
          </p>
        </div>

        {/* Social Proof Element */}
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-slate-400 text-xs sm:text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-slate-900"></div>
              ))}
            </div>
            <span className="leading-relaxed">Join innovators discovering what others miss</span>
          </div>
        </div>
      </div>
    </section>
  );
};
