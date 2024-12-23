import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-sf-blue">
            Pietro Piga
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={cn(
                "transition-colors hover:text-sf-blue",
                isActive("/") ? "text-sf-blue" : "text-gray-600"
              )}
            >
              Home
            </Link>
            <Link
              to="/use-cases"
              className={cn(
                "transition-colors hover:text-sf-blue",
                isActive("/use-cases") ? "text-sf-blue" : "text-gray-600"
              )}
            >
              Use Cases
            </Link>
            <Link
              to="/podcast"
              className={cn(
                "transition-colors hover:text-sf-blue",
                isActive("/podcast") ? "text-sf-blue" : "text-gray-600"
              )}
            >
              Podcast
            </Link>
            <Link
              to="/learning"
              className={cn(
                "transition-colors hover:text-sf-blue",
                isActive("/learning") ? "text-sf-blue" : "text-gray-600"
              )}
            >
              Learning
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};