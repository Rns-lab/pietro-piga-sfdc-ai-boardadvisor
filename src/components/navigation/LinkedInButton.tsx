
import { Linkedin } from "lucide-react";

export const LinkedInButton = () => (
  <a
    href="http://linkedin.com/in/pietro-piga-tech"
    target="_blank"
    rel="noopener noreferrer"
    className="p-1 bg-slate-700 rounded text-white hover:bg-slate-800 transition-colors w-fit"
    aria-label="LinkedIn Profile"
  >
    <Linkedin className="w-5 h-5" />
  </a>
);
