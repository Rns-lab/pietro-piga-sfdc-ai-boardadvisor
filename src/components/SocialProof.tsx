
import { Star, Quote, Award, TrendingUp, Users, Building } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Pietro's AI integration strategy increased our sales velocity by 340% in just 6 months. His deep understanding of both technology and business processes is exceptional.",
    author: "Sarah Chen",
    title: "VP of Revenue Operations",
    company: "Fortune 500 SaaS Company",
    impact: "+340% Sales Velocity"
  },
  {
    quote: "The Salesforce architecture Pietro designed handles our complex enterprise needs flawlessly. Best investment we've made in our tech stack.",
    author: "Michael Rodriguez",
    title: "Chief Technology Officer",
    company: "Global Manufacturing Leader",
    impact: "$12M Cost Savings"
  },
  {
    quote: "Pietro doesn't just implement solutions - he transforms how organizations think about revenue operations. True strategic partner.",
    author: "Jennifer Walsh",
    title: "Chief Revenue Officer",
    company: "High-Growth Tech Unicorn",
    impact: "90% Process Efficiency"
  }
];

const achievements = [
  { icon: Building, metric: "50+", label: "Enterprise Transformations" },
  { icon: TrendingUp, metric: "$50M+", label: "ROI Generated" },
  { icon: Users, metric: "10K+", label: "Users Impacted" },
  { icon: Award, metric: "98%", label: "Client Satisfaction" }
];

const certifications = [
  "Salesforce Certified Administrator",
  "Platform App Builder Expert",
  "AI Specialist Certification",
  "Revenue Cloud Consultant",
  "Integration Architecture Designer",
  "Development Lifecycle Expert"
];

export const SocialProof = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-stone-50 to-neutral-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 fill-current" />
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-900">
            Proven Track Record of <span className="font-medium">Excellence</span>
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement) => (
            <Card key={achievement.label} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <achievement.icon className="w-8 h-8 text-neutral-900 mx-auto mb-3" />
              <div className="text-3xl font-light text-neutral-900 mb-1">{achievement.metric}</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">{achievement.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-6 mb-16">
          <h3 className="text-2xl font-medium text-neutral-900 text-center mb-12">
            What Industry Leaders Say
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="space-y-6">
                  <Quote className="w-8 h-8 text-neutral-400" />
                  <p className="text-neutral-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="space-y-3">
                    <div className="border-t border-neutral-200 pt-4">
                      <div className="font-medium text-neutral-900">{testimonial.author}</div>
                      <div className="text-sm text-neutral-600">{testimonial.title}</div>
                      <div className="text-sm text-neutral-500">{testimonial.company}</div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="text-sm font-medium text-green-800">
                        Impact: {testimonial.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="p-8 bg-white">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-amber-600" />
              <h3 className="text-2xl font-medium text-neutral-900">12x Certified Expert</h3>
            </div>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Continuously advancing expertise through official certifications and hands-on experience 
              with the latest Salesforce innovations and AI technologies.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
              {certifications.map((cert) => (
                <div key={cert} className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                  <div className="text-sm font-medium text-neutral-800 text-center">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
