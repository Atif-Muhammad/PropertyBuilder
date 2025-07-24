import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FAQ = () => {

  const navigate = useNavigate()
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "How long has BuildPros Hub been in business?",
          answer: "BuildPros Hub has been serving the construction industry for over 25 years. We started as a small local contractor and have grown into a leading construction company while maintaining our commitment to quality and client satisfaction."
        },
        {
          question: "What areas do you serve?",
          answer: "We primarily serve the greater metropolitan area and surrounding communities within a 50-mile radius of our headquarters. For larger commercial projects, we may extend our service area. Contact us to discuss your specific location."
        },
        {
          question: "Are you licensed and insured?",
          answer: "Yes, BuildPros Hub is fully licensed (License #CON-123456) and insured with $2 million in liability coverage. We also carry workers' compensation insurance and are bonded for your protection."
        }
      ]
    },
    {
      title: "Project Planning & Pricing",
      faqs: [
        {
          question: "How much do construction projects typically cost?",
          answer: "Project costs vary significantly based on size, complexity, materials, and location. Residential projects typically start around $200/sq ft for new construction, while renovations start at $50/sq ft. We provide detailed quotes after an initial consultation."
        },
        {
          question: "Do you provide free estimates?",
          answer: "Yes, we provide free initial consultations and estimates for all projects. This includes a site visit, discussion of your needs, and a preliminary cost estimate. Detailed architectural plans may require additional fees."
        },
        {
          question: "How long does the planning phase take?",
          answer: "The planning phase typically takes 2-6 weeks depending on project complexity. This includes design development, permit applications, and finalizing contracts. We'll provide a detailed timeline during your consultation."
        },
        {
          question: "What's included in your project estimates?",
          answer: "Our estimates include materials, labor, permits, waste disposal, and project management. We provide detailed breakdowns so you understand exactly what's included. Any potential additional costs are clearly outlined."
        }
      ]
    },
    {
      title: "Construction Process",
      faqs: [
        {
          question: "How long do construction projects take?",
          answer: "Timeline depends on project scope: small renovations (2-8 weeks), large renovations (2-6 months), custom homes (6-12 months), commercial buildings (8-18 months). Weather and permit approval can affect schedules."
        },
        {
          question: "What permits are required and who handles them?",
          answer: "Permit requirements vary by project type and location. We handle all permit applications and approvals as part of our service. This includes building permits, electrical permits, plumbing permits, and any special use permits required."
        },
        {
          question: "How do you ensure quality control?",
          answer: "We have multiple quality checkpoints throughout each project, including material inspections, progress reviews, and final walkthroughs. Our supervisors conduct daily inspections, and we welcome client involvement in the quality process."
        },
        {
          question: "What happens if there are delays or issues?",
          answer: "We maintain open communication and will notify you immediately of any potential delays. Our project managers work proactively to minimize disruptions and find solutions. Any significant changes are discussed and approved before proceeding."
        }
      ]
    },
    {
      title: "Materials & Warranties",
      faqs: [
        {
          question: "Can I choose my own materials and fixtures?",
          answer: "Absolutely! We welcome client involvement in material selection. We can work with your choices or provide recommendations based on budget and quality requirements. We'll help ensure all materials meet building codes and project specifications."
        },
        {
          question: "Do you offer warranties on your work?",
          answer: "Yes, we provide a comprehensive 2-year warranty on workmanship and a 1-year warranty on materials. Major systems like roofing and structural work carry extended warranties. Manufacturer warranties on appliances and fixtures are passed through to you."
        },
        {
          question: "What if something needs repair after completion?",
          answer: "Contact us immediately if you notice any issues. Warranty items are addressed promptly at no charge. For non-warranty items, we offer competitive rates for ongoing maintenance and repairs."
        }
      ]
    },
    {
      title: "Payment & Financing",
      faqs: [
        {
          question: "What are your payment terms?",
          answer: "We typically require a small deposit to begin planning, with progress payments tied to project milestones. Final payment is due upon completion and your satisfaction. We never require large upfront payments."
        },
        {
          question: "Do you offer financing options?",
          answer: "Yes, we partner with several financing companies to offer competitive rates for qualified customers. We can help you explore options including construction loans, home equity lines of credit, and personal loans."
        },
        {
          question: "What forms of payment do you accept?",
          answer: "We accept checks, bank transfers, and credit cards. For larger projects, we can arrange automated payment schedules. All payments are processed through secure, encrypted systems."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl opacity-90 mb-8">
              Find answers to common questions about our construction services, processes, and policies. 
              Can't find what you're looking for? Contact us directly.
            </p>
            <Button onClick={()=> navigate("/contact")} variant="cta" size="lg">
              Ask a Question
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-construction-steel mb-6">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-gray-200 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <span className="font-semibold text-construction-steel">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-construction-concrete">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-construction-steel mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-700">
                Our team is here to help. Reach out to us using any of the methods below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>
                    Speak directly with our team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-construction-steel mb-4">
                    (555) 123-4567
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Mon-Fri: 7:00 AM - 6:00 PM<br />
                    Sat: 8:00 AM - 4:00 PM
                  </p>
                  {/* <Button variant="outline" className="w-full">
                    Call Now
                  </Button> */}
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>
                    Send us your questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-construction-steel mb-4">
                    info@buildpros.com
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    We respond within 2 hours<br />
                    during business hours
                  </p>
                  {/* <Button variant="outline" className="w-full">
                    Send Email
                  </Button> */}
                </CardContent>
              </Card>

              {/* <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Schedule Consultation</CardTitle>
                  <CardDescription>
                    Meet with our experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-construction-steel mb-4">
                    Free Consultation
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Discuss your project<br />
                    and get expert advice
                  </p>
                  <Button variant="default" className="w-full">
                    Book Meeting
                  </Button>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-construction-steel mb-8">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="text-left hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Construction Blog</CardTitle>
                  <CardDescription>
                    Tips, insights, and industry news from our construction experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Read Blog Posts
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-left hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Project Gallery</CardTitle>
                  <CardDescription>
                    Browse our completed projects for inspiration and ideas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    View Portfolio
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default FAQ;