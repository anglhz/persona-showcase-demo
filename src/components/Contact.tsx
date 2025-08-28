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
                    <p className="text-muted-foreground">tommy@fertekz.com</p>
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
                    <p className="text-muted-foreground">0734145099</p>
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
                    <p className="text-muted-foreground">Eskilstuna, Sverige</p>
                  </div>
                </div>
              </Card>
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
      </div>
    </section>
  );
};

export default Contact;