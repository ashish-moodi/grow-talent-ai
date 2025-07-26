import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Brain,
  Save,
  Download,
  Eye
} from "lucide-react";

const ResumeBuilder = () => {
  const [currentSection, setCurrentSection] = useState("personal");
  const [resumeData, setResumeData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      location: "",
      summary: ""
    }
  });

  const sections = [
    { id: "personal", label: "Personal Info", icon: User, complete: false },
    { id: "experience", label: "Work Experience", icon: Briefcase, complete: false },
    { id: "education", label: "Education", icon: GraduationCap, complete: false },
    { id: "skills", label: "Skills", icon: Award, complete: false },
  ];

  const handleInputChange = (field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Build Your Resume</h1>
          <p className="text-muted-foreground">Create a professional resume with AI assistance</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sections</CardTitle>
                <CardDescription>Complete each section to build your resume</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    variant={currentSection === section.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setCurrentSection(section.id)}
                  >
                    <section.icon className="mr-2 h-4 w-4" />
                    {section.label}
                    {section.complete && <Badge variant="success" className="ml-auto">✓</Badge>}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* AI Assistant Panel */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Brain className="mr-2 h-5 w-5 text-primary" />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded-lg border">
                    <p className="text-sm text-muted-foreground">
                      💡 <strong>Tip:</strong> Use action verbs like "developed," "managed," "created" to make your experience more impactful.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Brain className="mr-2 h-4 w-4" />
                    Generate Content
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Tell us about yourself</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={resumeData.personal.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={resumeData.personal.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={resumeData.personal.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={resumeData.personal.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="San Francisco, CA"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea
                    id="summary"
                    value={resumeData.personal.summary}
                    onChange={(e) => handleInputChange("summary", e.target.value)}
                    placeholder="Write a brief summary of your professional background..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="default">
                    <Save className="mr-2 h-4 w-4" />
                    Save Progress
                  </Button>
                  <Button variant="outline">
                    <Brain className="mr-2 h-4 w-4" />
                    AI Improve
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Live Preview</CardTitle>
                <CardDescription>See how your resume looks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white border rounded-lg p-4 text-sm shadow-sm">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-900">
                      {resumeData.personal.name || "Your Name"}
                    </h3>
                    <p className="text-gray-600">
                      {resumeData.personal.email || "your.email@example.com"}
                    </p>
                    <p className="text-gray-600">
                      {resumeData.personal.phone || "+1 (555) 123-4567"}
                    </p>
                    <p className="text-gray-600">
                      {resumeData.personal.location || "Your Location"}
                    </p>
                    {resumeData.personal.summary && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Summary</h4>
                        <p className="text-gray-700 text-xs leading-relaxed">
                          {resumeData.personal.summary}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" />
                    Full Preview
                  </Button>
                  <Button variant="default" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;