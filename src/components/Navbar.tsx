import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="rounded-lg bg-primary p-2 transition-transform group-hover:scale-110">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">InvestPro</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/stocks" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Stocks
            </Link>
            <Link to="/mutual-funds" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Mutual Funds
            </Link>
            <Link to="/sip" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              SIP
            </Link>
            <Link to="/gold" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Gold
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-muted"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </Button>
            <Link to="/login">
              <Button variant="ghost" className="hidden md:inline-flex">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="gradient-primary text-white font-medium">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
