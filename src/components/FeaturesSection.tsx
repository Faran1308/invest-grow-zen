import { Card, CardContent } from "@/components/ui/card";
import { LineChart, PieChart, TrendingUp, Wallet } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Stocks",
    description: "Trade in equity stocks with real-time market data and zero brokerage fees.",
    color: "text-primary",
  },
  {
    icon: PieChart,
    title: "Mutual Funds",
    description: "Diversify your portfolio with carefully curated mutual fund options.",
    color: "text-success",
  },
  {
    icon: LineChart,
    title: "SIP",
    description: "Start systematic investment plans from as low as ₹100 per month.",
    color: "text-accent",
  },
  {
    icon: Wallet,
    title: "Gold",
    description: "Invest in digital gold with 99.9% purity and instant liquidity.",
    color: "text-chart-4",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-foreground">Investment Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build and grow your wealth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="neumorphic border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <CardContent className="p-6 space-y-4">
                <div className={`inline-flex p-3 rounded-xl bg-background ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
