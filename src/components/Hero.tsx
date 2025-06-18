
import { ArrowRight, Star, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:24px_24px] opacity-20"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-neutral-900 text-stone-100 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                Senior Salesforce Executive
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-light text-neutral-900 leading-tight">
                  Pietro
                  <span className="block font-normal">Piga</span>
                </h1>
                <p className="text-xl lg:text-2xl text-neutral-600 font-light leading-relaxed">
                  Transforming enterprises through 
                  <span className="text-neutral-900 font-medium"> strategic Salesforce implementations</span> 
                  and cutting-edge AI integration
                </p>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                <div className="space-y-1">
                  <div className="text-3xl font-light text-neutral-900">12+</div>
                  <div className="text-sm text-neutral-600 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-light text-neutral-900">12x</div>
                  <div className="text-sm text-neutral-600 uppercase tracking-wide">Certified Expert</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-light text-neutral-900">100K+</div>
                  <div className="text-sm text-neutral-600 uppercase tracking-wide">Trailhead Points</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-neutral-900 hover:bg-neutral-800 text-stone-100 px-8 py-3 text-base font-medium rounded-none shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open('https://www.salesforce.com/trailblazer/pietropiga', '_blank')}
                >
                  View Executive Profile <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-neutral-300 text-neutral-900 hover:bg-neutral-50 px-8 py-3 text-base font-medium rounded-none transition-all duration-300"
                >
                  Download Resume
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-neutral-600">
                  <Award className="w-5 h-5" />
                  <span className="text-sm">Salesforce Certified</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">Fortune 500 Experience</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Profile & Achievement */}
            <div className="relative">
              {/* Main Profile Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-neutral-100">
                <div className="space-y-6">
                  {/* Profile Image */}
                  <div className="w-32 h-40 mx-auto rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/53cf92eb-10a9-43dd-b824-95d3892af632.png" 
                      alt="Pietro Piga - Senior Salesforce Executive" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  {/* Profile Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-medium text-neutral-900">Pietro Piga</h3>
                    <p className="text-neutral-600">Senior Salesforce Architect & AI Innovation Leader</p>
                    
                    {/* Certifications */}
                    <div className="flex flex-wrap justify-center gap-2 pt-4">
                      <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-xs font-medium">
                        Platform App Builder
                      </span>
                      <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-xs font-medium">
                        Admin Certified
                      </span>
                      <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-xs font-medium">
                        AI Specialist
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Podcast Card */}
              <div className="absolute -bottom-6 -left-6 bg-neutral-900 text-white rounded-xl p-4 shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <img 
                    src="/lovable-uploads/6ebe36cf-d201-4bf5-87fc-838b82308018.png" 
                    alt="Salesforce Sidekicks Podcast" 
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <div className="font-medium text-sm">Salesforce Sidekicks</div>
                    <div className="text-neutral-400 text-xs">First Italian SF Podcast</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-full opacity-50"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
