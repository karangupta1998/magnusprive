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
    <section id="how-it-works" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            How Magnus Privé Works
          </h2>
          <div className="w-12 h-px bg-accent/50" />
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              {/* Minimal Icon */}
              <div className="mb-6">
                <step.icon className="w-6 h-6 text-accent/80" strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                {step.title}
              </h3>
              
              {/* Description */}
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
