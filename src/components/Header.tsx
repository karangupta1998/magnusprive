import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-serif text-lg text-foreground tracking-wide hover:text-gold transition-colors">
            Magnus Privé
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#how-it-works" className="text-xs font-medium text-muted-foreground hover:text-gold transition-colors uppercase tracking-widest">
              How It Works
            </a>
            <a href="#routes" className="text-xs font-medium text-muted-foreground hover:text-gold transition-colors uppercase tracking-widest">
              Routes
            </a>
            <a href="#contact" className="text-xs font-medium text-muted-foreground hover:text-gold transition-colors uppercase tracking-widest">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <a href="#contact" className="hidden lg:inline-flex text-xs font-medium text-gold hover:text-gold-light transition-colors uppercase tracking-widest">
            REQUEST A QUOTE
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-muted-foreground hover:text-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/30">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-6">
            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="text-xs font-medium text-muted-foreground hover:text-gold transition-colors uppercase tracking-widest"
            >
              How It Works
            </a>
            <a
              href="#routes"
              onClick={closeMenu}
              className="text-xs font-medium text-muted-foreground hover:text-gold transition-colors uppercase tracking-widest"
            >
              Routes
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-xs font-medium text-muted-foreground hover:text-gold transition-colors uppercase tracking-widest"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-xs font-medium text-gold hover:text-gold-light transition-colors uppercase tracking-widest"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
