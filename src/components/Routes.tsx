import { ArrowRight } from "lucide-react";

const routes = [
  { from: "New York (JFK)", to: "London (LHR)", savings: "Up to 42%" },
  { from: "Los Angeles (LAX)", to: "Paris (CDG)", savings: "Up to 38%" },
  { from: "Miami (MIA)", to: "Frankfurt (FRA)", savings: "Up to 45%" },
  { from: "Chicago (ORD)", to: "Amsterdam (AMS)", savings: "Up to 40%" },
  { from: "San Francisco (SFO)", to: "Zurich (ZRH)", savings: "Up to 37%" },
  { from: "Boston (BOS)", to: "Milan (MXP)", savings: "Up to 43%" },
];

const Routes = () => {
  return (
    <section id="routes" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-widest mb-4 block">
            Popular Routes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            US ↔ Europe Sectors
          </h2>
          <p className="text-muted-foreground text-lg">
            Premium cabin savings on the most sought-after transatlantic routes.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">{route.from}</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                  <span className="font-medium text-foreground">{route.to}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Business & First Class</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-semibold">
                  {route.savings}
                </span>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          *Savings vary based on travel dates, booking window, and availability. Contact us for a personalized quote.
        </p>
      </div>
    </section>
  );
};

export default Routes;
