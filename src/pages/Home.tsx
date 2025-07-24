import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, Users, Award, Clock, Shield, Phone } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import residentialProject from "@/assets/residential-project.jpg";
import commercialProject from "@/assets/commercial-project.jpg";
import renovationProject from "@/assets/renovation-project.jpg";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes and residential developments built to your specifications.",
      icon: "🏠",
    },
    {
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial facilities.",
      icon: "🏢",
    },
    {
      title: "Remodeling & Renovation",
      description: "Transform your existing space with our renovation expertise.",
      icon: "🔨",
    },
  ];

  const projects = [
    {
      title: "Luxury Family Home",
      category: "Residential",
      image: residentialProject,
      description: "5,000 sq ft custom home with modern amenities",
    },
    {
      title: "Corporate Office Complex",
      category: "Commercial",
      image: commercialProject,
      description: "50,000 sq ft office building with sustainable design",
    },
    {
      title: "Kitchen Renovation",
      category: "Renovation",
      image: renovationProject,
      description: "Complete kitchen makeover with premium finishes",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "BuildPros Hub exceeded our expectations. The quality of work and attention to detail was exceptional.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Business Owner",
      content: "Professional, on-time, and within budget. They transformed our commercial space beautifully.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Property Developer",
      content: "We've worked with BuildPros on multiple projects. They consistently deliver excellence.",
      rating: 5,
    },
  ];

  const trustBadges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Award, text: "BBB A+ Rated" },
    { icon: Users, text: "500+ Happy Clients" },
    { icon: Clock, text: "25+ Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building Your Vision Into Reality
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional construction services for residential and commercial projects.
            Quality craftsmanship, on-time delivery, and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate("/contact")} variant="hero" size="lg" className="text-lg px-8 py-4">
              Contact Us
            </Button>
            <Button onClick={() => navigate("/projects")} variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur border-white text-white hover:bg-white hover:text-gray-900">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-construction-concrete">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <badge.icon className="w-12 h-12 mx-auto mb-2 text-primary" />
                <p className="font-semibold text-construction-steel">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              Our Construction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From residential homes to commercial buildings, we deliver exceptional construction services tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                  <div className="text-center mt-6">
                    <Button variant="outline" onClick={() => navigate("/services")}>Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing our latest completed projects and construction excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button onClick={() => navigate("/projects")} variant="default" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-construction-yellow text-construction-yellow" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get free consultation for your next construction project.
            Our experts are ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="link" size="lg" className="text-lg px-8 py-4 text-white">
              Message on WhatsApp 
              {/* <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#25D366" d="M16.002 3.003C9.377 3.003 3.996 8.384 3.996 15.008c0 2.65.792 5.1 2.15 7.16L3 29l7.068-2.122a12.93 12.93 0 005.934 1.515c6.626 0 12.007-5.381 12.007-12.007S22.628 3.003 16.002 3.003zm0 21.836a10.362 10.362 0 01-5.28-1.45l-.378-.225-4.197 1.257 1.238-4.088-.246-.392a10.326 10.326 0 01-1.552-5.352c0-5.726 4.658-10.384 10.384-10.384 5.726 0 10.384 4.658 10.384 10.384s-4.658 10.384-10.384 10.384zm5.678-7.826c-.31-.155-1.837-.906-2.123-1.01-.285-.104-.494-.155-.703.155-.208.31-.806 1.01-.988 1.218-.182.208-.364.234-.674.078-.31-.155-1.311-.482-2.495-1.538-.922-.822-1.543-1.837-1.72-2.148-.182-.31-.02-.477.137-.632.14-.14.31-.364.465-.547.155-.182.206-.31.31-.517.104-.208.052-.39-.026-.547-.078-.155-.703-1.699-.964-2.32-.252-.604-.507-.52-.703-.53-.182-.008-.39-.01-.597-.01s-.547.078-.834.39c-.285.31-1.093 1.067-1.093 2.6s1.12 3.014 1.276 3.222c.155.208 2.205 3.377 5.345 4.736.748.322 1.331.515 1.785.66.75.238 1.434.205 1.976.125.603-.09 1.837-.75 2.098-1.478.26-.729.26-1.353.182-1.478-.078-.124-.286-.198-.597-.353z" />
              </svg> */}

            </Button>
            <Button variant="default" size="lg" className="text-lg px-8 py-4 border-white text-blue-800 bg-white hover:bg-white hover:text-primary">
              <Phone className="w-4 h-4 mr-2" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;