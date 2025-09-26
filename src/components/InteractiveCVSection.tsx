import { MessageCircle, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import qrCodeImage from "@/assets/pietro-interactive-cv-qr.png";

export const InteractiveCVSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
            Get to Know Me Better
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Interact with my AI-powered professional profile to discover my achievements, goals, and ambitions from both professional and personal perspectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4 mx-auto">
                <MessageCircle className="w-8 h-8 text-slate-700" />
              </div>
              <CardTitle className="text-2xl text-slate-900">Interactive Professional Profile</CardTitle>
              <CardDescription className="text-lg">
                Chat with my AI agent to explore my professional journey, achievements, and future aspirations
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Always Available</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Personalized Responses</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium">Professional & Personal Insights</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-base font-medium rounded-lg"
                onClick={() => window.open('https://chatgpt.com/g/g-68d65b115af88191a21d5c55b2bf4ad4-pietro-piga-interactive-cv', '_blank', 'noopener,noreferrer')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Start Interactive Conversation
              </Button>
            </CardContent>
          </Card>

          {/* Right Content - QR Code */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
              <QrCode className="w-8 h-8 text-slate-700" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Quick Access</h3>
            <p className="text-slate-600 mb-8 max-w-sm mx-auto">
              Scan this QR code with your mobile device to instantly access my interactive profile
            </p>
            
            <div className="inline-block bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
              <img 
                src={qrCodeImage} 
                alt="QR Code for Pietro Piga Interactive CV" 
                className="w-48 h-48 mx-auto"
              />
            </div>
            
            <p className="text-sm text-slate-500 mt-4 max-w-xs mx-auto">
              Point your camera at the QR code to open the interactive profile
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};