import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroProfile from "@/assets/new-hero-profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-96 h-96 rounded-full bg-primary/10 animate-float" />
        <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 rounded-full bg-accent/10 animate-float" style={{animationDelay: '3s'}} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 rounded-full backdrop-blur-glass border border-primary/20">
              <span className="text-sm gradient-text font-medium">Webbutvecklare och Designer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Hej, mitt namn är</span>
              <span className="gradient-text animate-glow">Tommy</span>
            </h1>
            
            <div className="flex justify-center lg:justify-start mb-8">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-center lg:text-left">
                Jag skapar digitala upplevelser som kombinerar funktionalitet med vacker design. 
                Specialiserad på React, Node.js och moderna webblösningar.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="group shadow-glow hover:shadow-hero transition-all duration-300"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Se mina projekt
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <img
                src={heroProfile}
                alt="Tommy - Fullstack Utvecklare"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-hero animate-glow"
              />
              <div className="absolute inset-0 rounded-2xl gradient-accent opacity-20" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
