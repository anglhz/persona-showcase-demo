import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Hem", href: "#home" },
    { name: "Om", href: "#about" },
    { name: "Tjänster", href: "#services" },
    { name: "Projekt", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Omdömen", href: "#testimonials" },
    { name: "Kontakt", href: "#contact" }
  ];

  const services = [
    "Landningssidor",
    "Portfolio webbsidor", 
    "Företagswebbplatser",
    "SEO Optimering",
    "Drift & Support"
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
            <h3 className="text-2xl font-bold gradient-text mb-4">Fertekz IT</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Webbutvecklare och designer som skapar digitala upplevelser som 
              kombinerar funktionalitet med vacker design. Baserad i Eskilstuna, Sverige.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a 
                href="mailto:tommy@fertekz.com"
                className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/tommyfertkez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/tommyfertkez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
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

        {/* Bottom Footer */}
        <div className="border-t border-primary/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Tommy Fertekz. Alla rättigheter förbehållna.
            </p>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <span>Skapad med</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>i Sverige</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;