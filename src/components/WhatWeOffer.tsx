import { Plane, Crown, Building2 } from "lucide-react";

const offerings = [
  {
    icon: Plane,
    title: "Business Class Flights",
    description: "Premium lie-flat seating on leading carriers worldwide.",
  },
  {
    icon: Crown,
    title: "First Class Travel",
    description: "The pinnacle of air travel with suite-style privacy.",
  },
  {
    icon: Building2,
    title: "Luxury Hotels",
    description: "Curated properties that meet exacting standards.",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            What We Offer
          </h2>
          <div className="w-12 h-px bg-accent/50" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <div 
              key={index} 
              className="group p-8 bg-card border border-border hover:border-accent/30 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <offering.icon className="w-7 h-7 text-accent/70" strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                {offering.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className="text-center text-muted-foreground mt-12">
          We focus exclusively on premium travel.
        </p>
      </div>
    </section>
  );
};

export default WhatWeOffer;
