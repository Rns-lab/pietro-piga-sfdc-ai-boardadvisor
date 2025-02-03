import { NavLink } from "./NavLink";
import { LinkedInButton } from "./LinkedInButton";
import { NavItem } from "./types";

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavItem[];
  isActive: (path: string) => boolean;
  onLinkClick: () => void;
}

export const MobileMenu = ({ isOpen, navLinks, isActive, onLinkClick }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute left-0 right-0 top-16 bg-white/95 backdrop-blur-sm border-b shadow-lg">
      <div className="flex flex-col space-y-4 px-4 py-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            isActive={isActive(link.path)}
            onClick={onLinkClick}
          >
            <span className="text-lg">{link.label}</span>
          </NavLink>
        ))}
        <LinkedInButton />
      </div>
    </div>
  );
};