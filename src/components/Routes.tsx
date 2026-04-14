import { ArrowRight } from "lucide-react";

const routes = [
  { from: "New York", to: "London", class: "Business Class", price: "$2,050", retail: "$6,100" },
  { from: "Los Angeles", to: "Paris", class: "Business Class", price: "$2,267", retail: "$5,600" },
  { from: "Chicago", to: "Frankfurt", class: "Business Class", price: "$1,890", retail: "$4,700" },
  { from: "San Francisco", to: "Zurich", class: "First Class", price: "$3,900", retail: "$9,200" },
];

const Routes = () => {
  return (
    <section id="routes" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            Key Routes & Sample Deals
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mb-6" />
          <p className="text-sm text-muted-foreground">
            US ↔ Europe — Premium cabin savings on the most sought-after transatlantic routes.
          </p>
        </div>

        {/* Routes Table */}
        <div className="max-w-3xl mx-auto space-y-4">
          {routes.map((route) => (
            <div 
              key={`${route.from}-${route.to}`}
              className="bg-card border border-border rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-gold/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-foreground font-medium">{route.from}</span>
                <ArrowRight className="w-4 h-4 text-gold/60" strokeWidth={1.5} />
                <span className="text-foreground font-medium">{route.to}</span>
                <span className="text-xs text-muted-foreground border border-border rounded px-2 py-0.5 ml-2">
                  {route.class}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-gold font-semibold text-lg">{route.price}</span>
                  <span className="text-xs text-muted-foreground ml-3 line-through">{route.retail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground/60 mt-10 max-w-md mx-auto">
          Sample fares shown for illustration purposes only. Actual pricing varies based on travel dates, booking window, and availability.
        </p>
      </div>
    </section>
  );
};

export default Routes;
