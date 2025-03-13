
import { Bot, Share2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SalesforceGPT = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50 border-y border-purple-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-600 rounded-full shadow-lg shadow-purple-200">
              <Bot className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Salesforce Project Management GPT
          </h2>
          <p className="text-xl text-gray-700 text-center mb-4 max-w-3xl mx-auto">
            A custom GPT trained with the latest Salesforce best practices and Agentforce capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
            <h3 className="text-2xl font-bold mb-6 text-purple-800">
              AI-Powered Project Management Assistant
            </h3>
            <p className="text-gray-700 mb-6">
              This specialized GPT combines the latest Salesforce best practices with cutting-edge Agentforce capabilities to help you:
            </p>
            
            <Tabs defaultValue="planning" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-purple-50 p-1">
                <TabsTrigger value="planning" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Planning</TabsTrigger>
                <TabsTrigger value="execution" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Execution</TabsTrigger>
                <TabsTrigger value="optimization" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Optimization</TabsTrigger>
              </TabsList>
              <TabsContent value="planning" className="mt-6 p-4 bg-purple-50 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white p-1 rounded-full mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Design optimal project structures based on Salesforce best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white p-1 rounded-full mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Create detailed project plans with realistic timelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white p-1 rounded-full mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Forecast resource needs and potential challenges</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="execution" className="mt-6 p-4 bg-purple-50 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white p-1 rounded-full mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Generate detailed technical specifications for development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white p-1 rounded-full mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Troubleshoot implementation issues with AI-driven solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white p-1 rounded-full mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Track progress and adapt to changing requirements</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="optimization" className="mt-6 p-4 bg-purple-50 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white p-1 rounded-full mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Identify performance bottlenecks and optimization opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white p-1 rounded-full mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Generate post-implementation analytics and insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white p-1 rounded-full mr-3 flex-shrink-0">
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
            <h3 className="text-2xl font-bold mb-4 text-purple-800">
              Try It Today
            </h3>
            <p className="text-gray-700 mb-8">
              Experience how this custom GPT can transform your Salesforce project management process. Benefit from expert guidance, best practices, and AI-driven insights to deliver successful Salesforce implementations.
            </p>
            
            <div className="space-y-5">
              <Button 
                size="lg"
                className="w-full lg:w-auto flex justify-center items-center gap-2 bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-lg py-6 shadow-lg shadow-purple-200/50"
                onClick={() => window.open("https://chatgpt.com/g/g-677f7aff66cc8191bb86f252a8c4c33f-project-management-gpt", "_blank")}
              >
                <Bot className="h-5 w-5" />
                Try the GPT Now
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 flex justify-center items-center gap-2 border-purple-300 text-purple-700 hover:bg-purple-50"
                  onClick={() => window.open("mailto:pietro.piga@example.com?subject=Feedback on Salesforce PM GPT", "_blank")}
                >
                  <MessageSquare className="h-4 w-4" />
                  Leave Feedback
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex-1 flex justify-center items-center gap-2 border-purple-300 text-purple-700 hover:bg-purple-50"
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
