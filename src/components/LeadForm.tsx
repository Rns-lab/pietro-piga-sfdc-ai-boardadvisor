import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const LeadForm = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Let's Connect
        </h2>
        <form 
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DQy00000Hh1v7" 
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="oid" value="00DQy00000Hh1v7" />
          <input type="hidden" name="retURL" value="/" />

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