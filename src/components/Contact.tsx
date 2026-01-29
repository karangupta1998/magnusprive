import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm font-medium text-gold uppercase tracking-widest mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Experience Premium Travel for Less?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our concierge team is available 24/7 to help you find the best fares for your next journey. 
              Share your travel plans and receive a personalized quote within hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a href="mailto:concierge@eliteairways.com" className="flex items-center gap-4 text-foreground hover:text-gold transition-colors group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email us</div>
                  <div className="font-medium">concierge@eliteairways.com</div>
                </div>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-4 text-foreground hover:text-gold transition-colors group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call us 24/7</div>
                  <div className="font-medium">+1 (555) 123-4567</div>
                </div>
              </a>
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Headquarters</div>
                  <div className="font-medium">New York, NY</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Request a Quote
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Travel Details</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your travel plans: dates, routes, number of passengers, cabin preferences..."
                />
              </div>
              <Button variant="gold" size="xl" className="w-full group">
                Submit Request
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We typically respond within 2-4 hours. Your information is kept confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
