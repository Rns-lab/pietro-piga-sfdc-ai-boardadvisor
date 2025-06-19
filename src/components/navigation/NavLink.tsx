
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
      "transition-colors hover:text-slate-700",
      isActive ? "text-slate-700 font-medium" : "text-slate-500"
    )}
    onClick={onClick}
  >
    {children}
  </Link>
);
