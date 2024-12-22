import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export const LeadForm = () => {
  return (
    <form 
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DQy00000Hh1v7" 
      method="POST"
      className="space-y-6 max-w-xl mx-auto"
    >
      <input type="hidden" name="oid" value="00DQy00000Hh1v7" />
      <input type="hidden" name="retURL" value="https://lovable.dev/projects/ff433779-32d3-4b52-860f-5f352408b4a2" />

      <div className="space-y-2">
        <Label htmlFor="first_name">First Name</Label>
        <Input id="first_name" maxLength={40} name="first_name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="last_name">Last Name</Label>
        <Input id="last_name" maxLength={80} name="last_name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" maxLength={80} name="email" type="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Request</Label>
        <Textarea name="description" id="description" required className="min-h-[150px]" />
      </div>

      <Button type="submit" className="w-full bg-sf-blue hover:bg-sf-navy transition-all duration-300">
        Submit
      </Button>
    </form>
  );
};