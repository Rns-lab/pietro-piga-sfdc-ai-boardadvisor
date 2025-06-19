
import { Brain, Database, Users, ArrowRight, Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "AI System Design",
    description: "Strategic AI integration and automation roadmaps for enterprise transformation",
    features: ["AI Strategy & Roadmap", "Custom Solution Architecture", "ROI Optimization"],
    pricing: "from €5k/day"
  },
  {
    icon: Database,
    title: "Salesforce Architecture",
    description: "Enterprise-grade platform design and implementation for complex organizations",
    features: ["Platform Architecture", "Advanced Integrations", "Scalability Planning"],
    pricing: "from €4k/day"
  },
  {
    icon: Users,
    title: "Executive Advisory",
    description: "Board-level strategic consulting for digital transformation initiatives",
    features: ["Strategic Planning", "Change Leadership", "Performance Analytics"],
    pricing: "from €7k/day"
  }
];

export const PremiumServices = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-light font-serif">
            Premium <span className="font-medium">Consulting Services</span>
          </h2>
          <p className="text-xl text-neutral-300 font-light max-w-3xl mx-auto leading-relaxed">
            Exclusive advisory services for enterprises ready to transform through 
            AI and advanced Salesforce strategies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className="bg-neutral-800/50 border-neutral-700 p-8 hover:bg-neutral-800/70 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-3 font-serif">{service.title}</h3>
                    <p className="text-neutral-300 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-neutral-700 pt-6">
                  <div className="text-2xl font-light text-amber-400 mb-4">{service.pricing}</div>
                  <Button 
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-900 py-3 text-base font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Discuss This Service
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-center text-neutral-900">
          <div className="max-w-3xl mx-auto space-y-6">
            <Zap className="w-16 h-16 text-neutral-900 mx-auto opacity-80" />
            <h3 className="text-3xl lg:text-4xl font-light font-serif">
              Apply for <span className="font-medium">Advisory Access</span>
            </h3>
            <p className="text-xl text-neutral-800 font-light leading-relaxed">
              Exclusive consulting for enterprises serious about AI transformation 
              and strategic Salesforce implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-neutral-900 text-white hover:bg-neutral-800 px-8 py-4 text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply for Access <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-neutral-700 font-medium">
                Currently booking Q3 2025 • 3 clients per quarter maximum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
