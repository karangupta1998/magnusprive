import { Button } from "@/components/ui/button";
import heroCabin from "@/assets/hero-cabin.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCabin}
          alt="Luxury first class cabin interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-6 animate-fade-in">
            Premium Travel Concierge
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6 animate-fade-up">
            Magnus Privé
          </h1>

          <p className="font-serif text-xl md:text-2xl text-gold/80 font-light mb-6 animate-fade-up delay-100">
            The Invisible Engine of Premium Travel
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-lg animate-fade-up delay-200">
            We source Business & First Class flights and Luxury Hotels at prices your travel agent cannot access — then verify every booking before you pay.
          </p>

          <div className="animate-fade-up delay-300">
            <a href="#contact">
              <Button
                variant="outline"
                size="xl"
                className="btn-shimmer border-gold/50 text-gold hover:bg-gold/10 hover:text-gold-light hover:border-gold tracking-wider uppercase text-sm"
              >
                Request a Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
