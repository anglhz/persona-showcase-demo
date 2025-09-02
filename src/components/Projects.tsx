import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DrogSök.se",
      description: "Hemsida för bland annat polisanställda för att hitta specifika läkemedel.",
      image: "/lovable-uploads/16b7cf8d-1ec0-4fcb-ab0b-10a8019d666c.png",
      tech: ["React", "TypeScript", "Node.js", "MySQL"],
      github: "#",
      live: "https://drogsok.se",
      featured: true
    },
    {
      title: "Intuitive - Gaming",
      description: "Gaming hemsida med fokus på server hosting.",
      image: "/lovable-uploads/fd01128c-42c0-4f1e-b860-bae35ecdbbf9.png",
      tech: ["Next.js", "TypeScript", "Supabase"],
      github: "#",
      live: "https://intuitive-gaming.com"
    },
    {
      title: "Hakuna Potata",
      description: "Snabbmatskedja baserat i USA med inriktning bakpotatis.",
      image: "/lovable-uploads/4ab06dc0-7ebe-476e-808c-88dddaad1f48.png",
      tech: ["React Native", "Express", "MongoDB", "IoT"],
      github: "#",
      live: "https://preview--hakuna-potata-fiesta-web.lovable.app"
    },
    {
      title: "NorrElektro",
      description: "Elektriker baserad i Norrköping",
      image: "/lovable-uploads/4753ea48-827c-4ffb-93e4-ecfa8ca526dc.png",
      tech: ["React", "TypeScript", "Vite"],
      github: "#",
      live: "https://preview--norrkoping-spark-studio.lovable.app"
    }
  ];

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mina <span className="gradient-text">Projekt</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            En samling av projekt som visar min expertis inom olika teknologier och branschområden.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          {projects
            .filter(project => project.featured)
            .map((project, index) => (
              <Card
                key={project.title}
                className="overflow-hidden gradient-card shadow-hero group animate-slide-up"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-block mb-4">
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        Utvalt Projekt
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(tech => (
                        <Badge key={tech} variant="outline" className="border-primary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button 
                        size="lg" 
                        className="shadow-glow"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Se Live
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(project => !project.featured)
            .map((project, index) => (
              <Card
                key={project.title}
                className="group overflow-hidden gradient-card shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map(tech => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs border-primary/30">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
