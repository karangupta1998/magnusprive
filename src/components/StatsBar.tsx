import FadeUp from "./FadeUp";

const stats = [
  { value: "Up to 65%", label: "Savings on retail fares" },
  { value: "24hr", label: "Response guarantee" },
  { value: "100%", label: "Verified bookings" },
  { value: "US ↔ EU", label: "Transatlantic routes" },
];

const StatsBar = () => {
  return (
    <section className="py-12 bg-background border-y border-gold/10">
      <div className="container mx-auto px-6">
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-sans font-light text-2xl md:text-3xl text-gradient-gold mb-1 tracking-wide">
                  {stat.value}
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
