import { MessageSquare, Search, Plane } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Share Your Itinerary",
    description: "Tell us your travel dates, preferred routes, and cabin class. Our concierge team will get to work immediately.",
  },
  {
    icon: Search,
    number: "02",
    title: "We Find the Best Fares",
    description: "We leverage our extensive network and proprietary systems to find premium fares at significant discounts.",
  },
  {
    icon: Plane,
    number: "03",
    title: "Travel in Luxury",
    description: "Book with confidence and enjoy your first or business class experience. We handle everything.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-widest mb-4 block">
            The Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Three simple steps to luxury travel at a fraction of the cost.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 w-12 lg:w-16 h-0.5 bg-gradient-to-r from-gold/50 to-transparent" />
              )}

              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <step.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
