import { Linkedin } from "lucide-react";

export const LinkedInButton = () => (
  <a
    href="https://www.linkedin.com/in/pietro-piga-pm/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-1 bg-[#0A66C2] rounded text-white hover:bg-[#004182] transition-colors w-fit"
    aria-label="LinkedIn Profile"
  >
    <Linkedin className="w-5 h-5" />
  </a>
);