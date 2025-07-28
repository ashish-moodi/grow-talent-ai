import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award, 
  ArrowRight, 
  CheckCircle,
  Star,
  Zap,
  Brain,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const About = () => {
  const stats = [
    { label: "Resumes Created", value: "50K+", icon: Briefcase },
    { label: "Job Placements", value: "15K+", icon: Target },
    { label: "AI Improvements", value: "200K+", icon: Brain },
    { label: "Success Rate", value: "85%", icon: Award },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Democratizing career opportunities through AI-powered tools that level the playing field for all job seekers."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Leveraging cutting-edge AI technology to provide personalized career guidance and resume optimization."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every feature is designed with user experience in mind, ensuring intuitive and effective career tools."
    },
    {
      icon: Award,
      title: "Results-Focused",
      description: "Committed to delivering measurable outcomes that help users land their dream jobs faster."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      background: "Former Google recruiter with 10+ years in talent acquisition",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder", 
      background: "AI/ML expert, previously at OpenAI and Microsoft Research",
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      background: "UX design leader from LinkedIn, passionate about career development",
      avatar: "EW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            <Star className="mr-2 h-3 w-3" />
            About CareerAI
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Revolutionizing Career
            <span className="block bg-gradient-luxury bg-clip-text text-transparent">
              Success with AI
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We believe everyone deserves access to professional-grade career tools. 
            Our AI-powered platform helps job seekers create compelling resumes, 
            discover perfect opportunities, and accelerate their career growth.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="h-12 px-8" asChild>
              <Link to="/builder">
                <Zap className="mr-2 h-5 w-5" />
                Start Building Resume
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8" asChild>
              <Link to="/dashboard">
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center border-luxury">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-center">
              CareerAI was born from a simple observation: job searching shouldn't be a full-time job. 
              After witnessing countless talented individuals struggle with outdated career tools and 
              biased hiring processes, our founders set out to democratize career success.
            </p>
            <p className="text-center mt-6">
              Today, we're proud to serve thousands of job seekers worldwide, helping them showcase 
              their true potential through AI-optimized resumes, personalized job matching, and 
              data-driven career insights.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 py-16 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="border-luxury hover:shadow-luxury transition-luxury">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A diverse group of career experts, AI researchers, and product innovators 
            united by the mission to transform how people navigate their careers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center border-luxury">
                <CardContent className="pt-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-luxury flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-luxury text-white border-0 max-w-4xl mx-auto">
          <CardContent className="pt-12 pb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of professionals who've accelerated their career growth with CareerAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="h-12 px-8" asChild>
                <Link to="/builder">
                  <Zap className="mr-2 h-5 w-5" />
                  Create Your Resume
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 bg-white/10 hover:bg-white/20 text-white border-white/30" asChild>
                <Link to="/auth/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;