import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Premium Travel, Intelligently Delivered
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
          <p className="text-muted-foreground mb-10">
            Let us source your next premium journey.
          </p>
          <Button 
            variant="outline" 
            size="xl" 
            className="border-gold/50 text-gold hover:bg-gold/10 hover:text-gold-light hover:border-gold tracking-wider uppercase text-sm"
            asChild
          >
            <a href="#contact">Request a Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
