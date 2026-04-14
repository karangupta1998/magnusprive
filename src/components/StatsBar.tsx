import FadeUp from "./FadeUp";

const stats = [
  { number: "65", unit: "%", label: "Savings on retail fares", prefix: "Up to " },
  { number: "24", unit: "hr", label: "Response guarantee" },
  { number: "100", unit: "%", label: "Verified bookings" },
  { number: "US", unit: " ↔ EU", label: "Transatlantic routes" },
];

const StatsBar = () => {
  return (
    <section className="py-12 bg-background border-y border-gold/10">
      <div className="container mx-auto px-6">
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-3xl text-gradient-gold mb-1">
                  {stat.prefix && (
                    <span className="font-serif text-lg md:text-xl">{stat.prefix}</span>
                  )}
                  <span className="font-sans font-light">{stat.number}</span>
                  <span className="font-serif">{stat.unit}</span>
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default StatsBar;
