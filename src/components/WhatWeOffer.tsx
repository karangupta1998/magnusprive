import { Plane, Crown, Building } from "lucide-react";

const offerings = [
  {
    icon: Plane,
    title: "Business Class Flights",
    description: "Lie-flat seats, premium lounges, and world-class service on every major transatlantic route.",
  },
  {
    icon: Crown,
    title: "First Class Travel",
    description: "Private suites, fine dining, and the most exclusive cabin experiences in the sky.",
  },
  {
    icon: Building,
    title: "Luxury Hotels",
    description: "Curated properties that match the standard of your journey — nothing less.",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            What We Offer
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mb-5" />
          <p className="text-sm text-muted-foreground uppercase tracking-widest">
            We focus exclusively on premium travel
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-lg p-8 hover:border-gold/20 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center mb-6">
                <item.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
