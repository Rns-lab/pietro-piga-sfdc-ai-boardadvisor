
import { Brain, Database, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const expertise = [
  {
    icon: Brain,
    title: "AI System Design",
    description: "Strategic AI integration and automation roadmaps for enterprise transformation",
    features: ["AI Strategy & Roadmap", "Custom Solution Architecture", "ROI Optimization"],
  },
  {
    icon: Database,
    title: "Salesforce Architecture",
    description: "Enterprise-grade platform design and implementation for complex organizations",
    features: ["Platform Architecture", "Advanced Integrations", "Scalability Planning"],
  },
  {
    icon: Users,
    title: "Executive Advisory",
    description: "Strategic consulting for digital transformation initiatives",
    features: ["Strategic Planning", "Change Leadership", "Performance Analytics"],
  }
];

export const PremiumServices = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900">
            Expertise Areas
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Specialized knowledge in enterprise AI transformation and advanced Salesforce strategies.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {expertise.map((area) => (
            <Card key={area.title} className="bg-white border-slate-200 p-8 hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">{area.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{area.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {area.features.map((feature) => (
                    <div key={feature} className="text-sm text-slate-500">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-slate-900 rounded-2xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl lg:text-4xl font-semibold">
              Ready to Connect?
            </h3>
            <p className="text-xl text-slate-300 leading-relaxed">
              Let's discuss strategic opportunities in AI transformation 
              and enterprise Salesforce implementation.
            </p>
            <div className="pt-4">
              <a 
                href="https://www.linkedin.com/in/pietro-piga-pm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-base font-medium rounded-lg btn-hover"
                >
                  Connect on LinkedIn <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
