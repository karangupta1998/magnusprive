const Footer = () => {
  return <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <span className="font-serif text-lg text-foreground">Magnus Privé ©<span className="font-light italic">Privé</span> ©
          </span>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>;
};
export default Footer;