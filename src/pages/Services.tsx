import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Building, Hammer, Paintbrush, ClipboardList, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import whatsapp from "../assets/whatsapp.png"

const Services = () => {
  const navigate = useNavigate()
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, additions, and residential developments built to your exact specifications.",
      features: [
        "Custom Home Design & Build",
        "Home Additions & Extensions", 
        "New Home Construction",
        "Residential Developments",
        "Garage & Outbuilding Construction"
      ],
      pricing: "Starting from $200/sq ft"
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Professional commercial buildings designed for business success and operational efficiency.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Warehouses & Industrial",
        "Restaurant & Hospitality",
        "Medical Facilities"
      ],
      pricing: "Custom Pricing"
    },
    {
      icon: Hammer,
      title: "Remodeling & Renovation",
      description: "Transform your existing space with our comprehensive renovation and remodeling services.",
      features: [
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Basement Finishing",
        "Whole House Renovation",
        "Room Additions"
      ],
      pricing: "Starting from $50/sq ft"
    },
    {
      icon: Paintbrush,
      title: "Interior/Exterior Work",
      description: "Complete interior and exterior finishing services to perfect every detail of your project.",
      features: [
        "Flooring Installation",
        "Custom Cabinetry",
        "Painting & Finishing",
        "Roofing & Siding",
        "Windows & Doors"
      ],
      pricing: "Project-based"
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      description: "End-to-end project management ensuring your construction project stays on time and budget.",
      features: [
        "Construction Planning",
        "Permit Acquisition",
        "Subcontractor Coordination",
        "Quality Control",
        "Progress Reporting"
      ],
      pricing: "10-15% of project cost"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We meet to discuss your vision, requirements, and budget for the project."
    },
    {
      step: "2", 
      title: "Design & Planning",
      description: "Our team creates detailed plans and designs tailored to your needs."
    },
    {
      step: "3",
      title: "Permit & Approval",
      description: "We handle all necessary permits and regulatory approvals for your project."
    },
    {
      step: "4",
      title: "Construction",
      description: "Professional construction with regular updates and quality checkpoints."
    },
    {
      step: "5",
      title: "Final Inspection",
      description: "Thorough quality inspection and walkthrough before project completion."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Construction Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive construction services for residential and commercial projects. 
              From concept to completion, we deliver quality craftsmanship and exceptional service.
            </p>
            <Button onClick={()=> navigate("/contact")} variant="cta" size="lg">
              Request Service Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              Our Construction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional construction services tailored to meet your specific needs and exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{service.pricing}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-construction-steel">What's Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              Our Construction Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven 5-step process that ensures your project is completed on time, within budget, and to your exact specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-construction-steel mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-construction-steel mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-construction-steel">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed contractor with comprehensive insurance coverage for your protection.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-construction-steel">Quality Guaranteed</h3>
                    <p className="text-gray-600">We stand behind our work with comprehensive warranties and quality guarantees.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-construction-steel">On-Time Delivery</h3>
                    <p className="text-gray-600">Proven track record of completing projects on schedule and within budget.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-construction-steel">Expert Team</h3>
                    <p className="text-gray-600">Experienced professionals with specialized skills in all aspects of construction.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-construction-concrete p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-construction-steel mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-700 mb-6">
                Contact us today for a free consultation and detailed quote for your construction project.
              </p>
              <div className="space-y-3">
                <Button onClick={()=> navigate("/contact")} variant="default" className="w-full" size="lg">
                  Book Free Consultation
                </Button>
                <Button variant="link" className="w-full overflow-hidden" size="lg">
                  Get Instant Quote <img className="size-6" src={whatsapp} alt="" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Transform Your Space Today
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Don't wait to start your construction project. Our team is ready to help bring your vision to life with professional craftsmanship and exceptional service.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Call (555) 123-4567
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Services;