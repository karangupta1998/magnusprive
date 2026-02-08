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
    <section className="py-28 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            What Our Clients Say
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <p className="text-foreground/80 leading-relaxed mb-6 italic font-serif text-lg">
                "{testimonial.quote}"
              </p>
              <div className="text-sm text-muted-foreground">
                — {testimonial.author}, {testimonial.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
