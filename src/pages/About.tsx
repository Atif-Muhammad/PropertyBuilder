import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Clock, CheckCircle, Target, Heart, Lightbulb } from "lucide-react";
import constructionTeam from "@/assets/construction-team.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate()
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every detail matters. We deliver construction projects with meticulous attention to quality and precision."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest communication, transparent pricing, and ethical business practices in every project."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing modern construction techniques and sustainable building practices for better results."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients, architects, and stakeholders to bring visions to life."
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" }
  ];

  const team = [
    {
      name: "John Mitchell",
      role: "Founder & CEO",
      experience: "25 years",
      description: "Licensed contractor with extensive experience in residential and commercial construction."
    },
    {
      name: "Sarah Williams",
      role: "Project Manager",
      experience: "15 years",
      description: "Expert in project coordination and client relations, ensuring smooth project execution."
    },
    {
      name: "Mike Thompson",
      role: "Lead Supervisor",
      experience: "20 years",
      description: "On-site safety expert and quality control specialist with proven track record."
    }
  ];

  const certifications = [
    "Licensed General Contractor (License #CON-123456)",
    "OSHA 30-Hour Safety Certified",
    "Better Business Bureau A+ Rating",
    "EPA RRP Certified",
    "LEED Green Building Certified",
    "Fully Insured ($2M Liability)"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About BuildPros Hub</h1>
            <p className="text-xl opacity-90 mb-8">
              For over 25 years, we've been building dreams and transforming communities with exceptional construction services.
              Our commitment to quality, safety, and client satisfaction has made us the trusted choice for construction projects across the region.
            </p>
            <div className="flex items-center  justify-center gap-x-5">
              <Button onClick={()=> navigate("/services")} variant="cta" size="lg">
                Our Services
              </Button>
              <Button onClick={()=> navigate("/projects")} variant="ghost" size="lg">
                Our Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-construction-concrete">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-construction-steel mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To deliver exceptional construction services that exceed client expectations while maintaining the highest standards of quality, safety, and professionalism.
                We build not just structures, but lasting relationships with our clients and communities.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Since our founding in 1999, we've grown from a small local contractor to a leading construction company,
                but we've never lost sight of our core values that guide every project we undertake.
              </p>
              {/* <Button variant="default">Learn About Our Process</Button> */}
            </div>
            <div>
              <img
                src={constructionTeam}
                alt="Our construction team"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values drive everything we do and guide our decisions in every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals who lead our construction projects to success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="font-semibold text-primary">{member.role}</CardDescription>
                  <Badge variant="secondary">{member.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Safety & Compliance</h2>
              <p className="text-lg opacity-90 mb-6">
                Safety is our top priority on every job site. We maintain rigorous safety standards and ensure all team members are properly trained and equipped.
              </p>
              <p className="text-lg opacity-90 mb-8">
                Our comprehensive insurance coverage and proper licensing give you peace of mind knowing your project is protected.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-8 h-8 text-construction-yellow" />
                <span className="text-lg font-semibold">Zero-Accident Safety Record</span>
              </div>
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-construction-yellow" />
                <span className="text-lg font-semibold">OSHA Compliance Certified</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Licenses & Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-construction-yellow flex-shrink-0" />
                    <span className="opacity-90">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-construction-concrete">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-construction-steel mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the BuildPros Hub difference. Let's discuss your construction project and how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={()=> navigate('/contact')} variant="default" size="lg">
              Schedule Consultation
            </Button>
            <Button onClick={()=> navigate('/projects')} variant="outline" size="lg">
              View Our Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;