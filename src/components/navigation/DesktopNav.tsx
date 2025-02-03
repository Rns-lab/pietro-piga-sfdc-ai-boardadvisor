import { NavLink } from "./NavLink";
import { LinkedInButton } from "./LinkedInButton";
import { NavItem } from "./types";

interface DesktopNavProps {
  navLinks: NavItem[];
  isActive: (path: string) => boolean;
}

export const DesktopNav = ({ navLinks, isActive }: DesktopNavProps) => (
  <div className="hidden md:flex items-center">
    <div className="flex space-x-8 mr-16">
      {navLinks.map((link) => (
        <NavLink key={link.path} to={link.path} isActive={isActive(link.path)}>
          {link.label}
        </NavLink>
      ))}
    </div>
    <LinkedInButton />
  </div>
);