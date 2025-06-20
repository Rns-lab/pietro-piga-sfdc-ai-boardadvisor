
import { Star, Quote, Award, TrendingUp, Users, Building, Shield, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const clientLogos = [
  { name: "Fortune 500 Tech", icon: Building },
  { name: "Global Manufacturing", icon: TrendingUp },
  { name: "Financial Services", icon: Shield },
  { name: "Enterprise SaaS", icon: Zap },
];

const achievements = [
  "Enterprise Transformation Leader",
  "Relevance AI Sales Solutions Expert", 
  "Strategic Architecture Specialist",
  "Multi-Platform Integration Expert"
];

export const CredibilityWall = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Verified Testimonial */}
        <div className="text-center mb-12 sm:mb-16">
          <Card className="max-w-4xl mx-auto p-6 sm:p-12 shadow-lg border border-slate-200 testimonial-quote">
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-slate-400 mx-auto mb-4 sm:mb-6" />
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed mb-6 sm:mb-8 text-slate-700 italic">
              "Pietro has proven to be extremely competent, professional and reliable. 
              His approach to problem solving is methodical and solution-oriented."
            </blockquote>
            <div className="space-y-2">
              <div className="text-base sm:text-lg font-semibold text-slate-900">Verified Client Feedback</div>
              <div className="text-slate-600">Enterprise Implementation Project</div>
            </div>
          </Card>
        </div>

        {/* Achievement Facts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-100 border border-slate-200 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600" />
              </div>
              <p className="text-slate-700 font-medium text-xs sm:text-sm leading-tight px-2">
                {index === 0 ? (
                  <span className="font-bold">{achievement}</span>
                ) : index === 1 ? (
                  <span className="text-xs font-normal">{achievement}</span>
                ) : (
                  achievement
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="border-t border-slate-200 pt-8 sm:pt-12">
          <h3 className="text-center text-slate-500 text-sm font-medium mb-6 sm:mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {clientLogos.map((client) => (
              <div key={client.name} className="flex flex-col items-center space-y-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <client.icon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500" />
                <span className="text-xs text-slate-400 font-medium text-center">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Statement */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium">
            <Star className="w-4 h-4" />
            Certified Enterprise AI & Salesforce Excellence
          </div>
        </div>
      </div>
    </section>
  );
};
