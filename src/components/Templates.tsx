import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Star } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Professional",
    description: "Clean and modern design perfect for corporate roles",
    category: "Business",
    popularity: 95,
    image: "/api/placeholder/300/400",
    features: ["ATS-Friendly", "Clean Layout", "Professional"]
  },
  {
    id: 2,
    name: "Creative",
    description: "Stand out with this visually appealing template",
    category: "Design",
    popularity: 88,
    image: "/api/placeholder/300/400",
    features: ["Creative", "Color Accents", "Modern"]
  },
  {
    id: 3,
    name: "Technical",
    description: "Ideal for software engineers and tech professionals",
    category: "Technology",
    popularity: 92,
    image: "/api/placeholder/300/400",
    features: ["Tech-Focused", "Skills Highlight", "Clean"]
  },
  {
    id: 4,
    name: "Executive",
    description: "Sophisticated design for senior leadership roles",
    category: "Leadership",
    popularity: 89,
    image: "/api/placeholder/300/400",
    features: ["Executive", "Sophisticated", "Premium"]
  },
  {
    id: 5,
    name: "Academic",
    description: "Perfect for research and academic positions",
    category: "Education",
    popularity: 79,
    image: "/api/placeholder/300/400",
    features: ["Academic", "Publications", "Research"]
  },
  {
    id: 6,
    name: "Minimalist",
    description: "Simple and elegant with focus on content",
    category: "General",
    popularity: 91,
    image: "/api/placeholder/300/400",
    features: ["Minimalist", "Clean", "Elegant"]
  }
];

const Templates = () => {
  return (
    <section id="templates" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Templates
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Choose Your Perfect{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Template
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Select from our collection of professionally designed templates, 
            each optimized for different industries and career levels.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-muted to-muted/50 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">
                          {template.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Preview</p>
                    </div>
                  </div>
                  
                  {/* Popularity badge */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="default" className="bg-white/90 text-foreground backdrop-blur-sm">
                      <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
                      {template.popularity}%
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {template.category}
                    </Badge>
                  </div>
                  <CardDescription>{template.description}</CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {template.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 group-hover:border-primary">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Templates;