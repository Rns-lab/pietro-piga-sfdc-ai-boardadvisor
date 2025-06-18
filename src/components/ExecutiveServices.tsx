
import { Brain, Database, Rocket, Users, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Implementation",
    description: "Transform your business operations with strategic AI integration and automation",
    features: ["AI Roadmap Development", "Custom AI Solutions", "ROI Optimization"],
    tier: "Executive Advisory",
    investment: "Starting at $25K",
    popular: true
  },
  {
    icon: Database,
    title: "Salesforce Architecture",
    description: "Enterprise-grade Salesforce implementations that scale with your growth",
    features: ["Platform Architecture", "Custom Development", "Integration Strategy"],
    tier: "Strategic Implementation",
    investment: "Starting at $15K",
    popular: false
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "End-to-end transformation programs that deliver measurable business impact",
    features: ["Process Optimization", "Change Management", "Performance Analytics"],
    tier: "Transformation Leadership",
    investment: "Starting at $35K",
    popular: false
  }
];

export const ExecutiveServices = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-900">
            Executive Advisory <span className="font-medium">Services</span>
          </h2>
          <p className="text-xl text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed">
            Partner with me to transform your organization through strategic AI integration 
            and enterprise Salesforce architecture. Proven methodologies, measurable outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.title} className={`relative p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${service.popular ? 'ring-2 ring-neutral-900 shadow-xl' : ''}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-neutral-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Requested
                  </span>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <service.icon className="w-12 h-12 text-neutral-900" />
                  <div>
                    <h3 className="text-2xl font-medium text-neutral-900 mb-2">{service.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-neutral-200 pt-6 space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm text-neutral-600 uppercase tracking-wide">{service.tier}</div>
                    <div className="text-2xl font-medium text-neutral-900">{service.investment}</div>
                  </div>
                  
                  <Button 
                    className={`w-full py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      service.popular 
                        ? 'bg-neutral-900 hover:bg-neutral-800 text-white shadow-lg hover:shadow-xl' 
                        : 'bg-neutral-100 hover:bg-neutral-900 text-neutral-900 hover:text-white'
                    }`}
                  >
                    Discuss This Service
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <Users className="w-16 h-16 text-white mx-auto opacity-80" />
            <h3 className="text-3xl lg:text-4xl font-light">
              Ready to Transform Your <span className="font-medium">Revenue Operations?</span>
            </h3>
            <p className="text-xl text-neutral-300 font-light leading-relaxed">
              Let's discuss how strategic AI integration and enterprise Salesforce architecture 
              can deliver measurable ROI for your organization. Book a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-4 text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Strategic Call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-4 text-base font-medium rounded-lg transition-all duration-300"
              >
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
