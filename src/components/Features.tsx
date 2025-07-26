import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  FileText, 
  Target, 
  Zap, 
  Shield, 
  Download,
  PenTool,
  BarChart3,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Writing",
    description: "Get intelligent suggestions for every section of your resume with real-time AI assistance.",
    badge: "Smart"
  },
  {
    icon: Target,
    title: "ATS Optimization",
    description: "Ensure your resume passes Applicant Tracking Systems with keyword optimization.",
    badge: "Optimized"
  },
  {
    icon: BarChart3,
    title: "Resume Scoring",
    description: "Get instant feedback and scores to improve your resume's job-readiness.",
    badge: "Analytics"
  },
  {
    icon: FileText,
    title: "Multiple Templates",
    description: "Choose from professional templates designed for different industries and roles.",
    badge: "Variety"
  },
  {
    icon: PenTool,
    title: "LaTeX Editor",
    description: "Advanced LaTeX editing for technical professionals who need precise formatting.",
    badge: "Advanced"
  },
  {
    icon: Download,
    title: "Multiple Formats",
    description: "Download your resume in PDF, DOCX, or LaTeX formats with one click.",
    badge: "Flexible"
  },
  {
    icon: Shield,
    title: "Secure Storage",
    description: "Your data is encrypted and stored securely with enterprise-grade security.",
    badge: "Secure"
  },
  {
    icon: Zap,
    title: "Real-time Preview",
    description: "See changes instantly as you edit with our live preview feature.",
    badge: "Fast"
  },
  {
    icon: CheckCircle,
    title: "Grammar Check",
    description: "Built-in grammar and spell checking to ensure professional presentation.",
    badge: "Quality"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Our AI-powered platform provides all the tools and features you need to create 
            professional resumes that get noticed by employers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 p-2 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;