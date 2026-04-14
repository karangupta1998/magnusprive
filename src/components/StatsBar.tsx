import FadeUp from "./FadeUp";

const StatsBar = () => {
  return (
    <section className="py-12 bg-background border-y border-gold/10">
      <div className="container mx-auto px-6">
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">

            <div className="text-center">
              <p className="text-gradient-gold mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                <span className="text-base font-normal">Up to </span>
                <span className="text-2xl md:text-3xl font-normal">65%</span>
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Savings on retail fares</p>
            </div>

            <div className="text-center">
              <p className="text-gradient-gold mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                <span className="text-2xl md:text-3xl font-normal">24</span>
                <span className="text-base font-normal">hr</span>
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Response guarantee</p>
            </div>

            <div className="text-center">
              <p className="text-gradient-gold mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                <span className="text-2xl md:text-3xl font-normal">100%</span>
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Verified bookings</p>
            </div>

            <div className="text-center">
              <p className="text-gradient-gold mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                <span className="text-2xl md:text-3xl font-normal">US ↔ EU</span>
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Transatlantic routes</p>
            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default StatsBar;
