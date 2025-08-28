import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Palette, Smartphone, Globe } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "Docker", "AWS", "Figma", "Adobe Creative Suite", "Git", "Next.js"
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Utveckling",
      description: "Moderna och responsiva webbapplikationer med React, TypeScript och Tailwind CSS."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Backend Utveckling", 
      description: "Robust serverarkitektur med Node.js, Python och databasprojektering."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Användarcentrerad design som kombinerar estetik med funktionalitet."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobil Utveckling",
      description: "Cross-platform appar med React Native och progressive web apps."
    }
  ];

  return (
    <section className="py-20 bg-section-bg" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Om <span className="gradient-text">Alex</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Med över 5 års erfarenhet inom webbutveckling och design, 
            har jag hjälpt över 50 företag att realisera sina digitala visioner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Min Resa</h3>
            <p className="text-muted-foreground">
              Jag började min karriär som grafisk designer men blev snart fascinerad av webbutveckling. 
              Denna kombination av design och teknik har format min unika syn på digitala produkter.
            </p>
            <p className="text-muted-foreground">
              Idag arbetar jag främst med moderna JavaScript-ramverk och älskar att skapa 
              lösningar som verkligen gör skillnad för användare och företag.
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

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 gradient-card shadow-card text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Projekt</div>
            </Card>
            <Card className="p-6 gradient-card shadow-card text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground">År Erfarenhet</div>
            </Card>
            <Card className="p-6 gradient-card shadow-card text-center">
              <div className="text-3xl font-bold gradient-text mb-2">30+</div>
              <div className="text-muted-foreground">Nöjda Kunder</div>
            </Card>
            <Card className="p-6 gradient-card shadow-card text-center">
              <div className="text-3xl font-bold gradient-text mb-2">12+</div>
              <div className="text-muted-foreground">Teknologier</div>
            </Card>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Vad jag <span className="gradient-text">Erbjuder</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="p-6 gradient-card shadow-card hover:shadow-glow transition-all duration-300 group animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;