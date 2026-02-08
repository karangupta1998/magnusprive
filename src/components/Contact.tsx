import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
              Request a Quote
            </h2>
            <div className="w-12 h-px bg-gold/40 mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-10">
              Share your travel plans and receive a personalized quote. We respond within hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-5">
              <a href="mailto:hello@magnusprive.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span className="text-sm">hello@magnusprive.com</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span className="text-sm">New York, NY</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-gold/40 focus:border-gold/40 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-gold/40 focus:border-gold/40 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-gold/40 focus:border-gold/40 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Travel Details</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-gold/40 focus:border-gold/40 transition-colors resize-none"
                  placeholder="Dates, routes, number of passengers, cabin preferences..."
                />
              </div>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-gold/50 text-gold hover:bg-gold/10 hover:text-gold-light hover:border-gold tracking-wider uppercase text-xs"
              >
                Submit Request
              </Button>
              <p className="text-xs text-muted-foreground/60 text-center">
                Your information is kept strictly confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
