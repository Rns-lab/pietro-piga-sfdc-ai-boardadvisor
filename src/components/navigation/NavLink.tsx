import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink = ({ to, isActive, children, onClick }: NavLinkProps) => (
  <Link
    to={to}
    className={cn(
      "transition-colors hover:text-sf-blue",
      isActive ? "text-sf-blue" : "text-gray-600"
    )}
    onClick={onClick}
  >
    {children}
  </Link>
);