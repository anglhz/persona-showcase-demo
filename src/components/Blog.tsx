import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Framtiden för React 2024: Server Components och Suspense",
      excerpt: "En djupdykning i React Server Components och hur de förändrar hur vi bygger webbapplikationer.",
      date: "15 Mars 2024",
      readTime: "8 min",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
      featured: true
    },
    {
      title: "TypeScript Best Practices för stora projekt",
      excerpt: "Lärdomar från att skala TypeScript-projekt och undvika vanliga fallgropar.",
      date: "8 Mars 2024", 
      readTime: "6 min",
      category: "TypeScript",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800"
    },
    {
      title: "Modern CSS: Grid vs Flexbox i 2024",
      excerpt: "När ska du använda CSS Grid och när är Flexbox det bättre valet?",
      date: "2 Mars 2024",
      readTime: "5 min", 
      category: "CSS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
    },
    {
      title: "Optimera Web Performance med Next.js",
      excerpt: "Tekniker för att förbättra laddningstider och användarupplevelse.",
      date: "25 Februari 2024",
      readTime: "7 min",
      category: "Performance", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    }
  ];

  const categories = ["Alla", "React", "TypeScript", "CSS", "Performance", "Design"];

  return (
    <section className="py-20 bg-section-bg" id="blog">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Min <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jag delar mina tankar och erfarenheter om webbutveckling, design och teknikbranschen.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "shadow-glow" : "border-primary/30 hover:bg-primary/10"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          {blogPosts
            .filter(post => post.featured)
            .map((post) => (
              <Card
                key={post.title}
                className="overflow-hidden gradient-card shadow-hero group animate-slide-up"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-primary/20 text-primary">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-lg mb-6">
                      {post.excerpt}
                    </p>
                    
                    <Button className="self-start shadow-glow group">
                      Läs mer
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* Other Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts
            .filter(post => !post.featured)
            .map((post, index) => (
              <Card
                key={post.title}
                className="group overflow-hidden gradient-card shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-primary/30 text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <Button size="sm" variant="ghost" className="group p-0">
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
            Se alla artiklar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
