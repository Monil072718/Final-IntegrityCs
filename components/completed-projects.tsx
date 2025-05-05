"use client"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin, Award } from "lucide-react"

// This would typically come from a database or API
const completedProjects = [
  {
    id: "commercial-tower",
    title: "Commercial Tower",
    description: "A 35-story commercial tower with state-of-the-art facilities and sustainable design.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Commercial",
    completionDate: "December 2022",
    location: "Downtown Metro",
    awards: ["Best Commercial Design 2022", "Sustainability Excellence Award"],
    link: "/projects/completed/commercial-tower",
  },
  {
    id: "highway-bridge",
    title: "Highway Bridge",
    description: "A 1.2km reinforced concrete bridge connecting two major highways.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Infrastructure",
    completionDate: "August 2021",
    location: "River Valley",
    awards: ["Engineering Excellence Award"],
    link: "/projects/completed/highway-bridge",
  },
  {
    id: "residential-complex",
    title: "Luxury Residential Complex",
    description: "A complex of 5 residential buildings with 250 premium apartments and amenities.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Residential",
    completionDate: "March 2023",
    location: "Coastal Heights",
    awards: ["Best Residential Project 2023"],
    link: "/projects/completed/residential-complex",
  },
  {
    id: "shopping-mall",
    title: "Metro Shopping Mall",
    description: "A modern shopping mall with 150 retail spaces, food court, and entertainment zones.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Commercial",
    completionDate: "November 2022",
    location: "City Center",
    awards: [],
    link: "/projects/completed/shopping-mall",
  },
]

export default function CompletedProjects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16 container" id="completed-projects">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Completed Projects</h2>
        <p className="text-muted-foreground">
          Browse through our portfolio of successfully completed projects that showcase our expertise and commitment to
          excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
        {completedProjects.slice(0, 3).map((project, index) => (
          <Card
            key={project.id}
            className={`overflow-hidden border-none shadow-lg transition-all duration-500 hover:shadow-xl ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative h-60 overflow-hidden">
              <Badge className="absolute top-4 left-4 z-10">{project.category}</Badge>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span>Completed: {project.completionDate}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span>{project.location}</span>
                </div>
                {project.awards.length > 0 && (
                  <div className="flex items-center text-sm">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    <span>{project.awards[0]}</span>
                  </div>
                )}
              </div>

              <Link href={project.link} passHref>
                <Button className="w-full group" asChild>
                  <a>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/projects/completed" passHref>
          <Button variant="outline" size="lg" asChild>
            <a>
              View All Completed Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </Link>
      </div>
    </section>
  )
}
