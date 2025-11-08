import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary p-2">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">InvestPro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted platform for stocks, mutual funds, SIPs, and gold investments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/stocks" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Stocks
                </Link>
              </li>
              <li>
                <Link to="/mutual-funds" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link to="/sip" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  SIP
                </Link>
              </li>
              <li>
                <Link to="/gold" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gold
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 InvestPro. All rights reserved. | RBI Regulated | SEBI Registered
          </p>
        </div>
      </div>
    </footer>
  );
};
