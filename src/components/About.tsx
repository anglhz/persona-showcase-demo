import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
      price: "Från 7000 kr"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Portfolio & Personliga sidor",
      description: "Skapa ett starkt digitalt intryck med en personlig webbplats som visar upp dina färdigheter och uppnåelser på bästa möjliga sätt.",
      features: ["Projektgalleri", "CV-sektion", "Kontaktmöjligheter", "Blogfunktion", "Social media integration", "Mobil-optimerad"],
      price: "Från 5000 kr"
    }
  ];

  return (
    <section className="py-12 bg-section-bg" id="about">
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
                  {service.title === "Företagswebbplatser" ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                          Läs mer
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl mb-4">Företagswebbplatser som ger resultat</DialogTitle>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <p className="text-muted-foreground">
                            En modern hemsida är ofta det första intrycket dina kunder får. Jag bygger professionella webbplatser som stärker ditt varumärke, skapar förtroende och hjälper dig vinna fler kunder.
                          </p>

                          <div>
                            <h3 className="text-xl font-semibold mb-4">Vad du får i baspaketet – från 7 000 kr</h3>
                            <div className="grid gap-2">
                              <p>✨ Modern design, anpassad efter ditt företag</p>
                              <p>📱 Mobilvänlig (responsiv) layout</p>
                              <p>📄 Upp till 5 sidor (Start, Tjänster, Om oss, Kontakt, Referenser)</p>
                              <p>📧 Kontaktformulär direkt till din e-post</p>
                              <p>🔍 Grundläggande SEO (så du syns på Google)</p>
                              <p>🌍 Koppling till Google Maps & sociala medier</p>
                              <p>⚡ Snabb laddning</p>
                              <p>📘 Enkel manual så du kan uppdatera själv</p>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold mb-4">Prisstruktur</h3>
                            <div className="space-y-2">
                              <p><strong>Baspaket:</strong> från 7 000 kr</p>
                              <p><strong>Extra sidor:</strong> 1 000 kr/st</p>
                              <p><strong>Webbshop eller bokningssystem:</strong> offert</p>
                              <p><strong>Textproduktion, fotografering, logotyp:</strong> offert</p>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold mb-4">Drift & support (valfritt abonnemang)</h3>
                            <p className="mb-2">🔒 <strong>Vill du slippa tänka på tekniken?</strong></p>
                            <p className="mb-2">Jag erbjuder trygga underhållspaket:</p>
                            <div className="space-y-2 ml-4">
                              <p><strong>490 kr/mån</strong> – Webbhotell, säkerhetskopiering, uppdateringar, enklare support</p>
                              <p><strong>990 kr/mån</strong> – Som ovan + 1 timmes innehållsändringar per månad</p>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold mb-4">Så går det till</h3>
                            <div className="space-y-2">
                              <p>1️⃣ Vi bokar ett kort möte och går igenom dina behov</p>
                              <p>2️⃣ Du skickar in material (texter, logotyp, ev. bilder)</p>
                              <p>3️⃣ Jag bygger sidan och skickar en förhandsvisning</p>
                              <p>4️⃣ Du ger feedback → vi justerar → sidan lanseras!</p>
                              <p className="mt-4"><strong>📅 Normal leveranstid:</strong> 2–4 veckor</p>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold mb-4">Vanliga frågor</h3>
                            <div className="space-y-4">
                              <div>
                                <p className="font-semibold">Kan jag uppdatera sidan själv?</p>
                                <p className="text-muted-foreground">Ja! Du får en enkel manual och kan själv byta texter/bilder.</p>
                              </div>
                              <div>
                                <p className="font-semibold">Vad händer om jag inte köper driftpaket?</p>
                                <p className="text-muted-foreground">Då ansvarar du själv för webbhotell, backup och uppdateringar. Jag hjälper gärna med rekommendationer.</p>
                              </div>
                              <div>
                                <p className="font-semibold">Äger jag hemsidan?</p>
                                <p className="text-muted-foreground">Självklart – du äger både domän och innehåll och får full tillgång efter leverans.</p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-primary/5 p-4 rounded-lg">
                            <p className="text-center font-semibold">
                              👉 Redo att ta nästa steg?<br/>
                              Kontakta mig idag så bygger vi en hemsida som stärker ditt företag!
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                      Läs mer
                    </Button>
                  )}
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