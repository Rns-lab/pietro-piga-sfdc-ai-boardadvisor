import { ArrowRight, CheckCircle, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PrometheiaOffer = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
            <Users className="w-4 h-4" />
            Elite PhD Research Team
          </div>
        </div>

        {/* Main Headline - Problem Aware */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          Stop Missing Hidden Opportunities <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            in Your Business
          </span>
        </h2>

        {/* Subheadline - Solution */}
        <p className="text-xl sm:text-2xl text-slate-300 text-center mb-12 max-w-3xl mx-auto font-medium">
          5 PhD Researchers Will Find What You're Overlooking — 
          <span className="text-white font-bold"> Then Test It For FREE</span>
        </p>

        {/* Value Stack */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
          {[
            "Uncover hidden revenue opportunities your competitors miss",
            "Get research-backed strategies (PhD-level analysis)",
            "Test solutions risk-free before you invest a single dollar",
            "No commitment, no credit card, no catch"
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-200 text-base">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a 
            href="https://prometheia.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-6 h-auto shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Discover Your Hidden Opportunities (100% Free)
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
          
          {/* Trust Line */}
          <p className="text-slate-400 text-sm mt-4">
            Takes 2 minutes • No signup required • Instant insights
          </p>
        </div>

        {/* Social Proof Element */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-slate-900"></div>
              ))}
            </div>
            <span>Join innovators discovering what others miss</span>
          </div>
        </div>
      </div>
    </section>
  );
};
