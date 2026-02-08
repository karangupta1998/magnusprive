import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Percent } from "lucide-react";
import heroCabin from "@/assets/hero-cabin.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCabin} 
          alt="Luxury first class cabin" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-gold-light tracking-wide">
              Exclusive US ↔ EU Premium Cabin Access
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            The Invisible Engine of
            <br />
            <span className="text-gradient-gold">Premium Travel.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl animate-fade-up delay-200">
            Your 24/7 concierge for business and first class cabins between the United States and Europe. 
            Significant savings. Zero compromise on luxury.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up delay-300">
            <Button variant="gold" size="xl" className="group">
              Request a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-gold/50 text-gold hover:bg-gold/10 hover:text-gold-light hover:border-gold"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up delay-400">
            <div className="flex items-center gap-3 text-primary-foreground/70">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Percent className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="font-semibold text-primary-foreground">35-45% Savings</div>
                <div className="text-sm">On premium cabins</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/70">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="font-semibold text-primary-foreground">24/7 Concierge</div>
                <div className="text-sm">Always available</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/70">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="font-semibold text-primary-foreground">White Glove</div>
                <div className="text-sm">Premium service</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
