import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Scenarios = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Industry Scenarios
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Explore detailed AI implementation scenarios across different industries
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/scenarios/real-estate" className="transform transition-all hover:scale-105">
            <Card className="h-full">
              <CardHeader>
                <Building2 className="w-12 h-12 text-sf-blue mb-4" />
                <CardTitle>Luxury Real Estate</CardTitle>
                <CardDescription>
                  Discover how AI transforms high-end real estate operations and client experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn how luxury real estate agencies leverage AI for personalized property matching,
                  automated client engagement, and predictive market insights.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};