"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// This would typically come from a database or API
const getServiceData = (id: string) => {
  // Mock data for demonstration
  const services = {
    "structural-engineering": {
      id: "structural-engineering",
      title: "Structural Engineering",
      description:
        "Expert structural design and analysis for buildings, bridges, and infrastructure projects of all sizes.",
      fullDescription: `
        <p>Our structural engineering services provide comprehensive solutions for all types of structures, from residential buildings to complex infrastructure projects. Our team of experienced engineers uses advanced analysis and design techniques to ensure the safety, functionality, and durability of your structures.</p>
        
        <p>We specialize in designing structures that can withstand various loads and environmental conditions, including seismic forces, wind loads, and extreme weather events. Our approach combines technical expertise with innovative thinking to deliver cost-effective and sustainable structural solutions.</p>
        
        <h3>Our Structural Engineering Process</h3>
        <p>Our structural engineering process begins with a thorough assessment of your project requirements and site conditions. We then develop conceptual designs that align with your architectural vision and functional needs. Through iterative analysis and refinement, we optimize the structural system to achieve the perfect balance of safety, performance, and cost-efficiency.</p>
        
        <p>Throughout the design process, we maintain close communication with all stakeholders to ensure that the structural design integrates seamlessly with other building systems and meets all project objectives.</p>
        
        <h3>Advanced Structural Analysis</h3>
        <p>We utilize state-of-the-art software and analysis techniques to model and evaluate structural behavior under various loading conditions. This allows us to identify potential issues early in the design process and develop effective solutions that enhance structural performance and longevity.</p>
        
        <p>Our structural analysis capabilities include:</p>
        <ul>
          <li>Linear and non-linear analysis</li>
          <li>Dynamic and seismic analysis</li>
          <li>Finite element modeling</li>
          <li>Wind and blast load analysis</li>
          <li>Progressive collapse analysis</li>
          <li>Vibration analysis</li>
        </ul>
        
        <h3>Materials Expertise</h3>
        <p>Our structural engineers have extensive experience working with a wide range of construction materials, including:</p>
        <ul>
          <li>Reinforced and prestressed concrete</li>
          <li>Structural steel</li>
          <li>Timber and engineered wood products</li>
          <li>Masonry</li>
          <li>Composite materials</li>
          <li>Innovative and sustainable materials</li>
        </ul>
        
        <p>This diverse materials expertise allows us to select the most appropriate materials for your project based on structural requirements, budget constraints, sustainability goals, and aesthetic preferences.</p>
      `,
      image: "/placeholder.svg?height=800&width=1200",
      features: [
        "Structural design and analysis",
        "Seismic design and retrofitting",
        "Structural inspections and assessments",
        "Foundation design",
        "Reinforced concrete design",
        "Steel structure design",
        "Timber and masonry structures",
        "Structural rehabilitation",
      ],
      benefits: [
        "Ensure structural safety and code compliance",
        "Optimize material usage and reduce costs",
        "Extend the lifespan of structures",
        "Enhance building performance and functionality",
        "Integrate sustainable design principles",
      ],
      projects: [
        {
          title: "Commercial Tower",
          description: "A 35-story commercial tower with state-of-the-art facilities and sustainable design.",
          image: "/placeholder.svg?height=600&width=800",
          link: "/projects/completed/commercial-tower",
        },
        {
          title: "Highway Bridge",
          description: "A 1.2km reinforced concrete bridge connecting two major highways.",
          image: "/placeholder.svg?height=600&width=800",
          link: "/projects/completed/highway-bridge",
        },
      ],
      relatedServices: ["construction-management", "project-planning", "renovation"],
    },
    "construction-management": {
      id: "construction-management",
      title: "Construction Management",
      description:
        "Comprehensive construction management services to ensure your project is completed on time and within budget.",
      fullDescription: `
        <p>Our construction management services provide comprehensive oversight and coordination of your construction project from inception to completion. We act as your representative, managing all aspects of the construction process to ensure that your project is delivered on time, within budget, and to the highest quality standards.</p>
        
        <p>With our experienced team of construction professionals, we bring expertise in project planning, scheduling, cost control, quality management, and contract administration to every project we undertake.</p>
        
        <h3>Pre-Construction Services</h3>
        <p>Our involvement in the early stages of your project can significantly impact its success. During the pre-construction phase, we provide valuable input on:</p>
        <ul>
          <li>Project feasibility and budgeting</li>
          <li>Schedule development and optimization</li>
          <li>Value engineering and cost analysis</li>
          <li>Constructability reviews</li>
          <li>Procurement strategies</li>
          <li>Risk assessment and mitigation planning</li>
        </ul>
        
        <p>By addressing potential challenges before construction begins, we help establish a solid foundation for project success and minimize costly changes during the construction phase.</p>
        
        <h3>Construction Phase Services</h3>
        <p>During construction, our team provides comprehensive management and oversight to ensure that work progresses according to plan. Our construction phase services include:</p>
        <ul>
          <li>Project scheduling and progress monitoring</li>
          <li>Cost control and budget management</li>
          <li>Quality assurance and quality control</li>
          <li>Safety program implementation and monitoring</li>
          <li>Change order management</li>
          <li>Document control and reporting</li>
          <li>Subcontractor coordination and management</li>
          <li>Issue resolution and decision support</li>
        </ul>
        
        <p>We maintain clear and consistent communication with all project stakeholders, providing regular updates on project status, addressing concerns promptly, and facilitating collaborative problem-solving.</p>
        
        <h3>Project Closeout</h3>
        <p>As your project nears completion, we manage the closeout process to ensure a smooth transition from construction to occupancy. Our closeout services include:</p>
        <ul>
          <li>Final inspections and punch list management</li>
          <li>Systems testing and commissioning</li>
          <li>Documentation collection and organization</li>
          <li>Training coordination for building systems</li>
          <li>Warranty management</li>
          <li>Final cost reconciliation</li>
          <li>Project evaluation and lessons learned</li>
        </ul>
      `,
      image: "/placeholder.svg?height=800&width=1200",
      features: [
        "Project scheduling and planning",
        "Cost estimation and budgeting",
        "Quality control and assurance",
        "Contract administration",
        "Site supervision and management",
        "Risk management",
        "Procurement management",
        "Health and safety compliance",
      ],
      benefits: [
        "Reduce project costs through efficient management",
        "Minimize delays and ensure timely completion",
        "Enhance quality control and reduce defects",
        "Improve communication among project stakeholders",
        "Mitigate risks and resolve issues promptly",
      ],
      projects: [
        {
          title: "Modern Office Complex",
          description: "A state-of-the-art office building with sustainable features and innovative design.",
          image: "/placeholder.svg?height=600&width=800",
          link: "/projects/office-complex",
        },
        {
          title: "Residential Tower",
          description:
            "Luxury residential tower with 45 floors featuring modern amenities and earthquake-resistant design.",
          image: "/placeholder.svg?height=600&width=800",
          link: "/projects/residential-tower",
        },
      ],
      relatedServices: ["project-planning", "structural-engineering", "consultation"],
    },
    // Add more services as needed
  }

  return services[id as keyof typeof services] || null
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const [service, setService] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchedService = getServiceData(params.id)
    setService(fetchedService)
    setIsLoading(false)
  }, [params.id])

  if (isLoading) {
    return (
      <div className="pt-24 pb-16 container">
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="pt-24 pb-16 container">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist or has been moved.</p>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <Link href="/services">
          <Button variant="ghost" className="mb-6 pl-0 transition-all duration-300 hover:pl-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
              <p className="text-muted-foreground mb-6 text-lg">{service.description}</p>
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: service.fullDescription }}
              />
            </motion.div>

            {service.projects && service.projects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.projects.map((project: any, index: number) => (
                    <Link key={index} href={project.link} className="group">
                      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold mb-2">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-card rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {service.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service.benefits && (
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-primary/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us today to discuss your project requirements and how our {service.title.toLowerCase()} services
                can help you achieve your goals.
              </p>
              <Link href="/contact">
                <Button className="w-full group transition-all duration-300 hover:shadow-md">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {service.relatedServices && service.relatedServices.length > 0 && (
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Related Services</h3>
                <ul className="space-y-3">
                  {service.relatedServices.map((relatedServiceId: string) => {
                    const relatedService = getServiceData(relatedServiceId)
                    return relatedService ? (
                      <li key={relatedServiceId}>
                        <Link
                          href={`/services/${relatedServiceId}`}
                          className="flex items-center justify-between p-3 rounded-md hover:bg-muted transition-colors duration-200"
                        >
                          <span className="font-medium">{relatedService.title}</span>
                          <ArrowRight className="h-4 w-4 text-primary" />
                        </Link>
                      </li>
                    ) : null
                  })}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
