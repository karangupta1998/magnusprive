import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-primary">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Headline */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
          Premium Travel, Intelligently Delivered.
        </h2>
        
        {/* Subtext */}
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Let us source your next premium journey.
        </p>
        
        {/* CTA Button */}
        <Button 
          variant="outline" 
          size="lg"
          className="border-accent/60 text-accent hover:bg-accent/10 hover:border-accent px-8 py-6 text-base tracking-wide"
        >
          Request a Quote
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
