
import { Star, Quote, Award, TrendingUp, Users, Building, Shield, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const clientLogos = [
  { name: "Fortune 500 Tech", icon: Building },
  { name: "Global Manufacturing", icon: TrendingUp },
  { name: "Financial Services", icon: Shield },
  { name: "Enterprise SaaS", icon: Zap },
];

const achievements = [
  "20+ years transforming enterprises",
  "Ex-Salesforce Advisor", 
  "AI-native strategist",
  "€50M+ client value generated"
];

export const CredibilityWall = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Power Quote */}
        <div className="text-center mb-16">
          <Card className="max-w-4xl mx-auto p-12 shadow-xl border-0 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
            <Quote className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-light italic leading-relaxed mb-8 font-serif">
              "Pietro's AI integration strategy transformed our entire sales operation. 
              His strategic thinking and execution capabilities are simply world-class."
            </blockquote>
            <div className="space-y-2">
              <div className="text-lg font-medium text-amber-400">Sarah Chen</div>
              <div className="text-neutral-300">Chief Revenue Officer, Fortune 500 Enterprise</div>
            </div>
          </Card>
        </div>

        {/* Achievement Facts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <p className="text-neutral-900 font-medium text-sm leading-tight">{achievement}</p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="border-t border-neutral-200 pt-12">
          <h3 className="text-center text-neutral-600 text-sm uppercase tracking-wide mb-8 font-medium">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {clientLogos.map((client) => (
              <div key={client.name} className="flex flex-col items-center space-y-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <client.icon className="w-8 h-8 text-neutral-600" />
                <span className="text-xs text-neutral-500 font-medium text-center">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scarcity Element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-6 py-3 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 fill-current" />
            3 clients per quarter maximum • Currently booking Q3 2025
          </div>
        </div>
      </div>
    </section>
  );
};
