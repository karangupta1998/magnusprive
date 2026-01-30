import { Plane, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl text-foreground tracking-wide">
              Magnus <span className="font-light italic">Privé</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#routes" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Routes
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>24/7 Concierge</span>
            </a>
            <a href="mailto:concierge@eliteairways.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              <span>concierge@eliteairways.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
