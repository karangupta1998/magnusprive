import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="font-serif text-xl text-foreground tracking-wide">
              Magnus <span className="font-light italic">Privé</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a 
              href="#how-it-works" 
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#routes" 
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Routes
            </a>
            <a 
              href="#contact" 
              className="text-sm text-accent hover:text-accent/80 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
