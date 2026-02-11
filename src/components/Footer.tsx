const Footer = () => {
  return <footer className="py-10 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <span className="font-serif text-lg text-foreground tracking-wide">
            Magnus Privé
          </span>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#contact" className="text-xs text-muted-foreground hover:text-gold transition-colors uppercase tracking-wider">
              Contact
            </a>
            <a href="/privacy-policy" className="text-xs text-muted-foreground hover:text-gold transition-colors uppercase tracking-wider">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors uppercase tracking-wider">
              Terms
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Magnus Privé
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;