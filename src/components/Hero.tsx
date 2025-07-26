import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container relative mx-auto px-4 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm">
                <Sparkles className="mr-2 h-4 w-4 text-primary" />
                AI-Powered Career Development
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                Build Your{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Perfect Resume
                </span>{" "}
                with AI
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Create professional resumes that stand out. Get AI-powered suggestions, 
                real-time feedback, and ATS optimization to land your dream job.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="/builder">
                  Start Building Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                View Templates
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>10,000+ users</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="AI Resume Builder Interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-success to-success/80 text-success-foreground rounded-full px-4 py-2 shadow-lg">
              <div className="flex items-center space-x-2 text-sm font-medium">
                <div className="w-2 h-2 bg-success-foreground rounded-full"></div>
                <span>AI Powered</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border shadow-lg rounded-xl px-4 py-3">
              <div className="text-sm font-medium">Resume Score</div>
              <div className="text-2xl font-bold text-primary">92/100</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;