import FadeUp from "./FadeUp";

const stats = [
  { value: "Up to 65%", label: "Savings on retail fares" },
  { value: "24hr", label: "Response guarantee" },
  { value: "100%", label: "Verified bookings" },
  { value: "US ↔ EU", label: "Transatlantic routes" },
];

const StatsBar = () => {
  return (
    <section className="py-6 bg-background border-y border-gold/10">
      <div className="container mx-auto px-6 space-y-8 py-8">

        {/* Option A — Playfair Display */}
        <div>
          <p className="text-xs text-muted-foreground/40 uppercase tracking-widest text-center mb-4">Option A — Playfair Display</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl text-gradient-gold mb-1" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-border/30" />

        {/* Option B — Cinzel */}
        <div>
          <p className="text-xs text-muted-foreground/40 uppercase tracking-widest text-center mb-4">Option B — Cinzel</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl text-gradient-gold mb-1" style={{ fontFamily: "'Cinzel', serif", fontWeight: 400 }}>{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-border/30" />

        {/* Option C — Cormorant SC */}
        <div>
          <p className="text-xs text-muted-foreground/40 uppercase tracking-widest text-center mb-4">Option C — Cormorant SC</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl text-gradient-gold mb-1" style={{ fontFamily: "'Cormorant SC', serif", fontWeight: 400 }}>{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-border/30" />

        {/* Option D — Josefin Sans */}
        <div>
          <p className="text-xs text-muted-foreground/40 uppercase tracking-widest text-center mb-4">Option D — Josefin Sans</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl text-gradient-gold mb-1" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300 }}>{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsBar;
