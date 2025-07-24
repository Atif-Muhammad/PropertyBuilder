import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, Award, Clock, Users, CheckCircle, Star, 
  Wrench, Heart, Target, Lightbulb, TrendingUp, Phone 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {

  const navigate = useNavigate()
  const differentiators = [
    {
      icon: Clock,
      title: "25+ Years Experience",
      description: "Over two decades of construction expertise, from small renovations to large commercial projects.",
      stats: "500+ projects completed"
    },
    {
      icon: Shield,
      title: "Licensed & Fully Insured",
      description: "Complete protection with $2M liability coverage, workers comp, and proper licensing.",
      stats: "Zero liability claims"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "We stand behind our work with comprehensive warranties and rigorous quality control.",
      stats: "2-year workmanship warranty"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled craftsmen, project managers, and designers working together for your success.",
      stats: "50+ certified professionals"
    },
    {
      icon: TrendingUp,
      title: "On-Time, On-Budget",
      description: "Proven track record of delivering projects on schedule and within budget constraints.",
      stats: "95% on-time completion rate"
    },
    {
      icon: Heart,
      title: "Client-Focused Service",
      description: "Personalized attention and clear communication throughout your entire project journey.",
      stats: "98% client satisfaction"
    }
  ];

  const certifications = [
    {
      title: "Better Business Bureau",
      grade: "A+ Rating",
      description: "Highest BBB rating for ethical business practices"
    },
    {
      title: "OSHA Safety Certified",
      grade: "30-Hour Certified",
      description: "Comprehensive safety training and compliance"
    },
    {
      title: "LEED Certification",
      grade: "Green Building",
      description: "Sustainable construction practices and materials"
    },
    {
      title: "EPA RRP Certified",
      grade: "Lead-Safe",
      description: "Certified for renovation and painting projects"
    }
  ];

  const testimonialHighlights = [
    {
      quote: "BuildPros Hub transformed our vision into reality. The attention to detail and professionalism was outstanding.",
      author: "Sarah Johnson",
      project: "Custom Family Home",
      rating: 5
    },
    {
      quote: "On time, on budget, and exceptional quality. They made our commercial project seamless and stress-free.",
      author: "Mike Chen",
      project: "Office Building Renovation",
      rating: 5
    },
    {
      quote: "The team went above and beyond to ensure our historic renovation preserved the original character.",
      author: "Emily Williams",
      project: "Historic Home Restoration",
      rating: 5
    }
  ];

  const partners = [
    "Home Depot Pro", "Lowe's Pro", "Sherwin-Williams", "Kohler", 
    "American Standard", "Carrier HVAC", "Owens Corning", "CertainTeed"
  ];

  const awards = [
    {
      year: "2024",
      title: "Contractor of the Year",
      organization: "Builder's Association"
    },
    {
      year: "2023", 
      title: "Excellence in Commercial Construction",
      organization: "Chamber of Commerce"
    },
    {
      year: "2022",
      title: "Safety Excellence Award",
      organization: "Construction Safety Council"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Why Choose BuildPros Hub?</h1>
            <p className="text-xl opacity-90 mb-8">
              When you choose BuildPros Hub, you're choosing a construction partner committed to excellence, 
              integrity, and your complete satisfaction. Discover what sets us apart from the competition.
            </p>
            <Button onClick={()=> navigate("/contact")} variant="cta" size="lg">
              Start Your Project Today
            </Button>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence goes beyond just building structures—we build lasting relationships and exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="h-full text-center hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary">
                <CardHeader>
                  <item.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{item.stats}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-construction-concrete">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-xl text-gray-700">
              Our commitment to excellence is recognized by industry leaders and regulatory bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-construction-steel mb-6">Industry Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-center p-4">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-construction-steel">{cert.title}</h4>
                        <p className="text-primary font-medium">{cert.grade}</p>
                        <p className="text-sm text-gray-600">{cert.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-2xl font-semibold text-construction-steel mb-6">Recent Awards</h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-center p-4">
                      <div className="w-16 h-16 bg-construction-yellow rounded-lg flex items-center justify-center mr-4">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-construction-steel">{award.title}</h4>
                        <p className="text-construction-yellow font-medium">{award.year}</p>
                        <p className="text-sm text-gray-600">{award.organization}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it—hear from clients who've experienced the BuildPros Hub difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialHighlights.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-construction-yellow text-construction-yellow" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 italic text-base leading-relaxed">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-construction-steel">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* <Button variant="outline" size="lg">
              Read More Reviews
            </Button> */}
          </div>
        </div>
      </section>

      {/* Partners & Suppliers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              Trusted Partners & Suppliers
            </h2>
            <p className="text-xl text-gray-600">
              We work with industry-leading suppliers to ensure the highest quality materials and products.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-construction-concrete rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Wrench className="w-8 h-8 text-construction-steel" />
                </div>
                <p className="font-medium text-construction-steel">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Excellence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-construction-steel mb-6">
                Our Commitment to Excellence
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-construction-steel mb-2">Precision Planning</h3>
                    <p className="text-gray-600">Detailed project planning ensures every aspect is considered before breaking ground.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-construction-steel mb-2">Innovative Solutions</h3>
                    <p className="text-gray-600">We embrace new technologies and methods to deliver better results more efficiently.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-construction-steel mb-2">Collaborative Approach</h3>
                    <p className="text-gray-600">We work closely with you throughout the entire process to ensure your vision becomes reality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-construction-steel mb-2">Safety First</h3>
                    <p className="text-gray-600">Comprehensive safety protocols protect our workers, your property, and your investment.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
              <p className="text-lg opacity-90 mb-6">
                Join hundreds of satisfied clients who've chosen BuildPros Hub for their construction needs.
              </p>
              <div className="space-y-3">
                <Button onClick={()=> navigate("/contact")} variant="cta" className="w-full" size="lg">
                  Get Free Consultation
                </Button>
                <Button variant="ghost" className="w-full border-white text-white hover:bg-white hover:text-primary" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-construction-steel text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Choose "Sami B-Grader" for Your Next Project
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the difference that 25+ years of construction expertise, unwavering commitment to quality, 
            and genuine care for our clients can make in your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={()=> navigate("/contact")} variant="cta" size="lg" className="text-lg px-8 py-4">
              Start Your Project
            </Button>
            <Button onClick={()=> navigate("/projects")} variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-black hover:bg-white hover:text-construction-steel">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;