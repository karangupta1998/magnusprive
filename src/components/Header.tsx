const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-serif text-xl text-foreground tracking-wide"><span className="font-light italic">Privé</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#how-it-works" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
              How It Works
            </a>
            <a href="#routes" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
              Routes
            </a>
            <a href="#contact" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <a href="#contact" className="hidden lg:inline-flex text-xs font-medium text-gold hover:text-gold-light transition-colors uppercase tracking-widest">REQUEST A QUOTE</a>
        </div>
      </div>
    </header>;
};
export default Header;