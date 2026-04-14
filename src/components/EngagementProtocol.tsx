import { MessageCircle, ShieldCheck, PlaneTakeoff } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageCircle,
    title: "Direct Access",
    description:
      "Bypass forms and call centers. Initiate your request via our encrypted WhatsApp Private Line. You communicate directly with a decision-maker, not a bot.",
  },
  {
    icon: ShieldCheck,
    title: "The Magnus Lock",
    description:
      "Trust is verified, not claimed. We generate a live Airline PNR (booking reference) in your name. You log in to the official airline portal to confirm your seat status before any funds are transferred.",
  },
  {
    icon: PlaneTakeoff,
    title: "Instant Execution",
    description:
      "Upon your personal verification, funds are released and tickets are instantly issued. We remain the invisible engine behind your journey until you return home.",
  },
];

const EngagementProtocol = () => {
  return (
    <section className="py-20 bg-secondary" id="engagement-protocol">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            The Engagement Protocol
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-lg border border-border/50 bg-card/40 backdrop-blur-sm p-8 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-gold-glow"
            >
              {/* Step number */}
              <span className="absolute top-4 right-4 font-sans text-xs text-muted-foreground/40 tracking-widest">
                0{index + 1}
              </span>

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

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/918950358000?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20premium%20travel%20arrangements%20through%20Magnus%20Priv%C3%A9."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="xl"
              className="border-gold/50 text-gold hover:bg-gold/10 hover:text-gold-light hover:border-gold tracking-wider uppercase text-sm"
            >
              Quick Request via WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EngagementProtocol;
