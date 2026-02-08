import { Search, Briefcase, Clock } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Intelligent Sourcing",
    description: "Proprietary methods uncover premium pricing unavailable publicly.",
  },
  {
    icon: Briefcase,
    title: "Curated Premium Options",
    description: "Business Class, First Class, and luxury hotels only.",
  },
  {
    icon: Clock,
    title: "Time & Cost Saved",
    description: "Less searching. Better outcomes.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            How Magnus Privé Works
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
