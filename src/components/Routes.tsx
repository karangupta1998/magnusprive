import { ArrowRight } from "lucide-react";

const routes = [
  { 
    from: "New York", 
    to: "London", 
    type: "Business Class",
    price: "$2,450",
    retail: "$4,100"
  },
  { 
    from: "Los Angeles", 
    to: "Paris", 
    type: "Business Class",
    price: "$2,980",
    retail: "$4,800"
  },
  { 
    from: "Chicago", 
    to: "Frankfurt", 
    type: "Business Class",
    price: "$2,600",
    retail: "$4,300"
  },
  { 
    from: "San Francisco", 
    to: "Zurich", 
    type: "First Class",
    price: "$5,900",
    retail: "$9,200"
  },
];

const Routes = () => {
  return (
    <section id="routes" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Key Routes & Sample Deals
          </h2>
          <p className="text-muted-foreground">US ↔ EU</p>
          <div className="w-12 h-px bg-accent/50 mt-4" />
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routes.map((route, index) => (
            <div 
              key={index}
              className="group p-6 bg-card border border-border hover:border-accent/30 transition-colors duration-300"
            >
              {/* Route */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-xl text-foreground">{route.from}</span>
                <ArrowRight className="w-4 h-4 text-accent/60" />
                <span className="font-serif text-xl text-foreground">{route.to}</span>
              </div>
              
              {/* Type */}
              <p className="text-sm text-muted-foreground mb-4">{route.type}</p>
              
              {/* Pricing */}
              <div className="flex items-baseline gap-4">
                <span className="text-2xl font-sans font-medium text-accent">
                  from {route.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  Typical retail: {route.retail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground/70 mt-10">
          Sample fares shown for illustration purposes only.
        </p>
      </div>
    </section>
  );
};

export default Routes;
