
import { ArrowRight, Star, Award, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              {/* Authority Badge */}
              <div className="inline-flex items-center gap-2 bg-neutral-900 text-stone-100 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                <Shield className="w-4 h-4 fill-current" />
                12x Certified • AI Board Advisor
              </div>
              
              {/* Main Headlines */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-light text-neutral-900 leading-tight">
                  <span className="block">AI Board Advisor &</span>
                  <span className="block font-medium">Senior Salesforce</span>
                  <span className="block font-medium">Strategist</span>
                </h1>
                <p className="text-xl lg:text-2xl text-neutral-600 font-light leading-relaxed max-w-xl">
                  I help Fortune 500 companies transform their revenue operations through 
                  <span className="text-neutral-900 font-medium"> strategic AI integration</span> 
                  and enterprise Salesforce architecture, delivering measurable ROI within 90 days.
                </p>
              </div>
              
              {/* Trust Metrics */}
              <div className="grid grid-cols-3 gap-8 py-6">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-light text-neutral-900">12+</div>
                  <div className="text-sm text-neutral-600 uppercase tracking-wide">Years Leading<br/>Transformations</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-light text-neutral-900">$50M+</div>
                  <div className="text-sm text-neutral-600 uppercase tracking-wide">ROI Generated<br/>for Clients</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-light text-neutral-900">100K+</div>
                  <div className="text-sm text-neutral-600 uppercase tracking-wide">Trailhead Points<br/>& Recognition</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-neutral-900 hover:bg-neutral-800 text-stone-100 px-8 py-4 text-base font-medium rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Schedule Strategic Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-neutral-300 text-neutral-900 hover:bg-neutral-900 hover:text-white px-8 py-4 text-base font-medium rounded-lg transition-all duration-300"
                >
                  View Case Studies
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center gap-2 text-neutral-600">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span className="text-sm font-medium">Salesforce MVP</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Fortune 500 Trusted</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Zap className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">AI Innovation Leader</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Professional Photo & Credentials */}
            <div className="relative lg:pl-8">
              {/* Main Profile Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-neutral-100 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neutral-100 to-transparent rounded-full opacity-50 -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Professional Photo */}
                  <div className="w-48 h-60 mx-auto rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/76dc5bdd-db62-41a3-8777-1e3a7bcb34ee.png" 
                      alt="Pietro Piga - AI Board Advisor & Senior Salesforce Strategist" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  {/* Profile Info */}
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-2xl font-medium text-neutral-900">Pietro Piga</h3>
                      <p className="text-neutral-600 font-light">AI Board Advisor & Senior Salesforce Strategist</p>
                    </div>
                    
                    {/* Exclusive Achievements */}
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-3">
                        <div className="flex items-center justify-center gap-2">
                          <Star className="w-4 h-4 text-amber-600 fill-current" />
                          <span className="text-sm font-medium text-amber-800">First Italian Salesforce Podcaster</span>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-3">
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-800">12x Salesforce Certified Expert</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Certifications Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-4">
                      <span className="bg-neutral-100 text-neutral-700 px-3 py-2 rounded-lg text-xs font-medium">
                        Platform App Builder
                      </span>
                      <span className="bg-neutral-100 text-neutral-700 px-3 py-2 rounded-lg text-xs font-medium">
                        Admin Certified
                      </span>
                      <span className="bg-neutral-100 text-neutral-700 px-3 py-2 rounded-lg text-xs font-medium">
                        AI Specialist
                      </span>
                      <span className="bg-neutral-100 text-neutral-700 px-3 py-2 rounded-lg text-xs font-medium">
                        Revenue Cloud
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/6ebe36cf-d201-4bf5-87fc-838b82308018.png" 
                      alt="Salesforce Sidekicks Podcast" 
                      className="w-8 h-8 rounded-lg object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-sm">Salesforce Sidekicks</div>
                    <div className="text-neutral-300 text-xs">Host & Pioneer in Italian Market</div>
                    <div className="text-neutral-400 text-xs">10K+ Monthly Listeners</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 -left-12 w-16 h-16 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
