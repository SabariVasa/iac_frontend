
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-card border-0 p-8 max-w-md w-full text-center">
        <h1 className="text-7xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-light-gray-900 mb-2">Page not found</h2>
        <p className="text-light-gray-700 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-primary-500 hover:bg-primary-600">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" /> Return to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
