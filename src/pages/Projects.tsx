import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, DollarSign, Clock, Eye } from "lucide-react";
import residentialProject from "@/assets/residential-project.jpg";
import commercialProject from "@/assets/commercial-project.jpg";
import renovationProject from "@/assets/renovation-project.jpg";
import { useNavigate } from "react-router-dom";
import whatsapp from "../assets/whatsapp.png"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const navigate = useNavigate();
  
  const projects = [
    {
      id: 1,
      title: "Luxury Family Estate",
      category: "Residential",
      location: "Westfield Heights",
      duration: "8 months",
      budget: "$750,000",
      year: "2024",
      image: residentialProject,
      description: "A stunning 5,000 sq ft custom home featuring modern amenities, sustainable materials, and luxury finishes throughout.",
      client: "Johnson Family",
      challenges: "Complex terrain and strict HOA requirements",
      solutions: "Custom foundation design and premium material selection",
      features: [
        "5 bedrooms, 4.5 bathrooms",
        "Gourmet kitchen with granite counters",
        "Master suite with walk-in closet",
        "3-car garage with workshop",
        "Landscaped outdoor living space"
      ]
    },
    {
      id: 2,
      title: "Modern Office Complex", 
      category: "Commercial",
      location: "Downtown Business District",
      duration: "12 months",
      budget: "$2.5M",
      year: "2023",
      image: commercialProject,
      description: "A 50,000 sq ft Class A office building with sustainable design features and modern workplace amenities.",
      client: "TechCorp Industries",
      challenges: "Tight urban site and environmental regulations",
      solutions: "Vertical construction and green building techniques",
      features: [
        "LEED Gold certified design",
        "Open floor plan with flexible spaces",
        "Rooftop garden and terrace",
        "Electric vehicle charging stations",
        "High-efficiency HVAC system"
      ]
    },
    {
      id: 3,
      title: "Historic Home Restoration",
      category: "Renovation",
      location: "Heritage District", 
      duration: "6 months",
      budget: "$350,000",
      year: "2024",
      image: renovationProject,
      description: "Complete renovation of a 1920s craftsman home, preserving historic character while adding modern conveniences.",
      client: "Williams Family",
      challenges: "Preserving historical integrity while modernizing",
      solutions: "Period-appropriate materials and hidden modern systems",
      features: [
        "Restored original hardwood floors",
        "Updated kitchen with period styling",
        "Modern electrical and plumbing",
        "Insulation and energy efficiency upgrades",
        "Preserved original architectural details"
      ]
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Years Experience", value: "25+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "On-Time Delivery", value: "95%" }
  ];

  const handelModalClose = ()=>{
    setSelectedProject(null);
    navigate('/contact')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Project Portfolio</h1>
            <p className="text-xl opacity-90 mb-8">
              Explore our completed construction projects showcasing quality craftsmanship, 
              innovative design, and successful project delivery across residential and commercial sectors.
            </p>
            <Button onClick={()=> navigate("/contact")} variant="cta" size="lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-construction-concrete">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our portfolio of completed construction projects, each showcasing our commitment to quality and client satisfaction.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="Residential">Residential</TabsTrigger>
              <TabsTrigger value="Commercial">Commercial</TabsTrigger>
              <TabsTrigger value="Renovation">Renovation</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-white">
                        {project.category}
                      </Badge>
                      <div className="absolute top-4 right-4">
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="bg-white/90 hover:bg-white"
                          onClick={() => setSelectedProject(project)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {["Residential", "Commercial", "Renovation"].map((category) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter((project) => project.category === category)
                    .map((project) => (
                      <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                        <div className="relative">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-4 left-4 bg-primary text-white">
                            {project.category}
                          </Badge>
                          <div className="absolute top-4 right-4">
                            <Button 
                              size="sm" 
                              variant="secondary"
                              className="bg-white/90 hover:bg-white"
                              onClick={() => setSelectedProject(project)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{project.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{project.year}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <Button 
                className="absolute top-4 right-4"
                variant="secondary"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </Button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-primary text-white">{selectedProject.category}</Badge>
                <span className="text-gray-600">{selectedProject.year}</span>
              </div>
              <h2 className="text-3xl font-bold text-construction-steel mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-700 mb-6">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-construction-steel mb-3">Project Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Client:</span>
                      <span className="text-gray-600">{selectedProject.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{selectedProject.budget}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-construction-steel mb-3">Key Features</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-construction-steel mb-2">Challenges</h3>
                  <p className="text-gray-600 text-sm">{selectedProject.challenges}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-construction-steel mb-2">Our Solutions</h3>
                  <p className="text-gray-600 text-sm">{selectedProject.solutions}</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="default" onClick={handelModalClose}>
                  Start Similar Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Create Your Next Project?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our portfolio of satisfied clients. Let's discuss your construction project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={()=> navigate('/contact')} variant="cta" size="lg" className="text-lg px-8 py-4">
              Get Project Quote
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-blue-700 hover:bg-white hover:text-primary hover:underline">
              Schedule Consultation <img className="size-7" src={whatsapp} alt="" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;