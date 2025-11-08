import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-investment-optimized.png";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>RBI Regulated & SEBI Registered</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Start Your Investment Journey{" "}
              <span className="text-primary">Today</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Invest in stocks, mutual funds, SIPs, and gold with zero commission. 
              Join 1M+ investors building wealth the smart way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="gradient-primary text-white font-medium w-full sm:w-auto group">
                  Start Investing
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Plans
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <p className="text-2xl font-bold text-foreground">1M+</p>
                </div>
                <p className="text-sm text-muted-foreground">Investors</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  <p className="text-2xl font-bold text-foreground">₹100Cr+</p>
                </div>
                <p className="text-sm text-muted-foreground">AUM</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <p className="text-2xl font-bold text-foreground">100%</p>
                </div>
                <p className="text-sm text-muted-foreground">Secure</p>
              </div>
            </div>
          </div>

          <div className="relative lg:block animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="Investment Growth Analytics" 
              width="1024"
              height="576"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent"></div>
    </section>
  );
};
