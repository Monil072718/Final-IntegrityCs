"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: "structural-engineering",
    title: "Structural Engineering",
    description:
      "Expert structural design and analysis for buildings, bridges, and infrastructure projects of all sizes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary h-10 w-10"
      >
        <path d="M6 22V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
        <path d="M6 18h12" />
      </svg>
    ),
    link: "/services/structural-engineering",
  },
  {
    id: "construction-management",
    title: "Construction Management",
    description:
      "Comprehensive construction management services to ensure your project is completed on time and within budget.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary h-10 w-10"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    link: "/services/construction-management",
  },
  {
    id: "architectural-design",
    title: "Architectural Design",
    description:
      "Creative and functional architectural design services that blend aesthetics with practical engineering solutions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary h-10 w-10"
      >
        <path d="M2 3h20" />
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
        <path d="m7 21 5-5 5 5" />
      </svg>
    ),
    link: "/services/architectural-design",
  },
  {
    id: "project-planning",
    title: "Project Planning",
    description:
      "Strategic project planning and feasibility studies to set your project up for success from the beginning.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary h-10 w-10"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
        <path d="M9 9h1" />
      </svg>
    ),
    link: "/services/project-planning",
  },
  {
    id: "renovation",
    title: "Renovation & Retrofitting",
    description:
      "Specialized services for renovating and retrofitting existing structures to meet modern standards and requirements.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary h-10 w-10"
      >
        <path d="M20 7h-9" />
        <path d="M14 17H5" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
      </svg>
    ),
    link: "/services/renovation",
  },
  {
    id: "consultation",
    title: "Engineering Consultation",
    description:
      "Expert consultation services for all aspects of civil engineering, from initial concept to project completion.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary h-10 w-10"
      >
        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.8a2 2 0 0 0 1.4-.6L12 4.6a2 2 0 0 1 1.4-.6H20a2 2 0 0 1 2 2v1.4c0 .63-.3 1.22-.8 1.6" />
        <path d="m8 10 4 4 4-4" />
        <path d="M12 14v4" />
      </svg>
    ),
    link: "/services/consultation",
  },
]

export default function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16 bg-pattern-dots" id="services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            We offer a comprehensive range of civil engineering services to meet all your project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <Link href={service.link} className="mt-auto">
                  <Button
                    variant="outline"
                    className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" className="hover:scale-105 transition-transform duration-300">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
