import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Velaire saved us over $12,000 on our executive team's London trip. The service was impeccable from start to finish.",
    author: "Sarah Mitchell",
    title: "VP of Operations",
    company: "Apex Ventures",
  },
  {
    quote: "As a touring manager, I need reliable last-minute bookings. Velaire delivers every time with rates I can't find anywhere else.",
    author: "Marcus Chen",
    title: "Tour Manager",
    company: "Atlantic Artists",
  },
  {
    quote: "The 24/7 concierge is a game-changer. They handled a complex multi-city itinerary flawlessly and saved us 40%.",
    author: "Elena Rossini",
    title: "Corporate Travel Director",
    company: "Novus Capital",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-widest mb-4 block">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg">
            See why travel managers and executives choose Velaire for their premium travel needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-xl p-8 border border-border hover:border-gold/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-gold" />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/90 leading-relaxed mb-6 pt-4">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <div className="font-medium text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.title}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
