import { QrCode } from "lucide-react";
import QRCode from "react-qr-code";

export const InteractiveCVSection = () => {
  const agentUrl = "https://chatgpt.com/g/g-68d65b115af88191a21d5c55b2bf4ad4-pietro-piga-interactive-cv";
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
            Get to Know Me Better
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Interact with my AI-powered professional profile to discover my achievements, goals, and ambitions from both professional and personal perspectives.
          </p>
        </div>

        {/* Centered QR Code Section */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-8">
            <QrCode className="w-10 h-10 text-slate-700" />
          </div>
          
          <h3 className="text-3xl font-semibold text-slate-900 mb-6">Interactive Professional Profile</h3>
          
          <div className="mb-8 space-y-4">
            <p className="text-lg text-slate-600 leading-relaxed">
              Scan this QR code to access my AI-powered interactive CV and discover:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-medium text-slate-800">Professional Journey:</span>
                  <span className="text-slate-600 ml-1">Career milestones, achievements, and key experiences</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-medium text-slate-800">Salesforce Expertise:</span>
                  <span className="text-slate-600 ml-1">Certifications, projects, and technical skills</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-medium text-slate-800">Future Goals:</span>
                  <span className="text-slate-600 ml-1">Ambitions, vision, and career aspirations</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-medium text-slate-800">Personal Insights:</span>
                  <span className="text-slate-600 ml-1">Values, interests, and personality traits</span>
                </div>
              </div>
            </div>
            
            <p className="text-slate-600">
              Ask questions in real-time and get personalized responses about my background, expertise, and approach to work.
            </p>
          </div>
          
          <a
            href={agentUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Pietro Piga Interactive CV"
            className="inline-block mb-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
              <QRCode 
                value={agentUrl}
                size={256}
                style={{ height: "auto", width: "16rem" }}
                aria-label="QR code linking to Pietro Piga Interactive CV"
                level="H"
              />
            </div>
          </a>
          
          <p className="text-sm text-slate-500 max-w-sm mx-auto">
            Point your camera at the QR code or click it to open my interactive professional profile powered by ChatGPT
          </p>
        </div>
      </div>
    </section>
  );
};