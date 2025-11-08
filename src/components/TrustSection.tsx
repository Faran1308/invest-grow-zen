import { Award, Lock, Shield, Users } from "lucide-react";

const trustBadges = [
  {
    icon: Shield,
    title: "RBI Regulated",
    description: "Fully compliant with regulatory standards",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "256-bit encryption for all transactions",
  },
  {
    icon: Users,
    title: "1M+ Happy Investors",
    description: "Trusted by millions nationwide",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Best Investment Platform 2024",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-foreground">Why Trust InvestPro?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your security and growth are our top priorities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustBadges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl hover:bg-muted/50 transition-colors"
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                <badge.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {badge.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
