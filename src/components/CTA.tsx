import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary via-primary-glow to-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-primary-foreground mb-6">
            <Sparkles className="mr-2 h-4 w-4" />
            Ready to transform your career?
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary-foreground mb-6">
            Start Building Your Future Today
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already transformed their careers 
            with our AI-powered resume builder. Your dream job is just one click away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg group"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              View Demo
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-primary-foreground/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground">10,000+</div>
              <div className="text-sm">Resumes Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground">4.9/5</div>
              <div className="text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;