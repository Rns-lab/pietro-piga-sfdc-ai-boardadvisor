import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileMenu } from "./navigation/MobileMenu";
import { NavItem } from "./navigation/types";

export const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/use-cases", label: "Use Cases" },
    { path: "/project-scenarios", label: "AI Demos" },
    { path: "/podcast", label: "Podcast" },
    { path: "/learning", label: "Learning" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-sf-blue">
            Pietro Piga
          </Link>

          <DesktopNav navLinks={navLinks} isActive={isActive} />

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        <MobileMenu
          isOpen={isMenuOpen}
          navLinks={navLinks}
          isActive={isActive}
          onLinkClick={() => setIsMenuOpen(false)}
        />
      </div>
    </nav>
  );
};
