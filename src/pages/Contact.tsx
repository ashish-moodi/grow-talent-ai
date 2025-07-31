import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Twitter, Linkedin, Facebook, Star } from "lucide-react";
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
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-luxury-muted mb-8 max-w-2xl mx-auto">
              Have questions about CareerAI? We're here to help you succeed in your career journey.
            </p>
            <div className="flex justify-center items-center space-x-2 text-luxury-muted">
              <MessageCircle className="h-5 w-5" />
              <span>We typically respond within 2 hours</span>
            </div>
          </div>
        </div>
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-luxury rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-white/80 backdrop-blur border-luxury-border shadow-luxury hover-scale transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-luxury-charcoal flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span>Contact Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3 group cursor-pointer p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300">
                    <div className="p-2 bg-gradient-luxury rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-luxury-charcoal">Email</p>
                      <p className="text-luxury-muted group-hover:text-primary transition-colors">support@careerai.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 group cursor-pointer p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300">
                    <div className="p-2 bg-gradient-luxury rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-luxury-charcoal">Phone</p>
                      <p className="text-luxury-muted group-hover:text-primary transition-colors">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 group cursor-pointer p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300">
                    <div className="p-2 bg-gradient-luxury rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-luxury-charcoal">Office</p>
                      <p className="text-luxury-muted group-hover:text-primary transition-colors">123 Innovation Drive<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 group cursor-pointer p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300">
                    <div className="p-2 bg-gradient-luxury rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-luxury-charcoal">Business Hours</p>
                      <p className="text-luxury-muted group-hover:text-primary transition-colors">Mon - Fri: 9:00 AM - 6:00 PM PST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Card */}
              <Card className="bg-white/80 backdrop-blur border-luxury-border shadow-luxury hover-scale transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-luxury-charcoal">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <Twitter className="h-5 w-5 text-white" />
                    </div>
                    <div className="p-3 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <Facebook className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats Card */}
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur border-luxury-border shadow-luxury">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <div className="flex justify-center">
                      <Star className="h-8 w-8 text-yellow-500 fill-current" />
                    </div>
                    <h3 className="font-bold text-luxury-charcoal">Customer Satisfaction</h3>
                    <p className="text-2xl font-bold text-primary">98%</p>
                    <p className="text-sm text-luxury-muted">Based on 10,000+ reviews</p>
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
                    
                    <Button type="submit" className="w-full bg-gradient-luxury text-white hover-scale group">
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
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
      <section className="py-16 px-4 bg-gradient-to-br from-white/50 to-primary/5 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-luxury rounded-full mb-4">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-luxury-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-luxury-muted max-w-2xl mx-auto">
              Quick answers to common questions about CareerAI. Can't find what you're looking for? Feel free to reach out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur border-luxury-border shadow-luxury hover-scale transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-luxury rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-luxury-charcoal">How does CareerAI work?</h3>
                </div>
                <p className="text-luxury-muted group-hover:text-luxury-charcoal transition-colors duration-300">
                  CareerAI uses advanced AI to help you create professional resumes, optimize your job search, and improve your career prospects.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur border-luxury-border shadow-luxury hover-scale transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-luxury rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-luxury-charcoal">Is my data secure?</h3>
                </div>
                <p className="text-luxury-muted group-hover:text-luxury-charcoal transition-colors duration-300">
                  Yes, we use enterprise-grade security to protect your personal information and career data.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur border-luxury-border shadow-luxury hover-scale transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-luxury rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-luxury-charcoal">Can I cancel anytime?</h3>
                </div>
                <p className="text-luxury-muted group-hover:text-luxury-charcoal transition-colors duration-300">
                  Absolutely. You can cancel your subscription at any time with no hidden fees or penalties.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur border-luxury-border shadow-luxury hover-scale transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-luxury rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-luxury-charcoal">Do you offer support?</h3>
                </div>
                <p className="text-luxury-muted group-hover:text-luxury-charcoal transition-colors duration-300">
                  Yes, we provide 24/7 customer support to help you succeed in your career journey.
                </p>
              </div>
            </Card>
          </div>
          
          {/* Additional CTA section */}
          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur border-luxury-border shadow-luxury">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-luxury-charcoal">Still have questions?</h3>
                <p className="text-luxury-muted">Our support team is here to help you 24/7</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-luxury text-white hover-scale group">
                    <MessageCircle className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Start Live Chat
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white hover-scale">
                    <Phone className="h-4 w-4 mr-2" />
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;