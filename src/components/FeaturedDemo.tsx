
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedDemo = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Latest AI Demo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            AI-Powered Sales Automation
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Watch our latest comprehensive AI sales solution demonstrating advanced automation capabilities
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-slate-200 shadow-lg bg-white">
            <CardContent className="p-6 sm:p-8">
              <div className="aspect-video rounded-lg overflow-hidden border border-slate-200 mb-6">
                <iframe
                  src="https://share.descript.com/embed/pQYEh4a2NxR"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                  title="AI-Powered Sales Automation"
                />
              </div>
              <div className="text-center">
                <Link to="/project-scenarios">
                  <Button 
                    size="lg" 
                    className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-base font-medium rounded-lg"
                  >
                    View All AI Demos <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
