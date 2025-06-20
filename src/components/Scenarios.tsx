
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building2, Network } from "lucide-react";
import { Link } from "react-router-dom";

export const Scenarios = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
          Industry Scenarios
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Explore detailed AI implementation scenarios across different industries
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/scenarios/real-estate" className="transform transition-all hover:scale-105">
            <Card className="h-full border-slate-200 hover:border-slate-300 transition-colors">
              <CardHeader>
                <Building2 className="w-12 h-12 text-slate-600 mb-4" />
                <CardTitle className="text-slate-900">Luxury Real Estate</CardTitle>
                <CardDescription className="text-slate-600">
                  Discover how AI transforms high-end real estate operations and client experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Learn how luxury real estate agencies leverage AI for personalized property matching,
                  automated client engagement, and predictive market insights.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/project-scenarios" className="transform transition-all hover:scale-105">
            <Card className="h-full border-slate-200 hover:border-slate-300 transition-colors">
              <CardHeader>
                <Network className="w-12 h-12 text-slate-600 mb-4" />
                <CardTitle className="text-slate-900">AI Lead Generation</CardTitle>
                <CardDescription className="text-slate-600">
                  See how AI can extract leads from various sources and enrich them with additional data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Explore demos of AI systems that can automatically discover leads from news sources and
                  find the perfect people for your business needs.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};
