import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, Smartphone, Globe } from "lucide-react";

const About = () => {
  const skills = [
    "HTML & CSS", "JavaScript", "React", "TypeScript", "Node.js", 
    "Tailwind CSS", "Responsive Design", "SEO Optimization"
  ];

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Företagswebbplatser",
      description: "Professionella webbplatser som stärker ditt varumärke och attraherar nya kunder. Modern design med fokus på konvertering och användarvänlighet.",
      features: ["Responsiv design", "SEO-optimerad", "Snabb laddning", "Kontaktformulär"],
      price: "Från 15 000 kr"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Portfolio & Personliga sidor",
      description: "Skapa ett starkt digitalt intryck med en personlig webbplats som visar upp dina färdigheter och uppnåelser på bästa möjliga sätt.",
      features: ["Projektgalleri", "CV-sektion", "Kontaktmöjligheter", "Blogfunktion", "Social media integration", "Mobil-optimerad"],
      price: "Från 10 000 kr"
    }
  ];

  return (
    <section className="py-20 bg-section-bg" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Om <span className="gradient-text">Mig</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jag är en självlärd hobby utvecklare med passion för att skapa digitala lösningar 
            som verkligen gör skillnad för människor och företag.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 mb-16">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Min Resa</h3>
            <p className="text-muted-foreground">
              Jag började som hobbyutvecklare och har sedan dess utvecklat min passion för att skapa 
              digitala lösningar som verkligen gör skillnad. Min resa inom webbutveckling startade 
              med HTML och CSS, men har vuxit till att omfatta moderna ramverk och teknologier.
            </p>
            <p className="text-muted-foreground">
              Idag fokuserar jag på att hjälpa företag och individer att etablera sin digitala 
              närvaro genom professionella webbplatser och portfolios.
            </p>
            
            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Tekniska Färdigheter</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Vad jag <span className="gradient-text">Erbjuder</span>
          </h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="p-8 gradient-card shadow-card hover:shadow-glow transition-all duration-300 group animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold gradient-text">{service.price}</span>
                  <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                    Läs mer
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;