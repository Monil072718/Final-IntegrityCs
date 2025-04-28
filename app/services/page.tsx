"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const services = [
  {
    id: "structural-engineering",
    title: "Structural Engineering",
    description:
      "Expert structural design and analysis for buildings, bridges, and infrastructure projects of all sizes.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Structural design and analysis",
      "Seismic design and retrofitting",
      "Structural inspections and assessments",
      "Foundation design",
      "Reinforced concrete design",
      "Steel structure design",
    ],
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
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Project scheduling and planning",
      "Cost estimation and budgeting",
      "Quality control and assurance",
      "Contract administration",
      "Site supervision and management",
      "Risk management",
    ],
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
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Conceptual design development",
      "3D modeling and visualization",
      "Space planning and optimization",
      "Sustainable design solutions",
      "Interior design integration",
      "Building code compliance",
    ],
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
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Feasibility studies",
      "Site selection and analysis",
      "Master planning",
      "Environmental impact assessment",
      "Permitting and approvals",
      "Project lifecycle planning",
    ],
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
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Building assessment and evaluation",
      "Structural retrofitting",
      "Energy efficiency upgrades",
      "Code compliance updates",
      "Historic building preservation",
      "Adaptive reuse planning",
    ],
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
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Technical consulting",
      "Peer review services",
      "Expert witness testimony",
      "Due diligence investigations",
      "Value engineering",
      "Constructability reviews",
    ],
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

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="pt-24 pb-16">
      <div
        className="relative bg-cover bg-center py-20 mb-12"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            We offer a comprehensive range of civil engineering services to meet all your project needs.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search services..."
              className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link}>
                    <Button
                      className="w-full group transition-all duration-300 hover:shadow-md"
                      variant={hoveredService === service.id ? "default" : "outline"}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-muted/30 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our team of experts is ready to help you with your specific project requirements. Contact us today to
            discuss your needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-md">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
