
import { Bot, Share2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SalesforceGPT = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Salesforce Project Management GPT
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          A custom GPT trained with the latest Salesforce best practices and Agentforce capabilities
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-sf-blue/10 to-sf-purple/10 p-8 rounded-2xl">
            <Bot className="w-16 h-16 text-sf-blue mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              AI-Powered Project Management Assistant
            </h3>
            <p className="text-gray-600 mb-6">
              This specialized GPT combines the latest Salesforce best practices with cutting-edge Agentforce capabilities to help you:
            </p>
            
            <Tabs defaultValue="planning">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="planning">Planning</TabsTrigger>
                <TabsTrigger value="execution">Execution</TabsTrigger>
                <TabsTrigger value="optimization">Optimization</TabsTrigger>
              </TabsList>
              <TabsContent value="planning" className="mt-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-sf-blue text-white p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Design optimal project structures based on Salesforce best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sf-blue text-white p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Create detailed project plans with realistic timelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sf-blue text-white p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Forecast resource needs and potential challenges</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="execution" className="mt-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-sf-blue text-white p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Generate detailed technical specifications for development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sf-blue text-white p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Troubleshoot implementation issues with AI-driven solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sf-blue text-white p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Track progress and adapt to changing requirements</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="optimization" className="mt-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-sf-blue text-white p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Identify performance bottlenecks and optimization opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sf-blue text-white p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Generate post-implementation analytics and insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sf-blue text-white p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Suggest ongoing improvements based on usage patterns</span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Try It Today</h3>
            <p className="text-gray-600 mb-6">
              Experience how this custom GPT can transform your Salesforce project management process. Benefit from expert guidance, best practices, and AI-driven insights to deliver successful Salesforce implementations.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg"
                className="w-full lg:w-auto flex justify-center items-center gap-2 bg-sf-blue hover:bg-sf-navy transition-all duration-300"
                onClick={() => window.open("https://chatgpt.com/g/g-677f7aff66cc8191bb86f252a8c4c33f-project-management-gpt", "_blank")}
              >
                <Bot className="h-5 w-5" />
                Try the GPT Now
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 flex justify-center items-center gap-2 border-sf-blue text-sf-blue hover:bg-sf-blue/10"
                  onClick={() => window.open("mailto:pietro.piga@example.com?subject=Feedback on Salesforce PM GPT", "_blank")}
                >
                  <MessageSquare className="h-4 w-4" />
                  Leave Feedback
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex-1 flex justify-center items-center gap-2 border-sf-blue text-sf-blue hover:bg-sf-blue/10"
                  onClick={() => {
                    navigator.clipboard.writeText("https://chatgpt.com/g/g-677f7aff66cc8191bb86f252a8c4c33f-project-management-gpt");
                    // Note: In a real implementation, you'd add a toast notification here
                  }}
                >
                  <Share2 className="h-4 w-4" />
                  Share with Colleagues
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
