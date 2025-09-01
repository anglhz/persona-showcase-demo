import { Card } from "@/components/ui/card";
import { CheckCircle, MessageCircle, Palette, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Konsultation",
      description: "Vi diskuterar dina behov och mål i en kostnadsfri konsultation.",
      details: "15-30 min samtal där vi går igenom dina önskemål, målgrupp och budget."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design & Utveckling", 
      description: "Jag skapar en skräddarsydd lösning baserat på dina krav.",
      details: "Mockups och prototyper följt av utveckling med moderna teknologier."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Granskning & Feedback",
      description: "Du får granska och ge feedback på förslaget innan lansering.",
      details: "Upp till 2 revideringsrundor ingår för att säkerställa din tillfredsställelse."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Lansering",
      description: "Webbplatsen publiceras och du får tillgång till administrativa verktyg.",
      details: "Inkluderar utbildning och dokumentation för att du ska kunna uppdatera innehåll själv."
    }
  ];

  return (
    <section className="py-20" id="process">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Min <span className="gradient-text">Arbetsprocess</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            En enkel och transparent process från idé till färdig webbplats
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="relative p-6 gradient-card shadow-card hover:shadow-glow transition-all duration-300 group animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
              <p className="text-muted-foreground text-xs opacity-80">{step.details}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Redo att sätta igång med ditt projekt?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors shadow-glow hover:shadow-hero"
          >
            Kontakta mig idag
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;