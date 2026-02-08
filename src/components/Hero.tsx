import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-first-class.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="First Class suite interior" className="w-full h-full object-cover" />
        {/* Left-side gradient overlay */}
        <div className="absolute inset-0" style={{
        background: 'linear-gradient(90deg, hsl(220 25% 8% / 0.95) 0%, hsl(220 25% 8% / 0.75) 40%, hsl(220 25% 8% / 0.3) 70%, transparent 100%)'
      }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-2xl">
          {/* Brand Name */}
          <p className="font-serif text-2xl md:text-3xl text-foreground/90 mb-6 animate-fade-up tracking-wide">Magnus Privé<span className="italic font-light">Privé</span>
          </p>

          {/* Primary Tagline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] mb-8 animate-fade-up delay-100">The Invisible Engine of
Premium Travel<br />
            Premium Travel.
          </h1>

          {/* Secondary Line */}
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-12 max-w-xl animate-fade-up delay-200">Exclusive Access to Business & First Class Flights and Luxury Hotels</p>

          {/* CTA Button */}
          <div className="animate-fade-up delay-300">
            <Button variant="outline" size="lg" className="border-accent/60 text-accent hover:bg-accent/10 hover:border-accent px-8 py-6 text-base tracking-wide font-sans">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;