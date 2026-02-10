import { Button } from "@/components/ui/button";
import heroCabin from "@/assets/hero-cabin.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroCabin} alt="Luxury first class cabin interior" className="w-full h-full object-cover" />
        {/* Left-side gradient overlay only */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-2xl">
          {/* Brand name */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6 animate-fade-up">
            Magnus Privé
          </h1>

          {/* Tagline */}
          <p className="font-serif text-xl md:text-2xl text-gold font-light italic mb-8 animate-fade-up delay-100">The Invisible Engine of Premium Travel</p>

          {/* Subtext */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-lg animate-fade-up delay-200">Exclusive access to Business & First Class flights and Luxury Hotels.</p>

          {/* CTA */}
          <div className="animate-fade-up delay-300">
            <a href="#contact">
              <Button variant="outline" size="xl" className="border-gold/50 text-gold hover:bg-gold/10 hover:text-gold-light hover:border-gold tracking-wider uppercase text-sm">
                Request a Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;