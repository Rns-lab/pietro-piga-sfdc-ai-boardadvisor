import { Award, Star, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export const RecentMilestone = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Recent Milestone Achievement
          </div>
        </div>

        <Card className="relative overflow-hidden border border-blue-200/50 shadow-lg bg-white/80 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-purple-600/5"></div>
          <div className="relative p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              
              {/* Certificate Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src="/lovable-uploads/b593ad9d-a7b0-457d-b549-008eeda42a32.png" 
                    alt="Relevance AI Official Partner Certification" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-600">
                  <Award className="w-6 h-6" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Official Partnership</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                  Relevance AI Official Partner
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Selected as an <span className="font-semibold text-slate-900">Official Partner of Relevance AI</span>, 
                  marking a significant milestone in delivering cutting-edge AI solutions for enterprise transformation. 
                  This partnership enables access to advanced AI capabilities and exclusive resources for client success.
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>Strategic AI Partnership</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  <div className="text-sm text-slate-500">Enterprise Solutions Focus</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};