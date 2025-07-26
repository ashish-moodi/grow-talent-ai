import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Briefcase, 
  TrendingUp, 
  Users, 
  Clock, 
  Star,
  ArrowRight,
  Target,
  Award,
  Eye
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Resume Score",
      value: "85",
      change: "+5",
      icon: Star,
      description: "Out of 100",
      color: "text-green-600",
    },
    {
      title: "Job Applications",
      value: "12",
      change: "+3",
      icon: Briefcase,
      description: "This month",
      color: "text-blue-600",
    },
    {
      title: "Profile Views",
      value: "47",
      change: "+12",
      icon: Eye,
      description: "This week",
      color: "text-purple-600",
    },
    {
      title: "Network",
      value: "156",
      change: "+8",
      icon: Users,
      description: "Connections",
      color: "text-orange-600",
    },
  ];

  const recentJobs = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$120k - $150k",
      posted: "2 days ago",
      match: 95,
    },
    {
      title: "Product Manager",
      company: "InnovateCo",
      location: "New York, NY",
      salary: "$110k - $140k",
      posted: "3 days ago",
      match: 88,
    },
    {
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "Remote",
      salary: "$100k - $130k",
      posted: "1 week ago",
      match: 82,
    },
  ];

  const quickActions = [
    {
      title: "Update Resume",
      description: "Last updated 2 weeks ago",
      icon: FileText,
      href: "/builder",
      variant: "default" as const,
    },
    {
      title: "Browse Jobs",
      description: "47 new matches today",
      icon: Briefcase,
      href: "/jobs",
      variant: "outline" as const,
    },
    {
      title: "View Profile",
      description: "Complete your profile",
      icon: Users,
      href: "/profile",
      variant: "outline" as const,
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-luxury-charcoal">Welcome back, John</h1>
        <p className="text-luxury-muted">Here's what's happening with your career journey today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-float bg-gradient-card border-0 transition-luxury hover:shadow-luxury">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-luxury-muted font-medium">{stat.title}</p>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-2xl font-bold text-luxury-charcoal">{stat.value}</h3>
                    <Badge variant="secondary" className={`text-xs ${stat.color} bg-muted/50`}>
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-xs text-luxury-muted">{stat.description}</p>
                </div>
                <div className={`p-3 rounded-lg bg-muted/20`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <Card className="shadow-float bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <span>Quick Actions</span>
              </CardTitle>
              <CardDescription>Get started with these common tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickActions.map((action) => (
                <div key={action.title} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 transition-luxury hover:bg-muted/30">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <action.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-luxury-charcoal">{action.title}</p>
                      <p className="text-sm text-luxury-muted">{action.description}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Resume Progress */}
          <Card className="shadow-float bg-gradient-card border-0 mt-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span>Resume Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-luxury-muted">Completeness</span>
                  <span className="font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-luxury-muted">Personal Info</span>
                  <Badge variant="default" className="text-xs">Complete</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-luxury-muted">Work Experience</span>
                  <Badge variant="default" className="text-xs">Complete</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-luxury-muted">Skills</span>
                  <Badge variant="secondary" className="text-xs">Incomplete</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Complete Resume
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recommended Jobs */}
        <div className="lg:col-span-2">
          <Card className="shadow-float bg-gradient-card border-0">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Recommended Jobs</span>
                  </CardTitle>
                  <CardDescription>Personalized job matches for you</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentJobs.map((job, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border bg-background/50 transition-luxury hover:shadow-float cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-luxury-charcoal">{job.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {job.match}% match
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-luxury-muted">
                        <span>{job.company}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3 text-luxury-muted" />
                        <span className="text-xs text-luxury-muted">{job.posted}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Apply
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;