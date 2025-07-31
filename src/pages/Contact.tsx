import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-luxury-muted mb-8 max-w-2xl mx-auto">
            Have questions about CareerAI? We're here to help you succeed in your career journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-white/80 backdrop-blur border-luxury-border shadow-luxury">
                <CardHeader>
                  <CardTitle className="text-luxury-charcoal">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-luxury rounded-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-luxury-charcoal">Email</p>
                      <p className="text-luxury-muted">support@careerai.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-luxury rounded-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-luxury-charcoal">Phone</p>
                      <p className="text-luxury-muted">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-luxury rounded-lg">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-luxury-charcoal">Office</p>
                      <p className="text-luxury-muted">123 Innovation Drive<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-luxury rounded-lg">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-luxury-charcoal">Business Hours</p>
                      <p className="text-luxury-muted">Mon - Fri: 9:00 AM - 6:00 PM PST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/80 backdrop-blur border-luxury-border shadow-luxury">
                <CardHeader>
                  <CardTitle className="text-luxury-charcoal">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-luxury text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-luxury-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-luxury-muted">
              Quick answers to common questions about CareerAI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-luxury-charcoal">How does CareerAI work?</h3>
              <p className="text-luxury-muted">
                CareerAI uses advanced AI to help you create professional resumes, optimize your job search, and improve your career prospects.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-luxury-charcoal">Is my data secure?</h3>
              <p className="text-luxury-muted">
                Yes, we use enterprise-grade security to protect your personal information and career data.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-luxury-charcoal">Can I cancel anytime?</h3>
              <p className="text-luxury-muted">
                Absolutely. You can cancel your subscription at any time with no hidden fees or penalties.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-luxury-charcoal">Do you offer support?</h3>
              <p className="text-luxury-muted">
                Yes, we provide 24/7 customer support to help you succeed in your career journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;