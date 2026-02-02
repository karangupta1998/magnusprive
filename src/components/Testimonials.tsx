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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            What Clients Say
          </h2>
          <div className="w-12 h-px bg-accent/50" />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              {/* Quote */}
              <blockquote className="font-serif text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
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
