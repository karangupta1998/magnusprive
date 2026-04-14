import FadeUp from "./FadeUp";

const testimonials = [
  {
    quote: "Magnus Privé helped me secure a Business Class fare to London at a price I couldn't find elsewhere.",
    author: "Daniel R.",
    location: "New York",
  },
  {
    quote: "Quiet, efficient, and clearly built for premium travelers.",
    author: "Sofia M.",
    location: "San Francisco",
  },
  {
    quote: "Saved both time and money on a Europe trip.",
    author: "Mark L.",
    location: "Chicago",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <FadeUp className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            What Our Clients Say
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeUp key={index} delay={index * 0.12}>
              <div className="bg-card/40 border border-border/50 rounded-lg p-8 h-full flex flex-col">
                <span className="font-serif text-5xl text-gold/30 leading-none mb-4 select-none">"</span>
                <p className="text-foreground/80 leading-relaxed mb-6 font-sans text-sm flex-1">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-border/40">
                  <p className="text-xs text-gold tracking-widest uppercase">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{testimonial.location}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
