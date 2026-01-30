import { Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-medium text-primary-foreground tracking-tight">
              Velaire
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              How It Works
            </a>
            <a href="#routes" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Routes
            </a>
            <a href="#contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Velaire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
