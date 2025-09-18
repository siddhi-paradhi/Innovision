import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-primary-foreground rounded-full relative">
                  <div className="absolute inset-1 bg-primary-foreground rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-foreground">INNOVISION</span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link 
                to="/history"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/history' 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                History
              </Link>
              <Link 
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/about' 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/contact' 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;