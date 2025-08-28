import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Låt oss <span className="gradient-text">Samarbeta</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Har du ett projekt i åtanke? Jag hjälper gärna till att förverkliga dina idéer. 
            Kontakta mig så diskuterar vi hur vi kan arbeta tillsammans.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Kontakta mig</h3>
              <p className="text-muted-foreground mb-8">
                Jag svarar vanligtvis inom 24 timmar. Välj det sätt som passar dig bäst!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <Card className="p-6 gradient-card shadow-card hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">alex.andersson@email.se</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-card hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefon</h4>
                    <p className="text-muted-foreground">+46 70 123 45 67</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-card hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Plats</h4>
                    <p className="text-muted-foreground">Stockholm, Sverige</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Följ mig</h4>
              <div className="flex gap-4">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 group">
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 group">
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 group">
                  <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 gradient-card shadow-hero">
            <h3 className="text-2xl font-bold mb-6">Skicka ett meddelande</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Namn</label>
                  <Input 
                    placeholder="Ditt namn"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email"
                    placeholder="din@email.se"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Ämne</label>
                <Input 
                  placeholder="Vad handlar projektet om?"
                  className="bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Meddelande</label>
                <Textarea 
                  placeholder="Berätta mer om ditt projekt..."
                  rows={6}
                  className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                />
              </div>
              
              <Button size="lg" className="w-full shadow-glow group">
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Skicka meddelande
              </Button>
            </form>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="p-12 gradient-card shadow-hero">
            <h3 className="text-3xl font-bold mb-4">
              Redo att starta ditt <span className="gradient-text">nästa projekt</span>?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Låt oss förvandla dina idéer till verklighet. Jag hjälper dig att skapa 
              digitala lösningar som verkligen gör skillnad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-glow">
                Boka en konsultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Se min CV
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;