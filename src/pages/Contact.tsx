import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-4567", "24/7 Emergency Service"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@buildpros.com", "Response within 2 hours"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Construction Ave", "Builder City, BC 12345"],
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM"],
      action: "Schedule Visit"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl opacity-90 mb-8">
              Ready to start your construction project? Contact us today for a free consultation and detailed quote. 
              Our team is here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Call (555) 123-4567
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <info.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request a Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Construction</SelectItem>
                      <SelectItem value="commercial">Commercial Construction</SelectItem>
                      <SelectItem value="renovation">Remodeling & Renovation</SelectItem>
                      <SelectItem value="interior">Interior/Exterior Work</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under50k">Under $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                      <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                      <SelectItem value="over500k">Over $500,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Preferred Timeline</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="When would you like to start?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="1-3months">1-3 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="6-12months">6-12 months</SelectItem>
                      <SelectItem value="planning">Just planning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your project, including size, scope, and any specific requirements..."
                    className="min-h-[120px]"
                    required 
                  />
                </div>

                <Button variant="default" className="w-full" size="lg">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Quote Request
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We'll respond within 24 hours with a detailed quote.
                </p>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                  <CardDescription>
                    Visit our office or construction yard to discuss your project in person.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-construction-concrete h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-semibold">Google Maps Integration</p>
                      <p className="text-sm">123 Construction Ave, Builder City, BC 12345</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-accent text-accent-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Emergency Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Need emergency construction or repair services? We're available 24/7 for urgent situations.
                  </p>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-accent">
                    Call Emergency Line
                  </Button>
                </CardContent>
              </Card>

              {/* Additional Contact Methods */}
              <Card>
                <CardHeader>
                  <CardTitle>Other Ways to Reach Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>General Inquiries:</span>
                    <span className="text-primary font-semibold">info@buildpros.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Project Manager:</span>
                    <span className="text-primary font-semibold">projects@buildpros.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Billing Questions:</span>
                    <span className="text-primary font-semibold">billing@buildpros.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Emergency Line:</span>
                    <span className="text-primary font-semibold">(555) 911-HELP</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-construction-concrete">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-construction-steel mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Don't wait to start your construction project. Contact us today and let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;