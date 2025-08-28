import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Hem", href: "#home" },
    { name: "Om", href: "#about" },
    { name: "Projekt", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Kontakt", href: "#contact" }
  ];

  const services = [
    "Frontend Utveckling",
    "Backend Utveckling", 
    "UI/UX Design",
    "Mobil Utveckling",
    "Konsultation"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-section-bg border-t border-primary/20">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Alex.dev</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Fullstack utvecklare och designer som skapar digitala upplevelser som 
              kombinerar funktionalitet med vacker design. Baserad i Stockholm, Sverige.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary/20 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-2">
              Håll dig <span className="gradient-text">uppdaterad</span>
            </h4>
            <p className="text-muted-foreground mb-4 max-w-md mx-auto">
              Få de senaste artiklarna och projektupdateringarna direkt till din inkorg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Din email"
                className="flex-1 px-4 py-2 bg-background/50 border border-primary/30 rounded-md focus:border-primary focus:outline-none"
              />
              <Button className="shadow-glow">
                Prenumerera
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Alex Andersson. Alla rättigheter förbehållna.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Gjord med</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>i Stockholm</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;