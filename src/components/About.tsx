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

  const faqs = [
    {
      question: "Kan jag uppdatera sidan själv?",
      answer: "Ja! Du får en enkel manual och kan själv byta texter/bilder."
    },
    {
      question: "Vad händer om jag inte köper driftpaket?",
      answer: "Då ansvarar du själv för webbhotell, backup och uppdateringar. Jag hjälper gärna med rekommendationer."
    },
    {
      question: "Äger jag hemsidan?",
      answer: "Självklart – du äger både domän och innehåll och får full tillgång efter leverans."
    },
    {
      question: "Passar en landningssida för företag?",
      answer: "Ja, särskilt småföretag som vill synas online utan en stor sajt."
    },
    {
      question: "Måste jag teckna drift?",
      answer: "Nej, du kan hosta själv."
    }
  ];

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Företagswebbplatser",
      description: "Professionella webbplatser som stärker ditt varumärke och attraherar nya kunder. Modern design med fokus på konvertering och användarvänlighet.",
      features: ["Responsiv design", "SEO-optimerad", "Snabb laddning", "Kontaktformulär"],
      price: "Från 7000 kr"
    },
    // {
    //   icon: <Palette className="h-8 w-8" />,
    //   title: "Portfolio & Personliga sidor",
    //   description: "Skapa ett starkt digitalt intryck med en personlig webbplats som visar upp dina färdigheter och uppnåelser på bästa möjliga sätt.",
    //   features: ["Projektgalleri", "CV-sektion", "Kontaktmöjligheter", "Blogfunktion", "Social media integration", "Mobil-optimerad"],
    //   price: "Från 5000 kr"
    // },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Landningssidor",
      description: "En enkel men kraftfull webbplats på en sida – perfekt för kampanjer, småföretag eller tjänster som behöver ett snabbt och tydligt digitalt avtryck.",
      features: ["Modern design", "Upp till 4 sektioner", "Mobiloptimerad", "Kontaktformulär", "Grundläggande SEO", "Manual"],
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
        <div id="services">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Lanseringserbjudande</span>
            </h3>
            <p className="text-xl text-muted-foreground">Begränsat erbjudande för nya kunder</p>
          </div>
          
          <Card className="max-w-md mx-auto p-8 gradient-card shadow-glow border-primary/20 mb-16">
            <div className="text-center">
              <div className="text-primary mb-4">
                <Smartphone className="h-12 w-12 mx-auto" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Landningssida</h4>
              <div className="mb-4">
                <span className="text-4xl font-bold gradient-text">3000 kr</span>
                <p className="text-sm text-muted-foreground line-through">Ordinarie 5000 kr</p>
              </div>
              <p className="text-muted-foreground mb-6">
                Perfekt för dig som vill komma igång snabbt med en professionell närvaro online.
              </p>
              <div className="text-left mb-6">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Modern design på en sida
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Mobiloptimerad
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Kontaktformulär
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Grundläggande SEO
                  </li>
                </ul>
              </div>
              <Button className="w-full">
                Passa på nu!
              </Button>
            </div>
          </Card>

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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                        Läs mer
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      {service.title === "Företagswebbplatser" && (
                        <>
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
                                <p>Modern design, anpassad efter ditt företag</p>
                                <p>Mobilvänlig (responsiv) layout</p>
                                <p>Upp till 5 sidor (Start, Tjänster, Om oss, Kontakt, Referenser)</p>
                                <p>Kontaktformulär direkt till din e-post</p>
                                <p>Grundläggande SEO (så du syns på Google)</p>
                                <p>Koppling till Google Maps & sociala medier</p>
                                <p>Snabb laddning</p>
                                <p>Enkel manual så du kan uppdatera själv</p>
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
                              <p className="mb-2"><strong>Vill du slippa tänka på tekniken?</strong></p>
                              <p className="mb-2">Jag erbjuder trygga underhållspaket:</p>
                              <div className="space-y-2 ml-4">
                                <p><strong>490 kr/mån</strong> – Webbhotell, säkerhetskopiering, uppdateringar, enklare support</p>
                                <p><strong>990 kr/mån</strong> – Som ovan + 1 timmes innehållsändringar per månad</p>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-xl font-semibold mb-4">Så går det till</h3>
                              <div className="space-y-2">
                                <p>1. Vi bokar ett kort möte och går igenom dina behov</p>
                                <p>2. Du skickar in material (texter, logotyp, ev. bilder)</p>
                                <p>3. Jag bygger sidan och skickar en förhandsvisning</p>
                                <p>4. Du ger feedback → vi justerar → sidan lanseras!</p>
                                <p className="mt-4"><strong>Normal leveranstid:</strong> 2–4 veckor</p>
                              </div>
                            </div>

                            <div className="bg-primary/5 p-4 rounded-lg">
                              <p className="text-center font-semibold">
                                Redo att ta nästa steg?<br/>
                                Kontakta mig idag så bygger vi en hemsida som stärker ditt företag!
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {service.title === "Landningssidor" && (
                        <>
                          <DialogHeader>
                            <DialogTitle className="text-2xl mb-4">Landningssidor som konverterar</DialogTitle>
                          </DialogHeader>
                          
                          <div className="space-y-6">
                            <p className="text-muted-foreground">
                              En enkel men kraftfull webbplats på en sida – perfekt för kampanjer, småföretag eller tjänster som behöver ett snabbt och tydligt digitalt avtryck.
                            </p>

                            <div>
                              <h3 className="text-xl font-semibold mb-4">Vad du får – från 5 000 kr</h3>
                              <div className="grid gap-2">
                                <p>Modern design med fokus på tydlig struktur</p>
                                <p>Upp till 4 sektioner (t.ex. Hero, Om, Tjänster/erbjudande, Kontakt)</p>
                                <p>Mobiloptimerad och snabb</p>
                                <p>Kontaktformulär direkt till e-post</p>
                                <p>Grundläggande SEO (titlar, beskrivningar)</p>
                                <p>Instruktion/manual för att själv kunna ändra text och bilder</p>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-xl font-semibold mb-4">Prisstruktur</h3>
                              <div className="space-y-2">
                                <p><strong>Baspaket:</strong> från 5 000 kr</p>
                                <p><strong>Extra sektion:</strong> 800–1 000 kr/st</p>
                                <p><strong>Tillägg:</strong> bokningsformulär, enkät, galleri: offert</p>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-xl font-semibold mb-4">Drift & support (valfritt)</h3>
                              <div className="space-y-2 ml-4">
                                <p><strong>250 kr/mån:</strong> hosting, backup, uppdateringar, enklare support</p>
                                <p><strong>590 kr/mån:</strong> som ovan + 30 min ändringar/mån</p>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-xl font-semibold mb-4">Så går det till</h3>
                              <div className="space-y-2">
                                <p>Kort behovsgenomgång</p>
                                <p>Du skickar material (text, logotyp, ev. bilder)</p>
                                <p>Jag bygger sidan och skickar förhandsvisning</p>
                                <p>Feedback → justering → lansering</p>
                                <p className="mt-4"><strong>Leveranstid:</strong> ca 1 vecka med komplett material.</p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            ))}
          </div>
        </div>


        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Vanliga <span className="gradient-text">Frågor</span>
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 gradient-card">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">{faq.question}</h4>
                  <p className="text-muted-foreground">{faq.answer}</p>
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