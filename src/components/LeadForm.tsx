import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";

export const LeadForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Check if we're returning from form submission
    if (searchParams.get("retURL")) {
      toast.custom((id) => (
        <Alert className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-xl">
          <AlertTitle className="text-2xl font-bold mb-2">
            🎉 Congratulations! 🎊
          </AlertTitle>
          <AlertDescription className="text-lg">
            Thank you for reaching out! We'll be in touch soon! 🌟
          </AlertDescription>
        </Alert>
      ), {
        duration: 3000,
      });
      navigate('/');
    }
  }, [searchParams, navigate]);

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Let's Connect
        </h2>
        <form 
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="oid" value="00DQy00000Hh1v7" />
          <input type="hidden" name="retURL" value={window.location.origin + "/?retURL=true"} />

          <div>
            <Input 
              id="first_name" 
              maxLength={40} 
              name="first_name" 
              placeholder="First Name"
              required 
              className="w-full p-4"
            />
          </div>

          <div>
            <Input 
              id="last_name" 
              maxLength={80} 
              name="last_name" 
              placeholder="Last Name"
              required 
              className="w-full p-4"
            />
          </div>

          <div>
            <Input 
              id="email" 
              maxLength={80} 
              name="email" 
              type="email" 
              placeholder="Email"
              required 
              className="w-full p-4"
            />
          </div>

          <div>
            <Textarea 
              name="description" 
              id="description" 
              placeholder="How can I help you?"
              required 
              className="w-full p-4 min-h-[150px]"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-sf-blue hover:bg-sf-navy transition-all duration-300 p-6"
          >
            Contact me!
          </Button>
        </form>
      </div>
    </section>
  );
};