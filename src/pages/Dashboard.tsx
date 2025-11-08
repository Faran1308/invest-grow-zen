import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, TrendingUp, Wallet, PieChart as PieChartIcon } from "lucide-react";
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const portfolioData = [
  { month: "Jan", value: 45000 },
  { month: "Feb", value: 52000 },
  { month: "Mar", value: 48000 },
  { month: "Apr", value: 61000 },
  { month: "May", value: 58000 },
  { month: "Jun", value: 70000 },
];

const assetAllocation = [
  { name: "Stocks", value: 45, color: "hsl(var(--primary))" },
  { name: "Mutual Funds", value: 30, color: "hsl(var(--success))" },
  { name: "SIP", value: 15, color: "hsl(var(--accent))" },
  { name: "Gold", value: 10, color: "hsl(var(--chart-4))" },
];

const recentTransactions = [
  { name: "Reliance Industries", type: "buy", amount: 5420, change: 2.3, date: "Today" },
  { name: "HDFC Balanced Fund", type: "buy", amount: 10000, change: 1.8, date: "Yesterday" },
  { name: "Tata Motors", type: "sell", amount: 3200, change: -1.2, date: "2 days ago" },
  { name: "Digital Gold", type: "buy", amount: 2000, change: 0.5, date: "3 days ago" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio Dashboard</h1>
          <p className="text-muted-foreground">Track your investments and analyze performance</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="neumorphic border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">₹70,000</div>
              <div className="flex items-center text-sm text-success mt-2">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>+12.5% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="neumorphic border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Invested</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">₹60,000</div>
              <div className="flex items-center text-sm text-muted-foreground mt-2">
                <span>Across all investments</span>
              </div>
            </CardContent>
          </Card>

          <Card className="neumorphic border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Returns</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">₹10,000</div>
              <div className="flex items-center text-sm text-success mt-2">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>+16.67% returns</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="neumorphic border-0">
            <CardHeader>
              <CardTitle className="text-foreground">Portfolio Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={portfolioData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="neumorphic border-0">
            <CardHeader>
              <CardTitle className="text-foreground">Asset Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={assetAllocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {assetAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="neumorphic border-0">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${transaction.type === 'buy' ? 'bg-success/10' : 'bg-destructive/10'}`}>
                      {transaction.type === 'buy' ? (
                        <ArrowUp className={`h-5 w-5 text-success`} />
                      ) : (
                        <ArrowDown className={`h-5 w-5 text-destructive`} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{transaction.name}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">₹{transaction.amount.toLocaleString()}</p>
                    <p className={`text-sm ${transaction.change > 0 ? 'text-success' : 'text-destructive'}`}>
                      {transaction.change > 0 ? '+' : ''}{transaction.change}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
